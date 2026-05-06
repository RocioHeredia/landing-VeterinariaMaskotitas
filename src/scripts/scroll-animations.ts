import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAnimations(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // — Hero: entrada escalonada —
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  heroTl
    .from('.hero-badge',  { opacity: 0, y: 16, duration: 0.5 }, 0.15)
    .from('.hero-title',  { opacity: 0, y: 24, duration: 0.6 }, 0.3)
    .from('.hero-desc',   { opacity: 0, y: 16, duration: 0.5 }, 0.5)
    .from('.hero-cta',    { opacity: 0, y: 16, duration: 0.5 }, 0.65)
    .from('.hero-images', { opacity: 0, scale: 0.96, duration: 0.7, ease: 'power2.out' }, 0.4);

  // — Hero blob: parallax en scroll —
  gsap.to('.hero-blob', {
    y: '35%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  // — Secciones: fade-in-up al entrar en viewport —
  gsap.utils.toArray<Element>('.section-fade').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 36,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    });
  });

  // — Nav: fade-in inicial —
  gsap.from('#main-nav', { opacity: 0, y: -20, duration: 0.5, delay: 0.1, ease: 'power2.out' });
}
