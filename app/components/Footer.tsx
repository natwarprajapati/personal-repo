"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-4 text-center text-[11px] text-neutral-500 dark:border-white/10">
      © {new Date().getFullYear()} Natwar Prajapati. Built with Next.js.
    </footer>
  );
}
