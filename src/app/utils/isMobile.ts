export default function checkViewportWidth(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.screen.width <= 768) {
    return true;
  } else {
    return false;
  }
}
