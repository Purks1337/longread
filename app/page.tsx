export default function Home() {
  return (
    <main className="pt-16">
      {/* Full-page Hero Section */}
      <section className="relative w-full min-h-[calc(100svh-4rem)] bg-surface-container-lowest overflow-hidden">
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

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-14 lg:py-16 flex flex-col gap-8 md:gap-10">
          {/* Massive Overlapping Title */}
          <div className="relative w-full">
            <h1 className="font-headline font-black text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.84] tracking-tighter uppercase text-on-surface select-none">
              МАГИЯ
              <br />
              <span className="relative inline-block ml-[8vw] md:ml-[12vw] text-primary-container mix-blend-screen transform -skew-x-6">
                СЦЕНЫ
                <span className="absolute -top-4 left-0 w-full h-full text-stroke -z-10 translate-x-2 translate-y-2">
                  СЦЕНЫ
                </span>
              </span>
            </h1>
          </div>

          {/* Editorial Content Card */}
          <div className="w-full max-w-3xl md:ml-auto md:mr-6 lg:mr-12 bg-surface-container-high/70 backdrop-blur-xl p-6 md:p-10 brutalist-shadow border-l-8 border-primary-container relative mt-2">
            {/* Redacted Metadata Label */}
            <div className="absolute top-3 left-3 md:-top-4 md:-left-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-[11px] md:text-sm px-3 md:px-4 py-1.5 md:py-2 -rotate-2 z-10">
              ЭКСКЛЮЗИВНЫЙ РЕПОРТАЖ
            </div>

            <div className="space-y-5 pt-10 md:pt-0">
              <p className="text-lg md:text-2xl leading-relaxed text-on-background font-body italic">
                Юные журналисты побывали в Екатеринбургском государственном академическом театре оперы и балета и окунулись в волшебную атмосферу искусства.
              </p>
              <div className="h-px w-12 bg-primary-container"></div>
              <p className="text-sm md:text-lg text-on-surface-variant/80 font-body leading-relaxed md:leading-loose">
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

      </section>

         </main>
  );
}