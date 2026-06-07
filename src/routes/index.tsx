import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Videos } from "@/components/site/Videos";
import { About } from "@/components/site/About";
import { Setup } from "@/components/site/Setup";
import { Join, Footer } from "@/components/site/Join";
import { CursorFX, ClickFX, ScrollProgress, ParticleNetwork } from "@/components/site/Effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "@mechanical_keyboard_op — Minecraft & Mechanical Keyboards" },
      {
        name: "description",
        content:
          "Official site of @mechanical_keyboard_op. Insane Minecraft builds, hardcore runs, redstone engineering, and the most satisfying mechanical keyboard reviews on YouTube.",
      },
      { property: "og:title", content: "@mechanical_keyboard_op — Craft. Click. Conquer." },
      {
        property: "og:description",
        content: "Minecraft mayhem meets mechanical keyboards. New builds every Friday.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <ParticleNetwork />
      <CursorFX />
      <ClickFX />
      <Nav />
      <main>
        <Hero />
        <Videos />
        <About />
        <Setup />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
