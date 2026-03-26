export default function Home() {
  return (
    <main className="-mt-16">
      {/* Full-page Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        {/* Background Image with Texture */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
            alt="Драматичный интерьер большого оперного театра ночью с бархатными красными креслами"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8w_nDUsSwe5ygh0DUg3ReDsJ8FQ_-xZDo9Ef9GViqVDrSbdT7gUvLvAJLrxEO9t3BaTLiFCh3SIRaavoyd-sz-j8wXQwcgi7eUOHE_fjibeGkHE5ZJF51VDMkq6Gi0jlpmvL6sMQSu1Y1klsTgiIFn4jB-0ivyIR-2AexvyX4s2E9R8jPaFkQSXGj_L9__3lTjmtBlotzU6h5rtMA-CE3HTKLa_CuJ4E5JL96ywsaL2LfIWrpLfpgA6gtv6RDziTMcHyQTmlHaUA"
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
              <button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase tracking-tighter text-lg shadow-[4px_4px_0px_#E5E2E1] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                ЧИТАТЬ ПОЛНОСТЬЮ
              </button>
              <button className="border-b-2 border-primary-container text-primary-container px-6 py-4 font-headline font-bold uppercase tracking-tighter hover:bg-primary-container hover:text-on-primary-container transition-colors">
                СМОТРЕТЬ ГАЛЕРЕЮ
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="font-headline text-xs font-bold uppercase tracking-[0.5em] text-primary-container mb-2">
            ЛИСТАЙТЕ ВНИЗ
          </span>
          <span className="material-symbols-outlined text-primary-container">expand_more</span>
        </div>
      </section>

      {/* Secondary Content Section (Bento Style) */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-8 bg-surface-container brutalist-shadow p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale group-hover:grayscale-0"
              alt="крупный план вышивки театрального костюма золотыми нитями"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJeeAeKfRWgS3UzuyzKmNGuV2pRddQmF2yr964FlPsGdrYqX3kfo3AWD-eErfdEt51CJfndowvppDVpI3-EiH-K1jr7dar6fNTu0jH-c7cwxCP78xdeM5VfKuyJtddWC1Wo3rqmgmIV_N6WVQT3faGMy5hsjm1h_t245twTC6_l8tcqU9TGGkUW_5vTosJIkNauc85LZZPEubmaumeGe4h3l7XG8n0s9wwUF_n3PhI4TWsg6272zm6PffTNL4qTniRzqR5KfBYCMQ"
            />
            <div className="relative z-10">
              <span className="bg-primary-container text-on-primary-container font-headline text-xs px-2 py-1 uppercase font-black mb-4 inline-block">
                ГЛАВА 01
              </span>
              <h3 className="text-4xl md:text-6xl font-headline font-black uppercase leading-none tracking-tighter mb-4">
                БАГРОВЫЙ<br />ЗАНАВЕС
              </h3>
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <p className="max-w-md font-body text-lg italic opacity-80">
                «Первый вдох театра — это сценическая пыль и аромат истории».
              </p>
              <span className="material-symbols-outlined text-primary-container text-5xl">arrow_right_alt</span>
            </div>
          </div>

          {/* Vertical Card */}
          <div className="md:col-span-4 bg-primary-container p-8 shadow-[4px_4px_0px_#E5E2E1] flex flex-col justify-center items-center text-center">
            <span 
              className="material-symbols-outlined text-on-primary-container text-7xl mb-6" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              theater_comedy
            </span>
            <h4 className="font-headline font-black text-3xl text-on-primary-container uppercase leading-none mb-4">
              ЗА КУЛИСАМИ
            </h4>
            <p className="font-body text-on-primary-container/80 text-lg">
              Честные интервью с мастерами, которые создают магию.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}