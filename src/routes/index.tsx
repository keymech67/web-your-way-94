import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Spotter — A Sky Watcher's Guide" },
      {
        name: "description",
        content:
          "A whimsical one-page guide to clouds, weather, and the art of looking up.",
      },
      { property: "og:title", content: "Cloud Spotter — A Sky Watcher's Guide" },
      {
        property: "og:description",
        content: "Learn to read the sky. A one-page guide to clouds and weather.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            Cloud Spotter
          </span>
          <div className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#types" className="hover:text-foreground transition-colors">Types</a>
            <a href="#facts" className="hover:text-foreground transition-colors">Facts</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-20 bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Look Up More Often
          </p>
          <h1 className="font-serif text-5xl leading-[1.1] text-foreground sm:text-7xl">
            The Art of
            <br />
            <span className="text-primary italic">Cloud Watching</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every cloud tells a story. Learn to read the sky like a book — from fluffy cumulus to
            dramatic cumulonimbus and everything in between.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#types"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Explore Cloud Types
            </a>
            <a
              href="#facts"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/80"
            >
              Random Facts
            </a>
          </div>
        </div>
      </header>

      {/* Cloud Types Section */}
      <section id="types" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Cloud Types</h2>
            <p className="mt-3 text-muted-foreground">
              The ten main genera, classified by altitude and appearance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clouds.map((c) => (
              <CloudCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Marquee */}
      <section id="facts" className="border-y border-border bg-card/50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-serif text-3xl text-foreground sm:text-4xl">
            Did You Know?
          </h2>
          <div className="space-y-6">
            {facts.map((f, i) => (
              <FactRow key={i} index={i + 1} text={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Sky Gallery</h2>
            <p className="mt-3 text-muted-foreground">
              A collection of remarkable cloud formations from around the world.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{g.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-lg font-bold text-foreground">Cloud Spotter</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Built for people who still look up.
          </p>
          <p className="mt-6 text-xs text-muted-foreground/60">
            A random one-page website. No cookies. No tracking. Just clouds.
          </p>
        </div>
      </footer>
    </div>
  );
}

function CloudCard({
  name,
  latin,
  desc,
  color,
}: {
  name: string;
  latin: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div
        className="mb-4 h-3 w-12 rounded-full transition-transform duration-300 group-hover:scale-x-150"
        style={{ background: color }}
      />
      <h3 className="font-serif text-xl font-bold text-foreground">{name}</h3>
      <p className="mt-1 text-xs italic text-muted-foreground">{latin}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

function FactRow({ index, text }: { index: number; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-background p-5 transition-colors hover:border-primary/30">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
        {index}
      </span>
      <p className="text-sm leading-relaxed text-foreground sm:text-base">{text}</p>
    </div>
  );
}

const clouds = [
  {
    name: "Cumulus",
    latin: "heap / pile",
    desc: "Fair-weather clouds with flat bases and fluffy tops. They look like cotton balls and usually mean a nice day ahead.",
    color: "linear-gradient(90deg, #e8d5b7, #d4b896)",
  },
  {
    name: "Stratus",
    latin: "layer / sheet",
    desc: "Low, gray, uniform clouds that often cover the entire sky like a blanket. Classic overcast weather.",
    color: "linear-gradient(90deg, #a8b5c4, #8a9aad)",
  },
  {
    name: "Cirrus",
    latin: "curl of hair",
    desc: "Wispy, high-altitude clouds made of ice crystals. They look like delicate brushstrokes painted across the sky.",
    color: "linear-gradient(90deg, #c8dce8, #a8c4d8)",
  },
  {
    name: "Cumulonimbus",
    latin: "heap + rainstorm",
    desc: "Towering thunderstorm clouds that can reach the stratosphere. Nature's skyscrapers, capable of producing lightning, hail, and tornadoes.",
    color: "linear-gradient(90deg, #6b7280, #4b5563)",
  },
  {
    name: "Altocumulus",
    latin: "mid + heap",
    desc: "Mid-level clouds that appear as white or gray patches, sometimes arranged in rows or waves. Often called 'mackerel sky.'",
    color: "linear-gradient(90deg, #b8c8d8, #9aacbe)",
  },
  {
    name: "Nimbostratus",
    latin: "rain + layer",
    desc: "Dark, thick layers that bring steady, prolonged rain or snow. The cloud that makes you reach for an umbrella.",
    color: "linear-gradient(90deg, #5a6a7a, #3a4a5a)",
  },
];

const facts = [
  "A single cumulus cloud can weigh more than 1 million pounds — about as much as 100 elephants — yet it floats because the air beneath it is even heavier.",
  "Clouds are not actually white. They are made of tiny water droplets that scatter all wavelengths of sunlight equally, which our eyes perceive as white.",
  "The highest clouds, called noctilucent clouds, form at around 50 miles up in the mesosphere and are visible only at twilight when they reflect sunlight from below the horizon.",
  "Fog is simply a cloud that is touching the ground. Radiation fog, advection fog, and sea fog are just clouds that decided to come down for a visit.",
  "On other planets, clouds are made of different substances. Venus has sulfuric acid clouds, Mars has dry ice clouds, and Jupiter has clouds made of ammonia.",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
    alt: "Dramatic cumulonimbus over open plains",
  },
  {
    src: "https://images.unsplash.com/photo-1504253163759-c23fcc7597bd?w=800&q=80",
    alt: "Golden hour cirrus streaks",
  },
  {
    src: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&q=80",
    alt: "Fluffy cumulus on a summer day",
  },
  {
    src: "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=800&q=80",
    alt: "Storm clouds rolling in",
  },
  {
    src: "https://images.unsplash.com/photo-1431512284068-4c4002298068?w=800&q=80",
    alt: "Layered stratus at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
    alt: "Mountain clouds and mist",
  },
];
