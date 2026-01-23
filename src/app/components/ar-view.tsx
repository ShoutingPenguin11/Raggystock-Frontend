'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Box from '@/app/components/box';

interface ARViewProps {
  endARSession: boolean;
  spinRight: boolean;
  spinLeft: boolean;
}
export default function ARView({ endARSession, spinLeft, spinRight }: ARViewProps) {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const reticleRef = useRef<THREE.Mesh | null>(null);
  const hitTestSourceRef = useRef<XRHitTestSource | null>(null);
  const hitTestRequestedRef = useRef(false);
  const modelRef = useRef<THREE.Object3D | null>(null);

  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const rightSpinState = useRef(spinRight);
  const leftSpinState = useRef(spinLeft);

  const raycaster = new THREE.Raycaster();
  const tempMatrix = new THREE.Matrix4();

  const startAR = async () => {
    try {
      const session = await navigator.xr!.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        domOverlay: { root: document.body },
      });

      rendererRef.current!.xr.setReferenceSpaceType('local');
      rendererRef.current!.xr.setSession(session);
      setPlacing(true);
    } catch {
      setError('Failed to start AR');
    }
  };

  useEffect(() => {
    rightSpinState.current = spinRight;
    leftSpinState.current = spinLeft;
  }, [spinLeft, spinRight]);

  useEffect(() => {
    if (endARSession) {
      const session = rendererRef.current?.xr.getSession();
      session?.end();
    }
  }, [endARSession]);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera();
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    rendererRef.current = renderer;

    // Lights
    scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(1, 2, 1);
    scene.add(dir);

    // Reticle
    const reticle = new THREE.Mesh(new THREE.CircleGeometry(0.1, 32), new THREE.MeshBasicMaterial({ color: 0xbd0000 }));
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);
    reticleRef.current = reticle;

    // Load model
    new GLTFLoader().load('/models/couch.glb', (gltf) => {
      const model = gltf.scene;

      // Normalize scale to meters
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);

      // Floor align
      const box2 = new THREE.Box3().setFromObject(model);
      model.position.y -= box2.min.y;

      model.visible = false;
      model.rotateY(25);
      scene.add(model);
      modelRef.current = model;
    });

    // Controller (tap)
    const controller = renderer.xr.getController(0);
    scene.add(controller);

    controller.addEventListener('select', () => {
      const reticle = reticleRef.current;
      const model = modelRef.current;
      if (!reticle || !reticle.visible || !model) return;

      tempMatrix.identity().extractRotation(controller.matrixWorld);
      raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
      raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
      const intersects = raycaster.intersectObject(reticle, false);
      if (!intersects.length) return;

      model.visible = true;
      model.position.setFromMatrixPosition(reticle.matrix);
      model.quaternion.setFromRotationMatrix(reticle.matrix);
    });

    // Render loop
    renderer.setAnimationLoop((_, frame) => {
      const model = modelRef.current;
      if (model) {
        if (rightSpinState.current) {
          model.rotation.y += 0.02;
        }
        if (leftSpinState.current) {
          model.rotation.y -= 0.02;
        }
      }
      if (frame) {
        const session = renderer.xr.getSession();
        const refSpace = renderer.xr.getReferenceSpace();

        if (!hitTestRequestedRef.current && session) {
          session.requestReferenceSpace('viewer').then((space) => {
            session.requestHitTestSource?.({ space })?.then((source) => {
              hitTestSourceRef.current = source;
            });
          });
          hitTestRequestedRef.current = true;
        }

        if (hitTestSourceRef.current && refSpace) {
          const hits = frame.getHitTestResults(hitTestSourceRef.current);
          if (hits.length) {
            const pose = hits[0].getPose(refSpace)!;
            reticle.visible = true;
            reticle.matrix.fromArray(pose.transform.matrix);
          } else {
            reticle.visible = false;
          }
        }
      }

      renderer.render(scene, camera);
    });

    return () => renderer.dispose();
  }, []);

  return (
    <Box>
      {!placing && (
        <Box
          onClick={startAR}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#BD0000] text-white p-[20px] rounded-xl font-bold"
        >
          View in your space
        </Box>
      )}

      {error && (
        <Box className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg">
          {error}
        </Box>
      )}
    </Box>
  );
}
