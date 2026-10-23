import { Users } from "lucide-react";
import { SPEAKERS } from "@/data/eventData";

export default function SpeakersSection() {
  return (
    <section id="palestrantes" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>7ª Semana da Tecnologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Palestras <span className="text-red-500">Confirmadas</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SPEAKERS.map((speaker) => (
            <li key={speaker.id} className="min-h-24 flex items-center gap-4 rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-5 hover:border-red-500/60 transition-colors">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold text-red-400">
                {speaker.avatarFallback}
              </span>
              <h3 className="text-base font-semibold text-white">{speaker.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
