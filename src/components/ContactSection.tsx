"use client";

import React from "react";
import { Mail, Globe, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { EVENT_DETAILS } from "@/data/eventData";

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-navy-950/70 border-t border-slate-900">
      {/* Background ambient light */}
      <div 
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fale Conosco</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Canais de <span className="text-gradient-purple">Contato</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Dúvidas sobre a programação, cronograma de palestras, parcerias ou apresentação de projetos? Entre em contato com a equipe organizadora.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Institutional Contact Info */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Secretaria e Direção Fatec Tatuí</span>
              </h3>
              
              <div className="space-y-5">
                {/* E-mail Institucional */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">E-mail Institucional</span>
                    <a
                      href={`mailto:${EVENT_DETAILS.email}`}
                      className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                    >
                      {EVENT_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Site Oficial */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Portal da Faculdade</span>
                    <a
                      href={EVENT_DETAILS.fatecWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>fatectatui.cps.sp.gov.br</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Instagram Oficial</span>
                    <a
                      href={EVENT_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-pink-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>@fatectatui</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{EVENT_DETAILS.address}</span>
            </div>
          </div>

          {/* Direct Email Action Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Atendimento Direto</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Para dúvidas pedagógicas, parcerias institucionais ou agendamento de visitas, entre em contato diretamente pelo seu correio eletrônico com a comissão organizadora.
              </p>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800/80 mb-6">
                <span className="text-[11px] font-mono text-slate-400 block uppercase mb-1">Destinatário Oficial</span>
                <span className="text-sm font-mono text-cyan-300 font-semibold break-all">{EVENT_DETAILS.email}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${EVENT_DETAILS.email}?subject=Contato%20-%207ª%20Semana%20da%20Tecnologia`}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar E-mail</span>
              </a>

              <a
                href={EVENT_DETAILS.fatecWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-navy-950 hover:bg-navy-900 border border-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>Acessar Portal da Fatec</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
