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
                  "Машинерия сцены и инспектор оперы — это невидимые, но незаменимые участники театрального процесса."
                </p>
              </div>
              <div className="md:col-span-5 relative">
                <div className="bg-surface-container-high p-4 shadow-[12px_12px_0px_#D91E12] transform rotate-2">
                  <img 
                    className="w-full h-80 object-cover grayscale contrast-125" 
                    alt="Машинерия сцены" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NVAtRyKGm3qBMT_bsptgFyryNtQPmeaLD152N6BAP7UylVa4RNbqrcJSfxVHgpu5HAro6pi0HWT4USAtSNAB9casGndMQuqNmv8-qPSdbIHQTI_-hmDszNhMQ3OQ_FlUY7EP6Oux_IdvA5mAyhp8RaPv4Lsm6ZwQk7bMsBCb-kZONN_M7Z6jOwm43OGzdw1eZ2i3qExoGDRpVQGJxXSEmTN1KMRGnTRy_RLVgoH3RhHuoK_cqIXm_QOpcJ0dxblAKNiq62AJmRE" 
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
            <img 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Плейсхолдер видео" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6rIYkGGcl6BPKvN6Yka226l9v6O75kcvPEXcYk7t-f7Ixo8pgoeoSwk2z_-yL2DTIfWL7WhiX9rn8NoB8Sl0US7Xt6t56GMeLk0MRk3znIe7iS9YFpAJmlYba2v-fBk1zL0J1w9cVCMgUH3_r-lfxsR0suCAPuKVZ9HBcvwbCUz_9qGnHZ-S9_zZNh0CCdaMsxAUH02Bq10ED5fCsBUyX2EQePOgMDmwtMMRpoY0X5DVE0Jo71MjFqFhjHrs1PPR5MzBhHFExjGM" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary-container text-on-primary-container flex items-center justify-center shadow-[8px_8px_0px_#e5e2e1]">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXz4EYoQ_svXeXlZqbFJ0Ts1mmnItMho0uNeYlukLipAmN-U0WNGTEAFCzF3u3kk_kcOdu6xa3jSAwlpOQ040nnNjSMbPQ-p1IzsW5cFM6jpJef1t548WtZXWo6EYsk3rqX-LTUA254fKKQd8faw8WrQ5PtRYgxOKf3lGFHRSWQ-QA2axT-3XYjR1FPjhaTEdFUjk4wBuwO26_JByL1mgEt3LKdUK3jEDWUaXtL7zTVxq0fmwIrXPatVZ4ryuL0GmXt1UPPUXZvv8" 
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyNJ9I-UAW7UzDgv8D9v4DLepMz8Ty_dcOwLskxVWHSI_x9EI3c-5L43f7lpCAFag_YBJY0WGbKFIahhUK14y4kJw51ofzhLmGiGlQU2UBHJGGdg4FZBWDD154wOgkUtjSRnimr_jNEA6R0QibKCAdqk2b4pEvHF9W2FdAnCZ4D0L-PrmoLk2yA00d_XA8Uri7ctTlZPwP5p9jFveidhTMG-zdlmqobLR4kJnjXY-06EtvlsbwHRjyFHE9eeSen11sa-hgTC7PmVI" 
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBus0jXwkhG7BJzlR9NZ2yfWqbPUxFM0DOsjrlCn3VxrdxWlN2XVhUVkWhV1uFRr0y3JdrUt89o-H991jSZ9-r53dkOf22tP_aMTaUyfRD9drUZ8bA7LFUU9Rv59Drw_uN2m7U61Y36bOkEKeTBP5vHpu99wjalKpdrMY7XvI2s2-HWC4Y9WdcNRfLp94hSNFLXVJ668Qg7x0gcTDpYOYINSYk_dv9mCG7acenEZe0_cZDX6vFfChvZTtgsoQVFa0vwvQJiRUDYeMA" 
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFA_EFJJaO5u66cQKdYC2InLQtLBGEc_MjsgHcnHN7j-S3-dz99t1E-OCqRiIxzZm70rS0gnlNvGEbIMsNungKV0KpTLjKLOlO6TZxECtkMh5QBRg0CeicYZC68p9t_pl2eByMSQcnv6FPMkTEu2PKgikZLqPnCm7LqmMvaOX3GsK8ow9vt1uj1xdXuIzx34OlQxLJBACnrf6stgCIHXpOGHGSeXaO-AVKoO-jcoa4vWzs61M3vbCFgEgWViY-seIIEa8n0exEBmU" 
                />
                <p className="mt-4 font-body text-surface font-bold text-center italic">Момент #04</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }