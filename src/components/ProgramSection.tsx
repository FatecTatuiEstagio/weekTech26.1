"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, Tag, User, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { SCHEDULE } from "@/data/eventData";

export default function ProgramSection() {
  const [selectedDayId, setSelectedDayId] = useState<string>("domingo");

  const activeDay = SCHEDULE.find((day) => day.id === selectedDayId) || SCHEDULE[0];

  return (
    <section id="programacao" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cronograma Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Programação da <span className="text-gradient-cyan">Semana</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma semana completa de imersão tecnológica com palestras, painéis interativos, demonstrações e mostra de projetos acadêmicos.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-4 pt-1 no-scrollbar">
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-900/90 border border-slate-800 backdrop-blur-md gap-1.5 shadow-xl">
            {SCHEDULE.map((day) => {
              const isSelected = day.id === selectedDayId;
              return (
                <button
                  key={day.id}
                  onClick={() => setSelectedDayId(day.id)}
                  className={`px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 text-left flex items-center gap-3 shrink-0 ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className={`w-8 h-8 rounded-lg flex flex-col items-center justify-center font-mono text-xs ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"
                  }`}>
                    <span className="font-black leading-none">{day.dayNumber}</span>
                    <span className="text-[8px] uppercase leading-none mt-0.5">{day.month}</span>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-xs sm:text-sm leading-tight">{day.dayOfWeek}</div>
                    <div className={`text-[10px] leading-tight ${isSelected ? "text-cyan-100" : "text-slate-500"}`}>
                      {day.items.length} {day.items.length === 1 ? "atividade" : "atividades"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Day Theme Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-900/90 via-navy-850 to-navy-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{activeDay.dayOfWeek.toUpperCase()}, {activeDay.dateStr.toUpperCase()}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {activeDay.themeTitle}
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 border border-slate-800 text-xs text-slate-300 self-start sm:self-auto">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Local padrão: <strong>Auditório Principal</strong></span>
          </div>
        </div>

        {/* Schedule Items Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {activeDay.items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-navy-900/90 via-navy-900/60 to-navy-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                
                {/* Time & Category */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.time}</span>
                  </div>

                  {item.timeToConfirm && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <AlertCircle className="w-3 h-3 text-amber-400" />
                      Horário a confirmar pela organização
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {item.category}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>

              {/* Speaker / Institution */}
              {item.speaker && (
                <div className="flex items-center gap-2.5 mb-3 text-sm text-slate-200">
                  <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.speaker}</span>
                    {item.roleOrCompany && (
                      <span className="text-slate-400"> • {item.roleOrCompany}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              {item.description && (
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              )}

              {/* Tags and Action */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-3 h-3 text-slate-500" />
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Atividade confirmada</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note about real event schedule */}
        <div className="max-w-4xl mx-auto mt-10 p-4 rounded-xl bg-navy-900/40 border border-slate-800/80 text-center text-xs text-slate-400">
          <p>
            * As atividades são sujeitas a pequenos ajustes de horário conforme dinâmica dos painéis e laboratórios da Fatec Tatuí.
          </p>
        </div>

      </div>
    </section>
  );
}
