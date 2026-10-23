"use client";

import React from "react";
import { Sparkles, Network, Briefcase, Cpu, CheckCircle, GraduationCap, Building2 } from "lucide-react";
import { PILLARS, EVENT_DETAILS } from "@/data/eventData";

const iconMap = {
  Sparkles: Sparkles,
  Network: Network,
  Briefcase: Briefcase,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
  Code: Cpu,
};

const STATS = [
  { value: "05", label: "Dias de Imersão", desc: "Palestras, painéis e workshops" },
  { value: "16+", label: "Especialistas", desc: "Empresas, professores e pesquisadores" },
  { value: "08+", label: "Workshops", desc: "Atividades práticas em laboratório" },
  { value: "100%", label: "Gratuito", desc: "Aberto a toda a comunidade" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-navy-950/60 border-t border-slate-900">
      {/* Glow lights */}
      <div 
        className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tradição & Inovação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            <span className="text-gradient-tech">Conhecimento, inovação e conexão com o mercado de trabalho</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A 7ª Semana da Tecnologia da Fatec Tatuí é uma oportunidade para os estudantes ampliarem seus conhecimentos, conhecerem novas tendências e se aproximarem do mercado de trabalho. Por meio de palestras, troca de experiências e networking com profissionais e empresas, o evento conecta o ambiente acadêmico às oportunidades e aos desafios do mundo profissional.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 text-center group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono text-gradient-cyan mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Two Columns: Text & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Institutional Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-900/95 via-navy-850 to-navy-950 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center gap-3 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Sobre a Fatec Tatuí</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Formando os líderes e inovadores de amanhã
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                A <strong>Fatec Tatuí — Prof. Wilson Roberto Ribeiro de Camargo</strong>, vinculada ao renomado <strong>Centro Paula Souza</strong> e ao <strong>Governo do Estado de São Paulo</strong>, é referência em ensino superior tecnológico público, gratuito e de altíssima qualidade.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A Semana da Tecnologia é pensada não apenas para enriquecer o currículo, mas para aproximar os estudantes das reais demandas da indústria 4.0, estimulando a capacidade empreendedora, o pensamento crítico e a colaboração científica.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Palestrantes de empresas de referência como <strong>One7, Cilex Techmetals, Vacuum Solutions e FIT Engineering</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Mostra de projetos e iniciação científica desenvolvidos pelos próprios alunos.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    Espaço aberto para a comunidade local e empresas do ecossistema de Tatuí e região.
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Fatec Tatuí</span>
                <a
                  href={EVENT_DETAILS.fatecWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline-offset-4 hover:underline"
                >
                  fatectatui.cps.sp.gov.br ↗
                </a>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.iconName as keyof typeof iconMap] || Sparkles;
              return (
                <div
                  key={pillar.id}
                  className={`p-6 rounded-2xl bg-navy-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-navy-900/90 transition-all duration-300 group flex flex-col justify-between ${
                    idx === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <IconComponent className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>PILAR 0{PILLARS.indexOf(pillar) + 1}</span>
                    <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">FATEC 2026</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
