"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Calendar, MapPin, ArrowRight, ChevronDown, CheckCircle2, Users } from "lucide-react";
import { EVENT_DETAILS } from "@/data/eventData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const emptySubscribe = () => () => {};

export default function HeroSection() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.startDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isPast: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-tech-grid">
      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-brand-purple-dark/30 via-brand-purple/20 to-brand-cyan/20 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[110px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-20 left-10 w-80 h-80 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md shadow-sm shadow-cyan-500/10 hover:border-cyan-400/60 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-semibold tracking-wide">FATEC TATUÍ</span>
          <span className="text-white/60">•</span>
          <span className="text-slate-300">Centro Paula Souza</span>
          <span className="text-white/60">•</span>
          <span className="text-purple-300 font-mono">19 a 23 de Outubro</span>
        </div>

        {/* Main Title with Gradient Effect */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          <span className="block text-gradient-tech uppercase drop-shadow-md">
            7ª Semana
          </span>
          <span className="block mt-1 sm:mt-2 text-white">
            da Tecnologia
          </span>
        </h1>

        {/* Subtitle / Value proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Encontro que conecta estudantes ao mercado de trabalho por meio de palestras, workshops e networking, promovendo conhecimento, inovação, empreendedorismo e troca de experiências com profissionais e empresas.
        </p>

        {/* Event Meta Badges: Date and Location */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-300 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/70 border border-slate-800 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="font-medium text-white">{EVENT_DETAILS.dateRange}</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/70 border border-slate-800 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="font-medium text-white">Fatec Tatuí — Tatuí, SP</span>
          </div>
        </div>

        {/* Action CTAs — sem inscrição */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollToSection("programacao")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span>Ver Programação Completa</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection("palestrantes")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-slate-200 bg-navy-900/90 hover:bg-navy-800 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-sm"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span>Conhecer os Palestrantes</span>
          </button>
        </div>

        {/* Countdown Timer or Status Badge */}
        {mounted && (
          <div className="max-w-2xl mx-auto">
            {timeLeft.isPast ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                      Semana da Tecnologia
                    </h2>
                    <p className="text-xs text-slate-300">
                      Confira abaixo o resumo das palestras, painéis e workshops da programação oficial.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => scrollToSection("programacao")}
                  className="px-4 py-2 text-xs font-semibold text-cyan-300 hover:text-white rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors shrink-0"
                >
                  Ver Programação
                </button>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-2xl bg-navy-900/70 border border-cyan-500/20 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Contagem Regressiva para a Abertura
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
                  <div className="p-2 sm:p-3 rounded-xl bg-navy-950/80 border border-slate-800 text-center">
                    <span className="block text-xl sm:text-3xl font-black font-mono text-white">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">Dias</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-navy-950/80 border border-slate-800 text-center">
                    <span className="block text-xl sm:text-3xl font-black font-mono text-cyan-300">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">Horas</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-navy-950/80 border border-slate-800 text-center">
                    <span className="block text-xl sm:text-3xl font-black font-mono text-purple-300">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">Minutos</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-navy-950/80 border border-slate-800 text-center">
                    <span className="block text-xl sm:text-3xl font-black font-mono text-pink-400">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">Segundos</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection("sobre")}
            aria-label="Rolar para a seção Sobre o Evento"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Conheça a 7ª Edição</span>
            <ChevronDown className="w-4 h-4 group-hover:text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
