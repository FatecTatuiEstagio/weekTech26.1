"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoFatecTatui, LogoCentroPaulaSouza } from "./InstitutionalLogos";
import { EVENT_DETAILS } from "@/data/eventData";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#localizacao", label: "Local" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active indicator
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="Ir para o topo da página da 7ª Semana da Tecnologia"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <LogoFatecTatui className="h-8 md:h-9 w-auto transition-transform group-hover:scale-105" />
              <LogoCentroPaulaSouza className="h-8 md:h-9 w-auto" />
            </span>
            <div className="hidden sm:block border-l border-slate-700/80 pl-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                  7ª Edição
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
              <p className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Semana da Tecnologia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA — sem botão de inscrição */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`mailto:${EVENT_DETAILS.email}`}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#programacao"
              onClick={(e) => handleNavLinkClick(e, "#programacao")}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
            >
              Programação
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-navy-950/95 backdrop-blur-xl border-b border-cyan-500/20 md:hidden flex flex-col justify-between p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-2" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
            <a
              href="#programacao"
              onClick={(e) => handleNavLinkClick(e, "#programacao")}
              className="w-full py-3.5 px-4 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Ver Programação</span>
            </a>
            <div className="text-center text-xs text-slate-400">
              <p>{EVENT_DETAILS.institution}</p>
              <p className="text-cyan-400 font-mono mt-0.5">{EVENT_DETAILS.dateRange}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
