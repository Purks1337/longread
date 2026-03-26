export default function Home() {
  const partnerLogos = [
    { src: "/materials/логотипы/Форвард.png", alt: "Форвард" },
    { src: "/materials/логотипы/Департамент 1.png", alt: "Департамент образования" },
    { src: "/materials/логотипы/Дворец 1.png", alt: "Городской дворец творчества" },
    { src: "/materials/логотипы/МедиаГород 1.png", alt: "Медиагород" },
    { src: "/materials/логотипы/опера балет.png", alt: "Урал опера балет" },
    { src: "/materials/логотипы/Форвард.png", alt: "Форвард" },
    { src: "/materials/логотипы/Департамент 1.png", alt: "Департамент образования" },
    { src: "/materials/логотипы/Дворец 1.png", alt: "Городской дворец творчества" },
    { src: "/materials/логотипы/МедиаГород 1.png", alt: "Медиагород" },
    { src: "/materials/логотипы/опера балет.png", alt: "Урал опера балет" },
  ];

  return (
    <main className="-mt-16">
      {/* Full-page Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        {/* Background Image with Texture */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
            alt="Драматичный интерьер большого оперного театра ночью с бархатными красными креслами"
            src="/materials/фоторепортаж/Атмосфера/1.JPG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40"></div>
          <div className="absolute inset-0 noise-overlay"></div>
        </div>

        {/* Aggressive Red Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-[2px] bg-primary-container rotate-12 z-10 opacity-60"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[4px] bg-primary-container -rotate-6 z-10 opacity-80"></div>

        <div className="relative z-20 container mx-auto px-6 flex flex-col items-start pt-20">
          {/* Massive Overlapping Title */}
          <div className="relative w-full mb-12">
            <h1 className="font-headline font-black text-[12vw] md:text-[15vw] leading-[0.8] tracking-tighter uppercase text-on-surface select-none">
              МАГИЯ
              <br />
              <span className="relative inline-block ml-[10vw] md:ml-[15vw] text-primary-container mix-blend-screen transform -skew-x-6">
                СЦЕНЫ
                <span className="absolute -top-4 left-0 w-full h-full text-stroke -z-10 translate-x-2 translate-y-2">
                  СЦЕНЫ
                </span>
              </span>
            </h1>
          </div>

          {/* Editorial Content Card */}
          <div className="max-w-3xl ml-auto md:mr-12 bg-surface-container-high/60 backdrop-blur-xl p-8 md:p-12 brutalist-shadow border-l-8 border-primary-container relative">
            {/* Redacted Metadata Label */}
            <div className="absolute -top-4 -left-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-sm px-4 py-2 rotate-[-2deg]">
              ЭКСКЛЮЗИВНЫЙ РЕПОРТАЖ
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-on-background font-body italic">
                Юные журналисты побывали в Екатеринбургском государственном академическом театре оперы и балета и окунулись в волшебную атмосферу искусства.
              </p>
              <div className="h-[1px] w-12 bg-primary-container"></div>
              <p className="text-base md:text-lg text-on-surface-variant/80 font-body leading-loose">
                За кулисами и в зрительном зале они почувствовали магию сцены, вдохновение артистов и силу живого спектакля. Ребята увидели, как рождается спектакль, пообщались с режиссёрами и исполнителями, а после поделились своими впечатлениями в репортажах. Это путешествие стало для них настоящим открытием мира театра.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/chapter-1"
                className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase tracking-tighter text-lg shadow-[4px_4px_0px_#E5E2E1] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all inline-block"
              >
                ЧИТАТЬ ПОЛНОСТЬЮ
              </a>

            </div>
          </div>
        </div>


        {/* Partners carousel */}
        <div className="absolute bottom-10 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-y border-primary-container/30 bg-surface/30 backdrop-blur-md overflow-hidden">
              <div className="flex gap-16 py-4 items-center whitespace-nowrap animate-[marquee_22s_linear_infinite]">
                {partnerLogos.map((logo, idx) => (
                  <img
                    key={`${logo.src}-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

         </main>
  );
}