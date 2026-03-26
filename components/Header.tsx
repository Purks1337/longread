/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", label: "ПРОЛОГ" },
    { href: "/chapter-1", label: "ГЛАВА 1" },
    { href: "/chapter-2", label: "ГЛАВА 2" },
    { href: "/chapter-2#chapter-3", label: "ГЛАВА 3" },
    { href: "/chapter-4", label: "ГЛАВА 4" },
    { href: "/chapter-5", label: "ГЛАВА 5" },
    { href: "/epilogue", label: "ЭПИЛОГ" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-[#131313]/80 backdrop-blur-md shadow-[0px_4px_0px_#D91E12]">
      <div className="h-16 flex justify-between items-center px-6">
        <Link href="/" aria-label="FORWARD" onClick={() => setIsOpen(false)}>
          <img
            src="/materials/логотипы/Форвард.png"
            alt="ФОРВАРД"
            className="h-9 w-auto object-contain mix-blend-difference"
          />
        </Link>

        {/* Полная навигация: от Пролога до Эпилога */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          className="lg:hidden text-primary-container w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-0.5 w-6 bg-primary-container transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-primary-container transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-6 bg-primary-container transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden px-6 pb-6 pt-2 border-t border-primary-container/20 bg-[#131313]">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-headline uppercase tracking-tighter font-bold text-[#E5E2E1] opacity-85 hover:opacity-100 hover:text-[#D91E12] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}