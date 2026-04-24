import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#0A0A0A]/10 bg-[#FAFAF7] px-6 py-12 text-[#0A0A0A]">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg">Memento</p>
            <p className="mt-1 font-sans text-xs text-[#0A0A0A]/50">
              A quiet ledger of humanity.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-[#0A0A0A]/60">
            <Link href="/methodology" className="hover:text-[#0A0A0A]">
              Methodology
            </Link>
            <Link href="/privacy" className="hover:text-[#0A0A0A]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#0A0A0A]">
              Terms
            </Link>
            <a
              href="mailto:contact@albor.digital"
              className="hover:text-[#0A0A0A]"
            >
              Contact
            </a>
          </nav>
        </div>

        <p className="mt-10 font-sans text-xs text-[#0A0A0A]/40">
          © {new Date().getFullYear()} Albor Digital LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
