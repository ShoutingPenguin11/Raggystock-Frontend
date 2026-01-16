export default function checkViewportWidth(): boolean {
  if (window.screen.width <= 768) {
    return true;
  } else {
    return false;
  }
}
