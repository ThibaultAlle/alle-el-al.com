"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (href: string) => {
    setIsOpen(false);

    // Small delay so the mobile menu can close + reflow before we measure and scroll.
    // This fixes cases where the click "does nothing" on mobile.
    setTimeout(() => {
      if (href === "#hero" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        // Larger offset because the big banner logo hangs down into the page content.
        const offset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center overflow-visible relative">
        
        {/* BIG LOGO */}
        {isHomePage ? (
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="absolute left-6 top-0 h-24 w-[320px] z-10 overflow-visible hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/Alle_lab_logo.png"
              alt="Alle et al Lab"
              width={380}
              height={95}
              className="absolute top-1/2 -translate-y-1/2 h-[270px] w-auto object-contain brightness-0 invert pointer-events-none mt-10"
              priority
            />
          </a>
        ) : (
          <Link href="/" className="absolute left-6 top-0 h-24 w-[320px] z-10 overflow-visible hover:opacity-80 transition-opacity">
            <Image
              src="/images/Alle_lab_logo.png"
              alt="Alle et al Lab"
              width={380}
              height={95}
              className="absolute top-1/2 -translate-y-1/2 h-[270px] w-auto object-contain brightness-0 invert pointer-events-none mt-10"
              priority
            />
          </Link>
        )}

        {/* Centered Links */}
        <div className="hidden md:flex items-center justify-between w-full ml-6">
          <div className="w-[340px]"></div>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground/90 hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/90 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="default" asChild>
              <a href="mailto:talle@health.ucsd.edu">Contact</a>
            </Button>

            <Button size="default" variant="ghost" asChild>
              <a
                href="https://pharmacy.ucsd.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image
                  src="/images/UCSDLogo-SkaggsSchool-2023-BlueGold.png"
                  alt="UC San Diego"
                  width={110}
                  height={28}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </a>
            </Button>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto p-2 -mr-2 text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded-md z-50"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/60 bg-background relative z-[70]">
          <div className="px-6 py-6 flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="py-1.5 text-foreground/90 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="py-1.5 text-foreground/90 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}

            <div className="pt-4 flex flex-col gap-3 border-t border-border/60 mt-2">
              <Button variant="outline" size="default" asChild>
                <a href="mailto:talle@health.ucsd.edu">Contact the Lab</a>
              </Button>

              <Button size="default" variant="ghost" asChild>
                <a
                  href="https://pharmacy.ucsd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Image
                    src="/images/UCSDLogo-SkaggsSchool-2023-BlueGold.png"
                    alt="UC San Diego"
                    width={110}
                    height={28}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}