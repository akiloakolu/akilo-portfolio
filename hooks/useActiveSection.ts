"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "impact",
  "technology",
  "experience",
  "projects",
  "certifications",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "home";

      for (const id of sections) {
        const element = document.getElementById(id);

        if (!element) continue;

        const offsetTop = element.offsetTop;

        if (scrollPosition >= offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Run once when page loads
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}