import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";

const gear = [
  { cat: "BOARD", name: "EvoFox Katana S Mini", desc: "Compact gaming layout", color: "creeper" },
  { cat: "SWITCHES", name: "Red Switches", desc: "Linear, smooth & quiet", color: "diamond" },
  { cat: "KEYCAPS", name: "Anti-Ghosting Caps", desc: "Every key registers, no drops", color: "gold" },
  { cat: "MOUSE", name: "Protonix", desc: "Daily driver, dialed in", color: "redstone" },
  { cat: "LAPTOP", name: "HP Laptop", desc: "Intel Celeron · 4GB RAM", color: "accent" },
  { cat: "GPU", name: "Intel Integrated", desc: "Proof you don't need a beast PC", color: "creeper" },
];

function GearCard({ g, i }: { g: (typeof gear)[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  const onMove = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} className={shown ? "reveal-in" : "reveal"} style={{ animationDelay: `${i * 80}ms` }}>
      <div
        ref={cardRef}
        onPointerMove={onMove}
        className="group relative overflow-hidden rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-creeper/60 hover:pixel-shadow"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.22 142 / 0.18), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1 opacity-60 transition-opacity group-hover:opacity-100" style={{ backgroundColor: `var(--${g.color})` }} />
        <div className="flex items-center justify-between">
          <div className="font-display text-[10px] text-muted-foreground">{g.cat}</div>
          <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
        </div>
        <div className="mt-4 text-lg font-semibold text-foreground">{g.name}</div>
        <div className="mt-1 text-sm text-muted-foreground">{g.desc}</div>
      </div>
    </div>
  );
}

export function Setup() {
  return (
    <section id="setup" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="font-display text-[10px] text-gold">// THE LOADOUT</div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">CURRENT SETUP</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Every block placed, every switch pressed — here's what's powering the channel right now.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((g, i) => (
            <GearCard key={g.name} g={g} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
