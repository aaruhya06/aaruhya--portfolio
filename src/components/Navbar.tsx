import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-black text-xl tracking-tighter italic" onClick={() => setActiveTab("")}>
          AARUHYA<span className="text-foreground/20">.</span>
        </a>

        {/* Desktop navbar */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link text-[10px] transition-all duration-300",
                activeTab === link.href ? "text-foreground font-black underline decoration-2 underline-offset-4" : "text-foreground/50 font-bold"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-[10px] uppercase font-bold tracking-widest px-4 py-2 border border-black/10"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-black/10 p-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link text-sm transition-all duration-300",
                  activeTab === link.href ? "text-foreground font-black pl-2 border-l-4 border-black" : "text-foreground/50 font-bold"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
