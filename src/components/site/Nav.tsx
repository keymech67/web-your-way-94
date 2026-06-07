import { useEffect, useState } from "react";

const links = [
  { href: "#videos", label: "Videos" },
  { href: "#about", label: "About" },
  { href: "#setup", label: "Setup" },
  { href: "#join", label: "Join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-to-br from-creeper to-creeper/60 pixel-shadow transition-transform group-hover:rotate-3">
            <span className="font-display text-[10px] text-primary-foreground">MK</span>
          </span>
          <span className="font-display text-xs sm:text-sm">MECH_OP</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://youtube.com/@mechanical_keyboard_op"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-redstone px-4 py-2 font-display text-[10px] text-white pixel-shadow transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          SUBSCRIBE
        </a>
      </nav>
    </header>
  );
}
