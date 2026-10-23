"use client";

import React from "react";
import { ArrowUp, Mail, Globe, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { LogoFatecTatui, LogoCentroPaulaSouza, LogoGovernoSP } from "./InstitutionalLogos";
import { EVENT_DETAILS } from "@/data/eventData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-slate-800 text-slate-400 text-xs overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Institutional Logos Banner */}
      <div className="border-b border-slate-900 bg-navy-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-6">
            Realização e Apoio Institucional
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <div className="p-3 rounded-xl bg-navy-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <LogoFatecTatui className="h-8 md:h-9 w-auto" light />
            </div>
            <div className="p-3 rounded-xl bg-navy-950/70 border border-slate-800/80 hover:border-red-500/40 transition-colors">
              <LogoCentroPaulaSouza className="h-7 md:h-8 w-auto" light />
            </div>
            <div className="p-3 rounded-xl bg-navy-950/70 border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <LogoGovernoSP className="h-7 md:h-8 w-auto" light />
            </div>
          </div>
          <p className="text-center text-[10px] text-white/60 mt-4">
            * As marcas e representações vetoriais institucionais são marcas registradas de seus respectivos órgãos governamentais e educacionais.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Event Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-sm font-bold text-white tracking-tight uppercase">
                7ª Semana da Tecnologia
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              O evento científico e tecnológico oficial da <strong>Fatec Tatuí — Prof. Wilson Roberto Ribeiro de Camargo</strong>, integrando a comunidade acadêmica às inovações de mercado.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={EVENT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Instagram oficial da Fatec Tatuí"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={EVENT_DETAILS.fatecWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Portal oficial da Fatec Tatuí"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${EVENT_DETAILS.email}`}
                className="w-8 h-8 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="E-mail da secretaria da Fatec Tatuí"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-cyan-300 transition-colors">
                  Sobre o Evento & Pilares
                </a>
              </li>
              <li>
                <a href="#programacao" className="hover:text-cyan-300 transition-colors">
                  Cronograma & Programação
                </a>
              </li>
              <li>
                <a href="#palestrantes" className="hover:text-cyan-300 transition-colors">
                  Palestrantes Confirmados
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-cyan-300 transition-colors">
                  Localização e Rotas
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cyan-300 transition-colors">
                  Contato Institucional
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={EVENT_DETAILS.fatecWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Portal Fatec Tatuí ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.cps.sp.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Centro Paula Souza (CPS) ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.saopaulo.sp.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Governo do Estado de SP ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EVENT_DETAILS.email}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Secretaria da Direção ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Address and Back to Top */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Campus Fatec Tatuí
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{EVENT_DETAILS.address}</span>
            </p>
            <p className="text-slate-400 text-xs">
              E-mail: <a href={`mailto:${EVENT_DETAILS.email}`} className="text-cyan-300 hover:underline">{EVENT_DETAILS.email}</a>
            </p>
            <div>
              <button
                onClick={scrollToTop}
                className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors text-xs font-medium"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Fatec Tatuí — Prof. Wilson Roberto Ribeiro de Camargo. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Desenvolvido para a 7ª Semana da Tecnologia</span>
            <span>•</span>
            <span className="text-cyan-400 font-mono">19 a 23 de Outubro</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
