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
                <img 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60" 
                  alt="cinematic low angle shot of a dark empty orchestra pit" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEGF7kEYnWzWdAuVxnuLZz84Y6jjO3ptqwfzNEvrm6_DeMrtZJ1JK1fb8_1T7NXe4a3EpjFWd0t5dyP_eKuBfRFJWDqdDswBGtsaSwGfdpjH1veMyT-1qf2_ryKcznv02V50Z-zXE7HdltnlXGTUYEHGSoy86OdCcbIf_gA9U62cTCCZPccY6AhObllkw4Rz_FKiQ4Ij4cLplTZL2VXJbhpDZ50LV8Ln7UwyIaI0rOjtz678r5w1KTy2o47_u0gut8bUvoBNxV8vM" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary-container text-on-primary-container flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-surface px-4 py-2 font-headline font-bold text-primary-container uppercase tracking-tighter">
                  Видеo №2
                </div>
              </div>
            </div>
            
            {/* Asymmetric Collage */}
            <div className="lg:col-span-12 mt-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[400px]">
                <div className="col-span-2 row-span-1 md:row-span-2 brutalist-shadow relative translate-y-4">
                  <img className="w-full h-full object-cover grayscale" alt="dramatic black and white close-up of a conductor's hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb3u3jVKywlpIrTA5WlDC41FBnMTNdxDXlNxJ52r1mHqVzzyd5V3nHUQW2s5t2Tn1KCuE2cqx8-rcRbfYxDjLm3syJN-Zy4xo8Zmw9BhHNZ-hKssUuB3B4sra6PZ9szaMsHye_LhOUR7a5WNXlgN3a7IGY4V-OSi2nUjLNX2KpGlScEJlZR76CzbmheTZE_A2HR4KLIH2h6p-pkh-pfYxIXy-vXZm5fIhSun_m2UpyzZ0epAi4zqw4mdvSq0QIHthOgFGHqjeKrsY" />
                </div>
                <div className="col-span-1 brutalist-shadow relative -translate-x-4">
                  <img className="w-full h-full object-cover grayscale" alt="close up of cello strings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUp__aud7Zo91w2wR5fYsCzdJsNLWE1U0djOnkPhLsEgV3MI3MCnfrZHfSSz88HxctLgxWekWLMGOvKPXnw1-oiy_S8mJBvnBfQ7Kl0ooNuCQ2FRA6ck_ZZ4MLeqAAV2xQbMOdU-goryc-yKPWvL1y6d4TVI1xp1bZfXRfw_8o8XI0i4564qUvF5E9UKDyTIP_D-1F0lQOm_7nEdHfOxcoM68T2J285NMnc7PG4LB03HIjANoovyfOV7rjMck2KmLLZyC6LiFymg0" />
                </div>
                <div className="col-span-1 brutalist-shadow relative translate-x-4 translate-y-8">
                  <img className="w-full h-full object-cover grayscale" alt="detail of a sheet music score" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPFyNwbqiznUztRI02Xw2M6xZ0J_fLJGuh54yGRSdiYZcM0MP9kQ_2jmMFUfrU-J0NjjXsHrsiDNH7jKqvfadYzWzm3vusxtG3NHVrS098CJxn2jr4JWkEtFmSWF7uIOMWZyMfQf3hFrKZf2-vFVppmM9LcmCVzjDd77ewPLRQQl5C6nV3004ELwmJ2aimLzc5YY4f0JaWZoNQmKWSW4LgtEEhAfKy5cqB94-5qZUFOQLrB4HiUBZfggukV2nkUxk1br3aQHY4orA" />
                </div>
                <div className="col-span-2 brutalist-shadow relative -translate-y-8">
                  <img className="w-full h-full object-cover grayscale" alt="wide shot of an orchestra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFC4ZClN2X1s9ScMNvPPk8Mbqf4yeeaKEnqDDCRB0MDTy0yi_KjcmIX0xJ5kUxh0hw0awyQM9wl37nuby_oq5-NuItb0w_TLvQjm3ByuxrfPjDlrCEKmKsiKsNGgx5b7ftiCyLYwKW6DUZOVgZ4uqC7wZvwcPx8m6BmTlyaQimruXbl1-VM10OtZe5Zi6m1ZwVGsWlm30AKoUShI8EaXUxOkqlkobc3GriUngxsnlLII1GEYbSh7hZ_GXgDIeZVV-SZVkn0LCzHnA" />
                </div>
              </div>
              <div className="mt-20 text-right">
                <span className="font-headline font-bold uppercase tracking-widest text-primary-container border-b-2 border-primary-container pb-1">
                  ФОТО_ЕКАТЕРИНА КОКШАРОВА
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
                    Режиссура в театре оперы и балета — это искусство объединения музыки, хореографии и сценического действия в единое гармоничное полотно. Именно режиссёр определяет драматургию спектакля, выстраивает взаимодействие солистов, хора, оркестра и кордебалета.
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
                    <img 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                      alt="theatrical director silhouette" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDesMId9EUy7lIftLp38iCjBUQUL4rtcJ1qVpU2i2ksNCFIZi0SaBDT_Gzf4xgVjCKUCMcJWotEyIB9FFbNrHESS-4cgA-OmGBbaVCjC4PR5drNK4JsFle9Xh5dr53hwGoHSkt97UVWvQKHaly6KSyjJSGtQ4VpzEcwObNAZf6xCq88uRooiGiRaJ1bkibIzbidiLQkXK528jxS0sHQCAg0AIyAfH0qkeBIQkA-De7kF44X6IehcVPRcSUzfIlCfLMagR-x4c1_De0" 
                    />
                    <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 bg-primary-container text-on-primary-container flex items-center justify-center hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                      </button>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                      <div className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-black text-xl uppercase tracking-tighter shadow-lg">
                        ВИДЕО №3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Structural Grid Element */}
            <div className="mt-32 border-t-8 border-surface pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="text-primary-container font-headline font-black text-4xl">01.</div>
                <div className="font-headline font-bold uppercase text-sm tracking-widest">ДРАМАТУРГИЯ</div>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container font-headline font-black text-4xl">02.</div>
                <div className="font-headline font-bold uppercase text-sm tracking-widest">ВЗАИМОДЕЙСТВИЕ</div>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container font-headline font-black text-4xl">03.</div>
                <div className="font-headline font-bold uppercase text-sm tracking-widest">АТМОСФЕРА</div>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container font-headline font-black text-4xl">04.</div>
                <div className="font-headline font-bold uppercase text-sm tracking-widest">ИНТЕРПРЕТАЦИЯ</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }