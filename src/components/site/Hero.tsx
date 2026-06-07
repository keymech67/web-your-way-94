import hero from "@/assets/hero-minecraft.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="Minecraft voxel landscape with glowing diamonds"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 pixel-grid-bg opacity-60" />

      {/* Floating blocks */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
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

          <h1 className="font-display text-4xl leading-[1.15] text-foreground text-glow-creeper sm:text-6xl lg:text-7xl animate-block-pop" style={{ animationDelay: "0.1s" }}>
            CRAFT.<br />
            CLICK.<br />
            <span className="text-creeper">CONQUER.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Welcome to <span className="text-foreground font-semibold">@mechanical_keyboard_op</span> — your daily dose of Minecraft gameplay, builds, and pro tips. New video every day at 9PM GMT.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://youtube.com/@mechanical_keyboard_op"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-sm bg-gradient-to-r from-creeper to-creeper/80 px-7 py-4 font-display text-xs text-primary-foreground pixel-shadow transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[6px_6px_0_oklch(0_0_0/0.4)]"
            >
              ▶ WATCH ON YOUTUBE
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-7 py-4 font-display text-xs backdrop-blur transition-colors hover:bg-card"
            >
              EXPLORE BUILDS
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {[
              { v: "201", l: "Subscribers" },
              { v: "26K", l: "Views" },
              { v: "80", l: "Videos" },
            ].map((s) => (
              <div key={s.l} className="rounded-sm border border-border/60 bg-card/40 p-4 backdrop-blur transition-all hover:border-creeper/60 hover:bg-card">
                <div className="font-display text-lg text-creeper">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display text-muted-foreground animate-float">
        ▼ SCROLL
      </div>
    </section>
  );
}
