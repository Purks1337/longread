import Link from "next/link";

export default function Epilogue() {
  const partners = [
    { name: "Форвард", url: "https://vk.com/forvard140", logo: "/materials/логотипы/Форвард.png" },
    { name: "Департамент образования", url: "https://xn--80acgfbsl1azdqr.xn--p1ai/", logo: "/materials/логотипы/Департамент 1.png" },
    { name: "Городской дворец творчества", url: "https://vk.com/giftedekb", logo: "/materials/логотипы/Дворец 1.png" },
    { name: "Медиагород", url: "https://vk.com/mediagorodekb", logo: "/materials/логотипы/МедиаГород 1.png" },
    { name: "Урал опера балет", url: "https://uralopera.ru", logo: "/materials/логотипы/опера балет.png" },
  ];

  const authors = [
    { name: "Анна Алабужина", photo: "/materials/Авторы/Алабужина Анна.webp" },
    { name: "Екатерина Кокшарова", photo: "/materials/Авторы/Кокшарова Екатерина.webp" },
    { name: "Елизавета Честюнина", photo: "/materials/Авторы/Честюнина Елизавета.webp" },
  ];

  return (
    <main className="min-h-screen bg-surface text-on-surface pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/materials/фоторепортаж/Атмосфера/2.JPG"
          alt="Атмосфера театра"
          className="w-full h-full object-cover grayscale opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Заголовок */}
        <h1 className="font-headline text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-16">
          ЭПИЛОГ: <br/><span className="text-primary-container">ЗАНАВЕС</span>
        </h1>

        {/* Текст */}
        <div className="font-body text-xl md:text-2xl leading-relaxed text-on-surface/90 space-y-6 mb-24">
          <p>
            Екатеринбургский государственный академический театр оперы и балета — это не просто одна из ведущих сцен страны, а настоящий культурный символ Урала. За десятилетия своей истории театр стал местом, где рождаются шедевры, объединяются поколения зрителей и творится живая история искусства. Здесь классика встречается с новаторством, а каждый новый спектакль — это шаг в будущее, основанный на богатых традициях и высочайшем профессионализме всей труппы. Театр продолжает вдохновлять, удивлять и дарить публике незабываемые эмоции, оставаясь сердцем культурной жизни Екатеринбурга и всей России.
          </p>
        </div>

        {/* Авторы */}
        <div className="mb-32">
          <h3 className="font-headline text-3xl font-bold uppercase tracking-widest text-primary-container mb-12">Авторы проекта</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div key={author.name} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-surface-container-high border-2 border-primary-container mb-6 overflow-hidden">
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <p className="font-headline font-bold text-center text-lg">{author.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ссылки (Логотипы) */}
        <div className="border-t-2 border-primary-container/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((p, i) => (
              <Link
                key={p.name}
                href={p.url}
                target="_blank"
                className={`group flex items-center gap-5 bg-surface-container-high/60 backdrop-blur border border-primary-container/20 p-5 brutalist-shadow hover:border-primary-container/60 transition-colors ${i === partners.length - 1 ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""}`}
              >
                <div className="w-16 h-16 bg-surface flex items-center justify-center border border-primary-container/20">
                  <img src={p.logo} alt={p.name} className="max-h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition" />
                </div>
                <div className="flex-1">
                  <div className="font-headline font-bold uppercase tracking-widest text-sm text-primary-container">
                    {i + 1}.
                  </div>
                  <div className="font-body text-lg">{p.name}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity font-headline font-black text-primary-container">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}