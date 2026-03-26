import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[400px] py-20 px-10 bg-[#0E0E0E] dark:bg-[#0E0E0E] border-t-2 border-[#D91E12]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black text-[#D91E12] uppercase font-headline mb-8">FORWARD</h2>
            <p className="font-body italic text-lg text-[#E5E2E1] opacity-70 max-w-md">
              Совместный цифровой проект, исследующий пересечение молодежной журналистики и высокой культуры.
            </p>
          </div>
          <div className="mt-12">
            <p className="font-body italic text-lg text-[#E5E2E1] opacity-50">© FORWARD x Департамент образования</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h5 className="text-[#D91E12] font-headline font-bold uppercase tracking-widest text-sm">Навигация</h5>
            <Link className="font-body italic text-lg text-[#E5E2E1] opacity-50 hover:text-[#D91E12] hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300" href="/">Forward</Link>
            <Link className="font-body italic text-lg text-[#E5E2E1] opacity-50 hover:text-[#D91E12] hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300" href="#">Департамент образования</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[#D91E12] font-headline font-bold uppercase tracking-widest text-sm">Юридическая информация</h5>
            <Link className="font-body italic text-lg text-[#E5E2E1] opacity-50 hover:text-[#D91E12] hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300" href="#">Контакты</Link>
            <Link className="font-body italic text-lg text-[#E5E2E1] opacity-50 hover:text-[#D91E12] hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300" href="#">Условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}