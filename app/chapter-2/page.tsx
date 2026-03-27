export default function ChapterTwo() {
    return (
      <main className="w-full">
        {/* Chapter 2: Sound */}
        <section className="min-h-screen bg-surface py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 mb-20">
              <div className="inline-block bg-primary-container text-on-primary-container px-4 py-1 font-headline font-bold uppercase tracking-widest text-sm mb-6 -rotate-2">
                ГЛАВА 2
              </div>
              <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl font-black text-on-surface leading-[0.85] tracking-tighter uppercase break-words">
                ВИЗУАЛИЗАЦИЯ <span className="text-primary-container">ЗВУКА:</span><br />
                <span className="ml-0 md:ml-12">взгляд из ямы</span>
              </h1>
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="font-body text-xl md:text-3xl text-on-surface leading-relaxed italic border-l-8 border-primary-container pl-8 py-4">
                Оркестровая яма — это сердце театрального звучания, где рождается музыка, наполняющая сцену жизнью и эмоциями.
              </p>
              <div className="mt-12 font-body text-lg md:text-xl text-on-surface/80 leading-relaxed max-w-lg">
                Именно здесь, на специально оборудованном пространстве между сценой и зрительным залом, располагается оркестр, который становится невидимым, но незаменимым участником каждого спектакля.
              </div>
            </div>
            
            {/* Video Block 2 */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-video bg-surface-container-highest brutalist-shadow relative group overflow-hidden">
                <div className="relative pt-[56.25%] w-full h-full">
                  <iframe
                    src="https://kinescope.io/embed/qdHWCVqt6wsKDPqjxPyzdQ"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    title="Сюжет"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-surface px-4 py-2 font-headline font-bold text-primary-container uppercase tracking-tighter">
                  СЮЖЕТ
                </div>
              </div>
            </div>
            
            {/* Photo Gallery: Orchestra Pit */}
            <div className="lg:col-span-12 mt-24">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
                {["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"].map((file, idx) => (
                  <div key={file} className="brutalist-shadow bg-surface-container overflow-hidden aspect-square">
                    <a href={`/materials/фоторепортаж/Оркестровая яма/${file}`} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        alt={`Оркестровая яма — фото ${idx + 1}`}
                        src={`/materials/фоторепортаж/Оркестровая яма/${file}`}
                        loading="lazy"
                      />
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-right">
                <span className="font-headline font-bold uppercase tracking-widest text-primary-container border-b-2 border-primary-container pb-1">
                  Фото_Екатерина Кокшарова
                </span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Chapter 3: Directing (Light Section) */}
        <section id="chapter-3" className="min-h-screen bg-on-background text-surface py-24 px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-20">
              <h2 className="font-headline text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter text-surface shrink-0">
                ГЛАВА 3.
              </h2>
              <div className="h-1 bg-primary-container w-full mb-4 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8 order-2 lg:order-1">
                <h3 className="font-headline text-4xl md:text-7xl font-bold uppercase text-primary-container mb-12 -ml-1">
                  РЕЖИССУРА:<br />
                  <span className="text-surface">от нот и текста к жизни</span>
                </h3>
                <div className="space-y-8 font-body text-xl md:text-2xl leading-relaxed max-w-3xl">
                  <p>
                    Режиссура в театре оперы и балета — это искусство объединения музыки, хореографии и сценического действия в единое гармоничное полотно. Именно режиссёр определяет драматургию спектакля, выстраивает взаимодействие солистов, хора, оркестра и кордебалета, а также задаёт тон и атмосферу постановки.
                  </p>
                  <div className="bg-surface text-on-surface p-8 brutalist-shadow">
                    <p className="italic">
                      В условиях оперного и балетного театра режиссёр становится не только интерпретатором произведения, но и соавтором, который помогает раскрыть замысел композитора и хореографа, наполняя сцену глубиной и современным звучанием.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 order-1 lg:order-2">
                {/* Video Block 3 */}
                <div className="sticky top-24">
                  <div className="aspect-[3/4] bg-surface relative brutalist-shadow overflow-hidden group">
                    <div className="relative pt-[56.25%] w-full h-full">
                      <iframe
                        src="https://kinescope.io/embed/k9WuUx8GVom4z98p1VRAkL"
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allowFullScreen
                        title="Сюжет"
                      />
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                      <div className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-black text-xl uppercase tracking-tighter shadow-lg">
                        СЮЖЕТ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    );
  }