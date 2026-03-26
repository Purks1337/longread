/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const logos = [
    { src: "/materials/логотипы/Форвард.png", alt: "Форвард" },
    { src: "/materials/логотипы/Департамент 1.png", alt: "Департамент образования" },
    { src: "/materials/логотипы/Дворец 1.png", alt: "Городской дворец творчества" },
    { src: "/materials/логотипы/МедиаГород 1.png", alt: "Медиагород" },
    { src: "/materials/логотипы/опера балет.png", alt: "Урал опера балет" },
  ];

  const track = [...logos, ...logos];

  return (
    <footer className="w-full py-10 bg-[#0E0E0E] border-t-2 border-[#D91E12]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-y border-[#D91E12]/30 bg-[#131313]/40 backdrop-blur-md overflow-hidden">
          <div className="ft-marquee flex gap-16 py-6 items-center whitespace-nowrap">
            {track.map((logo, idx) => (
              <img
                key={`${logo.src}-${idx}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}