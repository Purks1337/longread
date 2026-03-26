import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 h-16 bg-surface/80 dark:bg-[#131313]/80 backdrop-blur-md shadow-[0px_4px_0px_#D91E12] flex justify-between items-center px-6">
      <div className="text-2xl font-black tracking-tighter text-[#D91E12] mix-blend-difference font-headline uppercase">
        FORWARD
      </div>
      <nav className="hidden md:flex gap-8 items-center h-full">
        <Link className="font-headline uppercase tracking-tighter font-bold text-[#D91E12] border-b-4 border-[#D91E12] pb-1 mix-blend-difference hover:scale-105 duration-150" href="/">ГЛАВА 1</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="#">ГЛАВА 2</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="#">ГЛАВА 3</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="#">ГЛАВА 4</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="#">ГЛАВА 6</Link>
        <Link className="font-headline uppercase tracking-tighter font-bold text-on-surface dark:text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#D91E12] transition-colors mix-blend-difference hover:scale-105 duration-150" href="#">ЭПИЛОГ</Link>
      </nav>
      <button className="md:hidden text-primary-container">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}