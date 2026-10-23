import React from "react";
import Image from "next/image";

/**
 * LOGOTIPOS INSTITUCIONAIS OFICIAIS
 * Imagens oficiais fornecidas: Fatec Tatuí (20 Anos), Centro Paula Souza e Brasão do Estado de SP.
 */

export function LogoFatecTatui({
  className = "h-10 w-auto",
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <Image
        src="/logos/logo-fatec.png"
        alt="Fatec Tatuí — Prof. Wilson Roberto Ribeiro de Camargo (20 Anos)"
        width={160}
        height={135}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}

export function LogoCentroPaulaSouza({
  className = "h-9 w-auto",
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <Image
        src="/logos/logo-cps.png"
        alt="Centro Paula Souza"
        width={160}
        height={148}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}

export function LogoGovernoSP({
  className = "h-9 w-auto",
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <Image
        src="/logos/logo-sp.png"
        alt="Governo do Estado de São Paulo"
        width={130}
        height={151}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}

export function InstitutionalLogosRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
      <div className="p-3 rounded-xl bg-navy-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center justify-center">
        <LogoFatecTatui className="h-12 w-auto" />
      </div>
      <div className="p-3 rounded-xl bg-navy-900/70 border border-slate-800/80 hover:border-red-500/40 transition-colors flex items-center justify-center">
        <LogoCentroPaulaSouza className="h-11 w-auto" />
      </div>
      <div className="p-3 rounded-xl bg-navy-900/70 border border-slate-800/80 hover:border-blue-500/40 transition-colors flex items-center justify-center">
        <LogoGovernoSP className="h-11 w-auto" />
      </div>
    </div>
  );
}
