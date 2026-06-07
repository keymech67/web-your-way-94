const videos = [
  {
    title: "I Built a Hidden Redstone Base Inside a Mountain",
    tag: "REDSTONE",
    duration: "14:22",
    views: "412K",
    gradient: "from-redstone/80 to-redstone/20",
    icon: "⚡",
  },
  {
    title: "Testing 10 Mechanical Switches While Speedrunning",
    tag: "KEYBOARDS",
    duration: "9:48",
    views: "287K",
    gradient: "from-creeper/80 to-creeper/20",
    icon: "⌨",
  },
  {
    title: "Surviving 100 Days in Hardcore — Diamond Empire",
    tag: "HARDCORE",
    duration: "31:05",
    views: "1.2M",
    gradient: "from-diamond/80 to-diamond/20",
    icon: "💎",
  },
  {
    title: "Building a Working Computer Inside Minecraft",
    tag: "INSANE",
    duration: "22:17",
    views: "654K",
    gradient: "from-gold/80 to-gold/20",
    icon: "🛠",
  },
  {
    title: "My $2000 Custom Keyboard Setup Tour 2025",
    tag: "SETUP",
    duration: "11:32",
    views: "198K",
    gradient: "from-accent/80 to-accent/20",
    icon: "🎹",
  },
  {
    title: "Why Mechanical Keyboards Make You BETTER at Minecraft",
    tag: "GUIDE",
    duration: "7:54",
    views: "523K",
    gradient: "from-creeper/80 to-diamond/20",
    icon: "🎯",
  },
];

export function Videos() {
  return (
    <section id="videos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
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
            <a
              key={v.title}
              href="https://youtube.com/@mechanical_keyboard_op"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-creeper/60 hover:pixel-shadow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${v.gradient}`}>
                <div className="absolute inset-0 pixel-grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center text-6xl opacity-80 transition-transform duration-500 group-hover:scale-110">
                  {v.icon}
                </div>
                <div className="absolute right-3 top-3 rounded-sm bg-background/80 px-2 py-1 font-display text-[9px] backdrop-blur">
                  {v.tag}
                </div>
                <div className="absolute bottom-3 right-3 rounded-sm bg-background/80 px-2 py-1 text-xs font-mono backdrop-blur">
                  {v.duration}
                </div>
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-redstone pixel-shadow animate-glow">
                    <span className="ml-1 text-2xl text-white">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-creeper">
                  {v.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{v.views} views</span>
                  <span>•</span>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
