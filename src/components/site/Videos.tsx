import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";

const videos = [
  { title: "I Built a Hidden Redstone Base Inside a Mountain", tag: "REDSTONE", duration: "14:22", views: "412", gradient: "from-redstone/80 to-redstone/20", icon: "⚡" },
  { title: "Testing 10 Mechanical Switches While Speedrunning", tag: "KEYBOARDS", duration: "9:48", views: "287", gradient: "from-creeper/80 to-creeper/20", icon: "⌨" },
  { title: "Surviving 100 Days in Hardcore — Diamond Empire", tag: "HARDCORE", duration: "31:05", views: "1.2K", gradient: "from-diamond/80 to-diamond/20", icon: "💎" },
  { title: "Building a Working Computer Inside Minecraft", tag: "INSANE", duration: "22:17", views: "654", gradient: "from-gold/80 to-gold/20", icon: "🛠" },
  { title: "My Setup Tour 2025 — Budget Minecraft Rig", tag: "SETUP", duration: "11:32", views: "198", gradient: "from-accent/80 to-accent/20", icon: "🎹" },
  { title: "Why Mechanical Keyboards Make You BETTER at Minecraft", tag: "GUIDE", duration: "7:54", views: "523", gradient: "from-creeper/80 to-diamond/20", icon: "🎯" },
];

function VideoCard({ v, i }: { v: (typeof videos)[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { ref: revealRef, shown } = useReveal<HTMLDivElement>(0.15);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div ref={revealRef} className={shown ? "reveal-in" : "reveal"} style={{ animationDelay: `${i * 90}ms` }}>
      <a
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        href="https://youtube.com/@mechanical_keyboard_op"
        target="_blank"
        rel="noreferrer"
        className="tilt-card group relative block overflow-hidden rounded-sm border border-border bg-card hover:border-creeper/60 hover:pixel-shadow"
      >
        <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${v.gradient}`}>
          <div className="absolute inset-0 pixel-grid-bg opacity-40" />
          <div className="absolute inset-0 grid place-items-center text-6xl opacity-80 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
            <span className="tilt-inner">{v.icon}</span>
          </div>
          <div className="absolute right-3 top-3 rounded-sm bg-background/80 px-2 py-1 font-display text-[9px] backdrop-blur">{v.tag}</div>
          <div className="absolute bottom-3 right-3 rounded-sm bg-background/80 px-2 py-1 text-xs font-mono backdrop-blur">{v.duration}</div>
          <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-redstone pixel-shadow animate-glow">
              <span className="ml-1 text-2xl text-white">▶</span>
            </div>
          </div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-creeper">{v.title}</h3>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{v.views} views</span>
            <span>•</span>
            <span>recent</span>
          </div>
        </div>
      </a>
    </div>
  );
}

const marqueeItems = ["CRAFT", "MINE", "BUILD", "SURVIVE", "REDSTONE", "9PM GMT", "DAILY DROPS", "KEYMECH_"];

export function Videos() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  return (
    <section id="videos" className="relative py-24 sm:py-32">
      {/* Scrolling marquee divider */}
      <div className="absolute inset-x-0 top-0 -translate-y-1/2 overflow-hidden border-y border-border bg-card/40 py-3 backdrop-blur">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-[11px] text-muted-foreground">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="text-creeper">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={ref} className={`mb-14 flex flex-wrap items-end justify-between gap-4 ${shown ? "reveal-in" : "reveal"}`}>
          <div>
            <div className="font-display text-[10px] text-creeper">// LATEST DROPS</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">FEATURED BUILDS</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Redstone contraptions, hardcore runs, and switch tests — handpicked from the channel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <VideoCard key={v.title} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
