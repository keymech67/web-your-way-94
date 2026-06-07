export function Join() {
  return (
    <section id="join" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-creeper/20 via-background to-diamond/20" />
      <div className="absolute inset-0 -z-10 pixel-grid-bg opacity-40" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-sm border border-creeper/40 bg-creeper/10 px-3 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-creeper" />
          <span className="font-display text-[10px] text-creeper">JOIN THE CRAFTERS</span>
        </div>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl text-glow-creeper">
          READY TO<br />
          <span className="text-creeper">BUILD?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          New Minecraft video every day at 9PM GMT. Gameplay, tips, builds — zero filler. Subscribe and link up in Discord.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://youtube.com/@mechanical_keyboard_op"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm bg-redstone px-8 py-4 font-display text-xs text-white pixel-shadow transition-all hover:-translate-y-0.5 hover:translate-x-0.5 animate-glow"
          >
            ▶ SUBSCRIBE NOW
          </a>
          <a
            href="https://discord.com/users/keymech_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-8 py-4 font-display text-xs transition-colors hover:bg-secondary"
          >
            DISCORD · KEYMECH_
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-gradient-to-br from-creeper to-creeper/60">
            <span className="font-display text-[8px] text-primary-foreground">MK</span>
          </span>
          <span className="font-display text-[10px]">MECHANICAL_KEYBOARD_OP</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 — Crafted block by block. Not affiliated with Mojang.
        </div>
      </div>
    </footer>
  );
}
