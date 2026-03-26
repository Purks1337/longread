export default function ChapterOne() {
    return (
      <main className="pt-24 bg-[#f4f3f0] text-[#131313] min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <div className="relative mb-20">
            <h1 className="font-headline font-black text-7xl md:text-[10rem] leading-[0.85] tracking-tighter uppercase mb-12 mix-blend-multiply">
              ГЛАВА 1.<br />ИСТОРИЯ
            </h1>
            <div className="absolute -top-4 -right-4 bg-primary-container text-on-primary-container px-4 py-2 font-headline font-bold text-xl uppercase shadow-[4px_4px_0px_#131313] -rotate-3">
              ЭКСКЛЮЗИВНЫЙ АРХИВ
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="font-body text-2xl md:text-3xl leading-snug italic text-justify">
                Урал Опера Балет — это не просто сцена для спектаклей, а настоящая культурная легенда региона. С момента своего основания он стал центром притяжения для ценителей искусства, объединив традиции классики и смелость новаторства. За годы работы театр прошёл путь от первых любительских постановок до статуса одной из главных сцен страны, неизменно радуя зрителей высоким мастерством артистов и разнообразием репертуара.
              </p>
            </div>
            <div className="md:col-span-5 flex items-end">
              <div className="w-full bg-surface text-on-surface p-8 brutalist-shadow">
                <span className="font-headline font-bold uppercase text-primary-container text-sm tracking-widest block mb-4">
                  ОСНОВАН В
                </span>
                <div className="text-6xl font-headline font-black tracking-tighter">1912</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Interactive Timeline */}
        <section className="bg-surface text-on-surface py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <span className="h-1 w-24 bg-primary-container"></span>
              <h2 className="font-headline font-black text-4xl uppercase tracking-tighter italic">Хронология_событий</h2>
            </div>
  
            {/* Timeline Visualizer */}
            <div className="relative pb-20">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2"></div>
              <div className="flex justify-between items-center relative z-10">
                
                {/* Marker 1: Active */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-container border-4 border-surface shadow-[4px_4px_0px_#E5E2E1] flex items-center justify-center mb-6">
                    <span className="font-headline font-black text-on-primary-container">01</span>
                  </div>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest text-primary-container">1910—1912</span>
                </div>
  
                {/* Marker 2 */}
                <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                  <div className="w-12 h-12 bg-surface-container-high border-2 border-surface flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                    <span className="font-headline font-bold text-on-surface group-hover:text-on-primary-container">02</span>
                  </div>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest">1924</span>
                </div>
  
                {/* Marker 3 */}
                <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                  <div className="w-12 h-12 bg-surface-container-high border-2 border-surface flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                    <span className="font-headline font-bold text-on-surface group-hover:text-on-primary-container">03</span>
                  </div>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest">1945</span>
                </div>
  
                {/* Marker 4 */}
                <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                  <div className="w-12 h-12 bg-surface-container-high border-2 border-surface flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                    <span className="font-headline font-bold text-on-surface group-hover:text-on-primary-container">04</span>
                  </div>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest">1982</span>
                </div>
  
                {/* Marker 5 */}
                <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                  <div className="w-12 h-12 bg-surface-container-high border-2 border-surface flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                    <span className="font-headline font-bold text-on-surface group-hover:text-on-primary-container">05</span>
                  </div>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest">2023</span>
                </div>
              </div>
  
              {/* Active Content Detail */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-primary-container shadow-[12px_12px_0px_#D91E12]">
                <div className="relative h-[400px] bg-surface-container">
                  <img 
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-luminosity" 
                    alt="Historical photo of theatre construction" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOluWONumoD3UK0rwIhb3JL_u9sym3tcinOBOQ5d4n2Z6mksGqTOe0rve3FvFTlDQ4CmPhe7UcyywEsDeldzf_ZRulPUNl-8Pn48w5wQaGeJUb6mwfcq_bd_bxcKRBKFzpkanB0jhMUZXYfL-33M-4gPPwJih9gTD1vwWu2ukVIAAoR1mL7p2zoXbCedOTdGMU1MMhjpW2a7ocwgNcGBMp--sldpNF9i56FNynmcBOUJR4cs2CY5sDgGUXj7lHEpSZ_N4USfDKmLg"
                  />
                  <div className="absolute inset-0 bg-primary-container/20"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 text-xs font-headline font-bold uppercase">Архив: 1910-A</div>
                </div>
                <div className="p-12 bg-surface flex flex-col justify-center">
                  <h3 className="font-headline font-black text-5xl uppercase tracking-tighter mb-6 leading-none">ОСНОВАНИЕ И СТРОИТЕЛЬСТВО (1910–1912)</h3>
                  <p className="font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                    Проект здания в стиле неоренессанс был разработан архитектором Владимиром Семёновым. Строительство велось на средства меценатов и городской казны, став символом технического и культурного прогресса Екатеринбурга.
                  </p>
                  <button className="self-start px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest shadow-[4px_4px_0px_#E5E2E1] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                    ЧИТАТЬ ДАЛЕЕ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Video Block */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 relative group cursor-pointer">
              <div className="aspect-video bg-surface shadow-[12px_12px_0px_#D91E12] border-2 border-[#131313] relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-500" 
                  alt="Video thumbnail" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT0vzAPPKYJ1AElZ3qUhh4s4bb78OOV0RhHEQpipTF6aJGsCMWEPlidYnZtTt_TXMISHR_vTSISpZT7xgWLb2eRnEL4AAOL-VZGnw2RHuUtNX6v9vq5DKKsDRjoYWZRFf2F73Ee3L3MIVkzgsgodJg0GQpsrgk-T3WVh-UBxUOaCz8VTXDAZT_4iMGTbXoezvwMW5I8tIwDdykawKIrvwBUGNI-T3HR2K4Mx_E2A9Xfurns_Sn1LGAVjEgCNrXuLuThu78DwdXdJY"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-primary-container flex items-center justify-center bg-surface/80 group-hover:bg-primary-container transition-colors group-hover:scale-110 duration-300">
                    <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-container text-5xl translate-x-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-[20px] border-surface pointer-events-none opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-container text-on-primary-container px-6 py-3 font-headline font-black text-2xl uppercase italic">
                ВИДЕО №1
              </div>
            </div>
            <div className="md:col-span-4 pl-0 md:pl-12">
              <h4 className="font-headline font-black text-4xl uppercase leading-none mb-6">ВЗГЛЯД ИЗНУТРИ</h4>
              <p className="font-body text-xl italic mb-6">Редкие кадры репетиций и интервью с ведущими мастерами сцены, сохранившиеся в архивах ГТРК.</p>
              <div className="h-1 w-20 bg-primary-container"></div>
            </div>
          </div>
        </section>
  
        {/* Gallery Museum */}
        <section className="py-24 bg-[#131313] text-[#E5E2E1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-headline font-bold text-primary-container uppercase tracking-widest block mb-2">ВЫСТАВКА</span>
                <h2 className="font-headline font-black text-6xl uppercase tracking-tighter">Галерея "Музей"</h2>
              </div>
              <div className="hidden md:block font-body text-xl italic opacity-60">Куратор: Е. Кокшарова</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Gallery Item 1 */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  alt="Museum artifact" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnFkUC4FT7OX6YSlgbuZhhYgbqbs1-9yAYTqGlp2L-J5VNuPLOQgtPNrtPDaRL312pvVP3tll16l1I3aO1NfkEXrTOHRaimyHqKJTwpBHyR3mJqM0mQJrQjPtxr8_SjUE1RCLyVq0p-FR0UAyisWWHBdIwHHkVldaWhYQ3NNHPsDymqX53mLnMRcbsu3ZJwKyg_3eXydiRW1wCIfyHbjrrr4u5uXgmH3AI3CmxqFwD70oOwQyQpt9FaFhqVNAqvxjCdhC61ah_ZVI"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="font-headline text-xs font-bold uppercase tracking-widest text-primary-container">Фото_Екатерина Кокшарова</p>
                </div>
              </div>
              {/* Gallery Item 2 */}
              <div className="relative group overflow-hidden bg-surface-container aspect-square md:aspect-auto">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Museum artifact" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvGNKEYFzQlvZ_wjJ183bf-1q366557PJIUD9BAv4zi9-yXVXe-wVFOy4P7cLyvCZ8OalblHZohTuWI0yu9BOjJWsob2-eQnWGBAaecZfJzsy1i5wnvewpxNBa06ommkgI4uxsjIDSHmImOEAxP0CqzXOZW9_snFe-PvD3IPnpb3ooTQiQhVgQC37GAieJo4q-P_NjS8dph1BXgQqD9pwfpCQ3SfwTnPuISjhy41f2be_fS8psK-oQOXhGt0dZsRuc-y0fkZDJARQ"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-primary-container">Фото_Екатерина Кокшарова</p>
                </div>
              </div>
              {/* Gallery Item 3 */}
              <div className="relative group overflow-hidden bg-surface-container aspect-square md:aspect-auto">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Museum artifact" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahXLsS6oXMmuwFuJHXgfoyaMLNbUzAK1sWBOeI4MInb_JuCzOBuzGv24hSTU18OU3ixO5V8I4VKW3486u0AgEPXaJCdMkK4rybal4YAOL6qVu62gQHth4JBejkNjCmSgrjsG5i5Ykg266GUrglUAx_Gg6voHJBVxh7z-35zBZipWX1O5rivE-QDUP5BSad3RW5XSoehH1RcbJoP0I0VFLglKZT3jF5NSVlxln-wAWb5o5zI-uaHg1TG380P6rMVnfE2VGDRgrcNM"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-primary-container">Фото_Екатерина Кокшарова</p>
                </div>
              </div>
              {/* Gallery Item 4 */}
              <div className="md:col-span-2 relative group overflow-hidden bg-surface-container h-[300px]">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Museum artifact" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0VEHj9pNGLhSCIRfr4bvVADxaQZDM2_7n9MVkl50sEpv43yM2xrFxxoTd0BgMgnzMgw_zVr_Ajb7MFUqO2mhXQLsuAy9BLp1YXU6eHzbFwK1qkiobwZ0h70Yikkm9gtq5rirav9uXrj2dcv_vc_KZSBbyR3zd2Z6obNM0gkxAcD3F5ksQvK2o0Be7G-nXnarAvFXSus5TubeEEixiaT4qfzdUvZikPzk-_L4RGTzLZ8YWsV5AIrOBWZetiVy45RlvDkHa3d1Dn98"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="font-headline text-xs font-bold uppercase tracking-widest text-primary-container">Фото_Екатерина Кокшарова</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }