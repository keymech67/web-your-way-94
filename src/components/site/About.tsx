import keyboard from "@/assets/keyboard.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 pixel-grid-bg opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-sm bg-gradient-to-br from-creeper/30 to-diamond/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-sm border border-border pixel-shadow">
            <img
              src={keyboard}
              alt="Custom mechanical keyboard with Minecraft keycaps"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-sm border border-creeper/60 bg-background/90 px-4 py-3 backdrop-blur pixel-shadow">
            <div className="font-display text-[10px] text-creeper">CLACK FACTOR</div>
            <div className="mt-1 font-display text-2xl">11/10</div>
          </div>
        </div>

        <div>
          <div className="font-display text-[10px] text-diamond">// ABOUT THE CHANNEL</div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            TWO LOVES.<br />
            <span className="text-diamond">ONE CHANNEL.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            I'm the creator behind <span className="text-foreground">@mechanical_keyboard_op</span> — a place where the satisfying thock of premium switches meets the endless creativity of Minecraft. From building working redstone CPUs to reviewing the latest custom keycap sets, every video is crafted with obsession.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Redstone Engineering", d: "Working machines, hidden bases, automated farms." },
              { t: "Hardcore Survival", d: "100-day challenges with permanent death stakes." },
              { t: "Keyboard Reviews", d: "Switches, keycaps, custom builds, and sound tests." },
              { t: "Setup Tours", d: "The gear that powers the grind, fully broken down." },
            ].map((f) => (
              <div key={f.t} className="rounded-sm border border-border bg-card/60 p-4 transition-colors hover:border-creeper/60">
                <div className="font-display text-[11px] text-creeper">{f.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
