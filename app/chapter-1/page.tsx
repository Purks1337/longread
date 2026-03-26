/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";

type TimelineItem = {
  id: string;
  marker: string;
  title: string;
  period: string;
  description: string;
  photoLabel: string;
};

export default function ChapterOne() {
  const items: TimelineItem[] = useMemo(
    () => [
      {
        id: "foundation-1910-1912",
        marker: "01",
        period: "1910—1912",
        title: "Основание и строительство (1910–1912)",
        description:
          "Идея строительства каменного здания театра возникла после пожара деревянного театра-цирка. Проект был утвержден в 1910 году, а уже 12 октября 1912 года состоялась торжественная премьера — опера М. И. Глинки «Жизнь за царя» («Иван Сусанин»).",
        photoLabel: "Фото 1",
      },
      {
        id: "altschuller-barbini-1912-1913",
        marker: "02",
        period: "1912—1913",
        title: "Первые имена: режиссёр и дирижёр",
        description:
          "Первым главным режиссером театра стал Александр Альтшуллер, а главным дирижером - известный итальянец Сильвио Барбини. К сожалению, через год - 18 октября 1913 года - Барбини умер от остановки сердца и был похоронен на екатеринбургском кладбище. Интересно, что свою трудовую деятельность на должности рассыльного оперного театра начинал 9-летний Григорий Александров - будущий режиссер известных советских музыкальных комедий.",
        photoLabel: "Фото 2",
      },
      {
        id: "soviet-return-1919-1924",
        marker: "03",
        period: "1919—1924",
        title: "Возвращение культурной роли (1919–1924)",
        description:
          "После бурь революции, затрагивавших театр, в советское время (с 1919 года) театр вновь стал выполнять свою культурную роль. В нем по-прежнему ставились оперы и балет. В 1922 году была создана балетная труппа. Её первым спектаклем стала «Коппелия» французского композитора Лео Делиба. Дровяную площадь, на которой стоял театр, после установления советской власти переименовали в площадь Парижской Коммуны. С 1924 года эта обитель культуры называется Государственным оперным театром имени А.В. Луначарского.",
        photoLabel: "Фото 3",
      },
      {
        id: "ww2-1939-1945",
        marker: "04",
        period: "1941—1945",
        title: "Театр в годы Великой Отечественной войны",
        description:
          "Театр не прекращал работу даже в трудные годы Великой Отечественной войны. Часть коллектива ушла на фронт, а остальные работали без выходных. За пять военных лет они дали более 4 тысяч спектаклей: в городе, на фронтах, в госпиталях. На заработанные выступлениями деньги коллектив театра купил для фронта три танка, а также совершал перечисления в фонд обороны.",
        photoLabel: "Фото 4",
      },
      {
        id: "soviet-1920s-ww2",
        marker: "05",
        period: "1920—1940-е",
        title: "Советский период: репертуар и эвакуация",
        description:
          "Советский период: В 1920–30-е годы театр стал центром классического репертуара. В годы Великой Отечественной войны здесь выступали артисты эвакуированного Большого театра СССР, включая Майю Плисецкую.",
        photoLabel: "Фото 5",
      },
      {
        id: "awards-reconstruction-1946-1987",
        marker: "06",
        period: "1946—1987",
        title: "Премии, орден, статус и реконструкция",
        description:
          "В 1946 и 1987 году театр удостаивался Государственной премии СССР. В 1962 году он был награждён орденом Трудового Красного Знамени. В 1966 году театр стал академическим. В конце 1970-х была выполнена реконструкция театра. Он был значительно расширен за счет заднего пристроя.",
        photoLabel: "Фото 6",
      },
      {
        id: "jubilee-2011-2012",
        marker: "07",
        period: "2011—2012",
        title: "Юбилей и возвращение исторического облика",
        description:
          "К юбилею Оперного театра в 2011-12 гг. была проведена реконструкция, в ходе которой строители постарались вернуть театру его исторический облик. Главной премьерой юбилейного 100-го сезона театра стала опера М.Мусоргского «Борис Годунов».",
        photoLabel: "Фото 7",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

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
                {items.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={[
                        "flex flex-col items-center cursor-pointer group transition-opacity",
                        isActive ? "opacity-100" : "opacity-40 hover:opacity-100",
                      ].join(" ")}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`${item.marker}. ${item.title}`}
                    >
                      <div
                        className={[
                          "flex items-center justify-center mb-6 transition-colors",
                          isActive
                            ? "w-16 h-16 bg-primary-container border-4 border-surface shadow-[4px_4px_0px_#E5E2E1]"
                            : "w-12 h-12 bg-surface-container-high border-2 border-surface group-hover:bg-primary-container",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "font-headline font-bold",
                            isActive
                              ? "text-on-primary-container font-black"
                              : "text-on-surface group-hover:text-on-primary-container",
                          ].join(" ")}
                        >
                          {item.marker}
                        </span>
                      </div>
                      <span
                        className={[
                          "font-headline font-bold text-sm uppercase tracking-widest",
                          isActive ? "text-primary-container" : "",
                        ].join(" ")}
                      >
                        {item.period}
                      </span>
                    </button>
                  );
                })}
              </div>
  
              {/* Active Content Detail */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-primary-container shadow-[12px_12px_0px_#D91E12]">
                <div className="relative h-[400px] bg-surface-container overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,30,18,0.20),rgba(0,0,0,0.65))]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-headline font-black text-6xl md:text-7xl tracking-tighter text-[#E5E2E1] mix-blend-screen">
                        {active.photoLabel}
                      </div>
                      <div className="mt-3 font-headline font-bold uppercase tracking-widest text-[#E5E2E1]/70 text-sm">
                        Архивный материал
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 text-xs font-headline font-bold uppercase">
                    {active.photoLabel}
                  </div>
                </div>
                <div className="p-12 bg-surface flex flex-col justify-center">
                  <h3 className="font-headline font-black text-5xl uppercase tracking-tighter mb-6 leading-none">
                    {active.title}
                  </h3>
                  <p className="font-body text-xl text-on-surface/80 leading-relaxed mb-8">{active.description}</p>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveIndex((i) => (i - 1 + items.length) % items.length)}
                      className="px-6 py-4 bg-surface-container-high text-on-surface font-headline font-bold uppercase tracking-widest shadow-[4px_4px_0px_#E5E2E1] border-2 border-surface active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                    >
                      НАЗАД
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIndex((i) => (i + 1) % items.length)}
                      className="px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest shadow-[4px_4px_0px_#E5E2E1] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                    >
                      ДАЛЕЕ
                    </button>
                  </div>
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