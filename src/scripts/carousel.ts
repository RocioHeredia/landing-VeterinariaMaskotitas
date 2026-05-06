export function enableCarousel(el: HTMLElement): void {
  // Desktop (pointer: fine): block wheel/trackpad scroll — arrows only.
  // Mobile (pointer: coarse): native touch scroll is preserved via overflow-x + scroll-snap.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    el.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault();
    }, { passive: false });
  }
}
