import { useEffect, useRef, useState, type ReactNode } from "react";

/* =========================================================
   Scroll progress bar (top of page)
========================================================= */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-creeper via-diamond to-gold shadow-[0_0_18px_oklch(0.78_0.22_142/0.7)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

/* =========================================================
   Cursor glow + spawn pixel blocks on move (desktop only)
========================================================= */
export function CursorFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let tx = x;
    let ty = y;
    let last = 0;
    const colors = ["var(--creeper)", "var(--diamond)", "var(--gold)", "var(--redstone)"];

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const now = performance.now();
      if (now - last > 60 && layerRef.current) {
        last = now;
        const b = document.createElement("span");
        const size = 6 + Math.random() * 10;
        b.className = "cursor-block";
        b.style.left = `${e.clientX}px`;
        b.style.top = `${e.clientY}px`;
        b.style.width = `${size}px`;
        b.style.height = `${size}px`;
        b.style.background = colors[(Math.random() * colors.length) | 0];
        b.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
        b.style.setProperty("--dy", `${30 + Math.random() * 60}px`);
        b.style.setProperty("--rot", `${(Math.random() - 0.5) * 360}deg`);
        layerRef.current.appendChild(b);
        setTimeout(() => b.remove(), 900);
      }
    };
    const loop = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
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
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] rounded-full opacity-50 mix-blend-screen blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.22 142 / 0.4) 0%, transparent 60%)" }}
      />
      <div ref={layerRef} aria-hidden className="pointer-events-none fixed inset-0 z-[55]" />
    </>
  );
}

/* =========================================================
   Click ripple on any element with data-ripple, plus
   block-burst anywhere when you click empty space.
========================================================= */
export function ClickFX() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const colors = ["var(--creeper)", "var(--diamond)", "var(--gold)", "var(--redstone)"];
      const layer = document.createElement("div");
      layer.className = "burst-layer";
      layer.style.left = `${e.clientX}px`;
      layer.style.top = `${e.clientY}px`;
      for (let i = 0; i < 10; i++) {
        const b = document.createElement("span");
        b.className = "burst-block";
        const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.4;
        const dist = 40 + Math.random() * 60;
        b.style.background = colors[(Math.random() * colors.length) | 0];
        b.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
        b.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
        b.style.setProperty("--rot", `${Math.random() * 540 - 270}deg`);
        const s = 4 + Math.random() * 8;
        b.style.width = `${s}px`;
        b.style.height = `${s}px`;
        layer.appendChild(b);
      }
      document.body.appendChild(layer);
      setTimeout(() => layer.remove(), 800);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
  return null;
}

/* =========================================================
   Canvas particle network reacting to cursor
========================================================= */
export function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = innerWidth * devicePixelRatio);
    let h = (canvas.height = innerHeight * devicePixelRatio);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const count = Math.min(70, Math.floor((innerWidth * innerHeight) / 22000));
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.4 * devicePixelRatio,
    }));
    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX * devicePixelRatio;
      mouse.y = e.clientY * devicePixelRatio;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      w = canvas.width = innerWidth * devicePixelRatio;
      h = canvas.height = innerHeight * devicePixelRatio;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    let raf = 0;
    const linkDist = 120 * devicePixelRatio;
    const mouseDist = 180 * devicePixelRatio;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < mouseDist) {
          p.vx -= (dx / d) * 0.08;
          p.vy -= (dy / d) * 0.08;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.fillStyle = "oklch(0.78 0.22 142 / 0.7)";
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i];
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const o = (1 - d / linkDist) * 0.35;
            ctx.strokeStyle = `oklch(0.78 0.22 142 / ${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
    />
  );
}

/* =========================================================
   Magnetic button — pulls toward cursor on hover
========================================================= */
export function MagneticButton({
  children,
  href,
  className = "",
  ...rest
}: {
  children: ReactNode;
  href: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

/* =========================================================
   Typewriter cycler — rotates through phrases
========================================================= */
export function Typewriter({ words, className = "" }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 50 : 95;
    const timer = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block w-[0.5ch] animate-pulse">▌</span>
    </span>
  );
}

/* =========================================================
   3D rotating Minecraft block (CSS-only)
========================================================= */
export function RotatingBlock() {
  return (
    <div className="block-stage" aria-hidden>
      <div className="block-cube">
        <span className="cube-face cube-front" />
        <span className="cube-face cube-back" />
        <span className="cube-face cube-right" />
        <span className="cube-face cube-left" />
        <span className="cube-face cube-top" />
        <span className="cube-face cube-bottom" />
      </div>
    </div>
  );
}
