const gear = [
  { cat: "BOARD", name: "Mode Sonnet 65%", desc: "Brass plate, gasket mount", color: "creeper" },
  { cat: "SWITCHES", name: "Gateron Oil Kings", desc: "Linear, 55g actuation", color: "diamond" },
  { cat: "KEYCAPS", name: "GMK Striker", desc: "Doubleshot ABS cherry profile", color: "gold" },
  { cat: "MOUSE", name: "Logitech G Pro X", desc: "Lightweight, wireless", color: "redstone" },
  { cat: "DISPLAY", name: "LG 27GP950 4K", desc: "144Hz nano IPS", color: "accent" },
  { cat: "PC", name: "Custom RTX 4080", desc: "Ryzen 9 7950X3D", color: "creeper" },
];

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
            <div
              key={g.name}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-creeper/60 hover:pixel-shadow"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-${g.color} opacity-60 transition-opacity group-hover:opacity-100`} style={{ backgroundColor: `var(--${g.color})` }} />
              <div className="flex items-center justify-between">
                <div className="font-display text-[10px] text-muted-foreground">{g.cat}</div>
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              </div>
              <div className="mt-4 text-lg font-semibold text-foreground">{g.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{g.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
