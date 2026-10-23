"use client";

import React from "react";
import { MapPin, Navigation, Car, Bus, ExternalLink, Compass } from "lucide-react";
import { EVENT_DETAILS } from "@/data/eventData";

export default function LocationSection() {
  const encodedAddress = encodeURIComponent("Fatec Tatuí - Prof. Wilson Roberto Ribeiro de Camargo, Tatuí - SP");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;
  
  // Google Maps embed URL with dark-friendly styling
  const embedUrl = "https://maps.google.com/maps?q=Fatec%20Tatu%C3%AD%20Rodovia%20Mario%20Batista%20Mori%20971%20Tatui%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="localizacao" className="py-24 relative overflow-hidden bg-navy-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Onde Acontece</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Como Chegar à <span className="text-gradient-cyan">Fatec Tatuí</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            O evento será sediado nas instalações modernas da Faculdade de Tecnologia de Tatuí com auditório principal climatizado, laboratórios técnicos e ampla infraestrutura.
          </p>
        </div>

        {/* Content Grid: Map & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-navy-900 border border-slate-800 shadow-xl relative min-h-[380px] flex flex-col">
            <div className="p-3 bg-navy-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mapa Interativo do Campus</span>
              </span>
              <span className="font-mono text-cyan-400">Tatuí, SP</span>
            </div>

            <div className="relative flex-1 w-full min-h-[340px]">
              <iframe
                title="Mapa de Localização da Fatec Tatuí"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)", minHeight: "340px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-navy-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Coordenadas aproximadas: Rod. Mário Batista Mori, 971
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-white/60">•</span>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Details & Directions Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Campus Address Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950 border border-slate-800">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {EVENT_DETAILS.institution}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-1">
                    Auditório Principal & Laboratórios
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {EVENT_DETAILS.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Ponto de Referência:</span>
                <span className="text-slate-300 font-medium">Jardim Cirne / Próximo ao Trevo</span>
              </div>
            </div>

            {/* Travel tips */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-purple-400" />
                <span>Orientações para Participantes</span>
              </h4>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <Car className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">Carro ou Moto</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Acesso facilitado pela Rodovia Mário Batista Mori. O campus dispõe de área de estacionamento interno para alunos e visitantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <Bus className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">Transporte Público / Ônibus</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Linhas municipais atendem o trecho universitário com pontos em frente ao campus e horários especiais para o término das aulas noturnas.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-xl font-semibold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-cyan-400" />
              <span>Traçar Rota no Seu Navegador</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
