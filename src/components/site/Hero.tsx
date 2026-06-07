import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-minecraft.jpg";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

function Stat({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.4);
  const v = useCountUp(target, 1500, shown);
  return (
    <div
      ref={ref}
      className="rounded-sm border border-border/60 bg-card/40 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-creeper/60 hover:bg-card"
    >
      <div className="font-display text-lg text-creeper">
        {v.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLImageElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroRef.current) heroRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y * 0.0004})`;
      if (blocksRef.current) blocksRef.current.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerMove = (e: React.PointerEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: x * 14, y: y * -14 });
  };

  return (
    <section
      id="top"
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <img
        ref={heroRef}
        src={hero}
        alt="Minecraft voxel landscape with glowing diamonds"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 pixel-grid-bg opacity-60" />

      {/* Floating blocks (parallax + mouse-tilt) */}
      <div
        ref={blocksRef}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-transform duration-300"
        style={{ transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)` }}
      >
        <div className="absolute left-[8%] top-[22%] h-12 w-12 rounded-sm bg-gradient-to-br from-creeper to-creeper/40 pixel-shadow animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute right-[12%] top-[18%] h-14 w-14 rounded-sm bg-gradient-to-br from-diamond to-diamond/40 pixel-shadow animate-float" style={{ animationDelay: "1.2s" }} />
        <div className="absolute right-[20%] bottom-[20%] h-10 w-10 rounded-sm bg-gradient-to-br from-gold to-gold/40 pixel-shadow animate-float" style={{ animationDelay: "0.6s" }} />
        <div className="absolute left-[15%] bottom-[28%] h-8 w-8 rounded-sm bg-gradient-to-br from-redstone to-redstone/40 pixel-shadow animate-float" style={{ animationDelay: "1.8s" }} />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-creeper/40 bg-creeper/10 px-3 py-1.5 text-xs animate-block-pop">
            <span className="h-2 w-2 animate-pulse rounded-full bg-creeper" />
            <span className="font-display text-[10px] text-creeper">NEW VIDEO DAILY · 9PM GMT</span>
          </div>

          <h1 className="font-display text-4xl leading-[1.15] text-foreground text-glow-creeper sm:text-6xl lg:text-7xl">
            <span className="inline-block animate-block-pop" style={{ animationDelay: "0.05s" }}>CRAFT.</span><br />
            <span className="inline-block animate-block-pop" style={{ animationDelay: "0.2s" }}>CLICK.</span><br />
            <span className="inline-block text-creeper animate-block-pop" style={{ animationDelay: "0.35s" }}>CONQUER.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Welcome to <span className="text-foreground font-semibold">@mechanical_keyboard_op</span> — your daily dose of Minecraft gameplay, builds, and pro tips. New video every day at 9PM GMT.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.75s" }}>
            <a
              href="https://youtube.com/@mechanical_keyboard_op"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm bg-gradient-to-r from-creeper to-creeper/80 px-7 py-4 font-display text-xs text-primary-foreground pixel-shadow transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[6px_6px_0_oklch(0_0_0/0.4)]"
            >
              <span className="relative z-10">▶ WATCH ON YOUTUBE</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-7 py-4 font-display text-xs backdrop-blur transition-colors hover:bg-card"
            >
              EXPLORE BUILDS
            </a>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6">
            <Stat target={201} label="Subscribers" />
            <Stat target={26} suffix="K" label="Views" />
            <Stat target={80} label="Videos" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display text-muted-foreground animate-float">
        ▼ SCROLL
      </div>
    </section>
  );
}
