import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 h-16 bg-surface/80 dark:bg-[#131313]/80 backdrop-blur-md shadow-[0px_4px_0px_#D91E12] flex justify-between items-center px-6">
      <div className="text-2xl font-black tracking-tighter text-[#D91E12] mix-blend-difference font-headline uppercase">
        FORWARD
      </div>
      {/* Полная навигация: от Пролога до Эпилога */}
      <nav className="hidden lg:flex gap-6 xl:gap-8 items-center h-full">
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/">ПРОЛОГ</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/chapter-1">ГЛАВА 1</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/chapter-2">ГЛАВА 2</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/chapter-2#chapter-3">ГЛАВА 3</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/chapter-4">ГЛАВА 4</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/chapter-5">ГЛАВА 5</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="/epilogue">ЭПИЛОГ</Link>
      </nav>
      <button className="lg:hidden text-primary-container">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}