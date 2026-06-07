import keyboard from "@/assets/keyboard.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const left = useReveal<HTMLDivElement>(0.25);
  const right = useReveal<HTMLDivElement>(0.25);
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 pixel-grid-bg opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div ref={left.ref} className={`relative ${left.shown ? "reveal-in" : "reveal"}`}>
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

        <div ref={right.ref} className={right.shown ? "reveal-in" : "reveal"} style={{ animationDelay: "150ms" }}>
          <div className="font-display text-[10px] text-diamond">// ABOUT THE CHANNEL</div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            MINECRAFT.<br />
            <span className="text-diamond">EVERY DAY.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            I'm the creator behind <span className="text-foreground">@mechanical_keyboard_op</span> — a Minecraft channel built for players who want to actually get better. Gameplay, builds, and bite-sized tips that you can use the same day. New upload every day at <span className="text-foreground">9PM GMT</span>, no exceptions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Daily Gameplay", d: "Survival sessions, challenges, and raw runs." },
              { t: "Pro Tips", d: "Quick tricks to level up your game fast." },
              { t: "Cool Builds", d: "From starter bases to giant megastructures." },
              { t: "Community", d: "Hop into Discord and craft with the crew." },
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
