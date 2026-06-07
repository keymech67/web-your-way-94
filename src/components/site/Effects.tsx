import { useEffect, useRef } from "react";

/** Subtle cursor glow that follows the pointer. Hidden on touch. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen blur-3xl"
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.22 142 / 0.35) 0%, transparent 60%)",
      }}
    />
  );
}

/** Falling pixel blocks across the page. */
export function PixelRain({ count = 18 }: { count?: number }) {
  const blocks = Array.from({ length: count }).map((_, i) => {
    const size = 6 + Math.round(Math.random() * 14);
    const left = Math.round(Math.random() * 100);
    const delay = Math.round(Math.random() * 12000) / 1000;
    const duration = 10 + Math.round(Math.random() * 14);
    const palette = ["var(--creeper)", "var(--diamond)", "var(--gold)", "var(--redstone)"];
    const color = palette[i % palette.length];
    return (
      <span
        key={i}
        aria-hidden
        className="pixel-rain-block"
        style={{
          left: `${left}%`,
          width: size,
          height: size,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">{blocks}</div>
  );
}
