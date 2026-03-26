import type { Metadata } from "next";
import { Space_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Исправлены веса: оставлены только те, что существуют
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700']
});

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: '--font-newsreader',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "FORWARD - Магия сцены",
  description: "Совместный цифровой проект, исследующий пересечение молодежной журналистики и высокой культуры.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} ${newsreader.variable} bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden`}>
        {/* Глобальный шум для всех страниц */}
        <div className="fixed inset-0 z-[100] noise-overlay"></div>
        
        <Header />
        
        {/* main-контейнер для страниц */}
        <div className="pt-16 min-h-screen">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}