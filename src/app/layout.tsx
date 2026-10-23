import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fatectatui.cps.sp.gov.br"),
  title: "7ª Semana da Tecnologia — Fatec Tatuí",
  description:
    "A 7ª Semana da Tecnologia da Fatec Tatuí aproxima estudantes do conhecimento, de novas tendências e do mercado de trabalho por meio de palestras, experiências e networking.",
  keywords: [
    "Fatec Tatuí",
    "Semana da Tecnologia",
    "tecnologia",
    "inovação",
    "palestras",
    "networking",
    "Centro Paula Souza",
  ],
  authors: [{ name: "Fatec Tatuí — Prof. Wilson Roberto Ribeiro de Camargo" }],
  creator: "Fatec Tatuí",
  publisher: "Centro Paula Souza",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fatectatui.cps.sp.gov.br",
    title: "7ª Semana da Tecnologia — Fatec Tatuí",
    description:
      "A 7ª Semana da Tecnologia conecta o ambiente acadêmico às oportunidades e aos desafios do mundo profissional.",
    siteName: "7ª Semana da Tecnologia — Fatec Tatuí",
  },
  twitter: {
    card: "summary_large_image",
    title: "7ª Semana da Tecnologia — Fatec Tatuí",
    description:
      "Conhecimento, inovação e conexão com o mercado de trabalho na Fatec Tatuí.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-navy-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
