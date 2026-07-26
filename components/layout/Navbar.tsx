"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Impact", id: "impact" },
  { name: "Technology", id: "technology" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section '${id}' not found.`);
      return;
    }

    const offset = 64; // navbar height

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-tight text-white"
        >
          AKILO<span className="text-cyan-400">.</span>
        </button>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative pb-1 text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {item.name}

              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Resume */}
        <div className="hidden lg:block">
          <Button
            onClick={() =>
              window.open("/Akilo_Resume.pdf", "_blank")
            }
          >
            Resume
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 bg-slate-950 text-white"
          >
            <div className="mt-12 flex flex-col gap-6 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <Button
                className="mt-8 w-full"
                onClick={() =>
                  window.open("/Akilo_Resume.pdf", "_blank")
                }
              >
                Download Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}