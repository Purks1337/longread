import Link from "next/link";

export default function Epilogue() {
  const partners = [
    { name: "Форвард", url: "https://vk.com/forvard140" },
    { name: "Департамент образования", url: "https://xn--80acgfbsl1azdqr.xn--p1ai/" },
    { name: "Городской дворец творчества", url: "https://vk.com/giftedek" },
    { name: "Медиагород", url: "https://vk.com/mediagorodekb" },
    { name: "Урал опера балет", url: "https://uralopera.ru" },
  ];

  const authors = ["Анна Алабужина", "Екатерина Кокшарова", "Елизавета Честюнина"];

  return (
    <main className="min-h-screen bg-surface text-on-surface pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Заголовок */}
        <h1 className="font-headline text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-16">
          ЭПИЛОГ: <br/><span className="text-primary-container">ЗАНАВЕС</span>
        </h1>

        {/* Текст */}
        <div className="font-body text-xl md:text-2xl leading-relaxed text-on-surface/90 space-y-6 mb-24">
          <p>
            Екатеринбургский государственный академический театр оперы и балета — это не просто одна из ведущих сцен страны, а настоящий культурный символ Урала. За десятилетия своей истории театр стал местом, где рождаются шедевры, объединяются поколения зрителей и творится живая история искусства.
          </p>
          <p>
            Здесь классика встречается с новаторством, а каждый новый спектакль — это шаг в будущее, основанный на богатых традициях и высочайшем профессионализме всей труппы. Театр продолжает вдохновлять, удивлять и дарить публике незабываемые эмоции, оставаясь сердцем культурной жизни Екатеринбурга и всей России.
          </p>
        </div>

        {/* Авторы */}
        <div className="mb-32">
          <h3 className="font-headline text-3xl font-bold uppercase tracking-widest text-primary-container mb-12">Авторы проекта</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div key={author} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-surface-container-high border-2 border-primary-container mb-6 flex items-center justify-center overflow-hidden">
                   <span className="text-primary-container font-headline font-black text-4xl opacity-30">ФОТО</span>
                </div>
                <p className="font-headline font-bold text-center text-lg">{author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ссылки (Партнеры/Логотипы) */}
        <div className="border-t-2 border-primary-container/20 pt-16">
          <h4 className="font-headline text-xl font-bold uppercase tracking-widest mb-8">Партнеры и ресурсы:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <li key={p.name}>
                <Link 
                  href={p.url} 
                  target="_blank" 
                  className="group flex items-center gap-4 text-lg font-body hover:text-primary-container transition-colors"
                >
                  <span className="text-primary-container font-headline font-bold">{i + 1}.</span>
                  {p.name}
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}