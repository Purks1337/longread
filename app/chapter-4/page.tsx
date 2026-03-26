export default function ChapterFour() {
    return (
      <main className="pt-16 md:pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative mb-32">
          <div className="absolute -top-10 -left-10 text-[12rem] font-black opacity-5 select-none leading-none font-headline tracking-tighter">
            04
          </div>
          <div className="relative z-10">
            <span className="bg-primary-container text-on-primary-container px-4 py-1 font-label font-bold uppercase tracking-widest text-sm mb-6 inline-block transform -skew-x-12">
              МАШИНЕРИЯ СЦЕНЫ
            </span>
            <h1 className="text-6xl md:text-9xl font-black font-headline tracking-tighter leading-[0.85] mb-12 uppercase">
              ГЛАВА 4.<br />
              <span className="text-primary-container">МАШИНЕРИЯ</span><br />
              СЦЕНЫ
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-7">
                <p className="text-2xl md:text-3xl font-body leading-relaxed italic text-on-surface mb-8 border-l-8 border-primary-container pl-8">
                  Машинерия сцены и инспектор оперы — это невидимые, но незаменимые участники театрального процесса, обеспечивающие техническое совершенство и организационный порядок спектаклей.
                </p>
              </div>
              <div className="md:col-span-5 relative">
                <div className="bg-surface-container-high p-4 shadow-[12px_12px_0px_#D91E12] transform rotate-2">
                  <img 
                    className="w-full h-80 object-cover grayscale contrast-125" 
                    alt="Машинерия сцены" 
                    src="/materials/фоторепортаж/закулисье/1.JPG" 
                  />
                  <div className="mt-4 font-label text-xs uppercase opacity-50 tracking-tighter">
                    КОД_ССЫЛКИ: 404_BACKSTAGE_MECHANICS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Content Block */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 md:col-span-2">
            <div className="space-y-8 text-xl font-body leading-relaxed text-on-surface/90 max-w-4xl">
              <p>
                Сложные механизмы сцены позволяют мгновенно менять декорации, создавать волшебные превращения и поддерживать динамику действия, а инспектор оперы координирует работу всех служб, следит за точностью репетиционного процесса и соблюдением художественных стандартов. Благодаря их труду каждый спектакль проходит безупречно, а зритель может полностью погрузиться в магию театра.
              </p>
            </div>
          </div>
        </section>
  
        {/* Video Block */}
        <section className="mb-40">
          <div className="bg-surface-container shadow-[20px_20px_0px_#D91E12] relative aspect-video group cursor-pointer overflow-hidden">
            <div className="relative pt-[56.25%] w-full h-full">
              <iframe
                src="https://kinescope.io/embed/44eV2ToUU8nNc3GK9KbHBo"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                title="Видео №4"
              />
            </div>
            <div className="absolute top-8 left-8">
              <h3 className="text-4xl font-black font-headline uppercase bg-surface p-2 border-l-4 border-primary-container">
                ВИДЕО №4
              </h3>
            </div>
          </div>
        </section>
  
        {/* Polaroid Gallery "Backstage" */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="text-7xl font-black font-headline uppercase tracking-tighter">ЗАКУЛИСЬЕ</h2>
            <span className="font-label font-bold text-primary-container bg-surface-container-high px-3 py-1 uppercase">
              Фото_Екатерина Кокшарова
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Polaroid 1 */}
            <div className="relative pt-10">
              <div className="polaroid-tape"></div>
              <div className="bg-on-surface p-3 pb-12 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  className="w-full h-64 object-cover grayscale" 
                  alt="Закулисье 1" 
                  src="/materials/фоторепортаж/закулисье/3.JPG" 
                />
                <p className="mt-4 font-body text-surface font-bold text-center italic">Момент #01</p>
              </div>
            </div>
            
            {/* Polaroid 2 */}
            <div className="relative pt-10">
              <div className="polaroid-tape !rotate-3"></div>
              <div className="bg-on-surface p-3 pb-12 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  className="w-full h-64 object-cover grayscale" 
                  alt="Закулисье 2" 
                  src="/materials/фоторепортаж/закулисье/4.JPG" 
                />
                <p className="mt-4 font-body text-surface font-bold text-center italic">Момент #02</p>
              </div>
            </div>
            
            {/* Polaroid 3 */}
            <div className="relative pt-10">
              <div className="polaroid-tape !-rotate-1"></div>
              <div className="bg-on-surface p-3 pb-12 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  className="w-full h-64 object-cover grayscale" 
                  alt="Закулисье 3" 
                  src="/materials/фоторепортаж/закулисье/5.JPG" 
                />
                <p className="mt-4 font-body text-surface font-bold text-center italic">Момент #03</p>
              </div>
            </div>
            
            {/* Polaroid 4 */}
            <div className="relative pt-10">
              <div className="polaroid-tape !rotate-6"></div>
              <div className="bg-on-surface p-3 pb-12 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img 
                  className="w-full h-64 object-cover grayscale" 
                  alt="Закулисье 4" 
                  src="/materials/фоторепортаж/закулисье/6.JPG" 
                />
                <p className="mt-4 font-body text-surface font-bold text-center italic">Момент #04</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }