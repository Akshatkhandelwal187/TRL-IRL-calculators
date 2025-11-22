import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
          BITS TEC<span className="text-accent">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
          <Link href="/" className="text-primary hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-primary hover:text-secondary transition-colors">
            About Us
          </Link>
          <div className="relative group">
            <button className="text-primary hover:text-secondary transition-colors flex items-center">
              Resources & Tools
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* Simple Dropdown */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <Link href="/trl" className="block px-4 py-2 text-gray-700 hover:bg-light hover:text-secondary">TRL Calculator</Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-light hover:text-secondary">IRL Calculator</Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-light hover:text-secondary">Patents Database</Link>
            </div>
          </div>
          <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden md:inline-block px-6 py-2.5 bg-accent hover:bg-amber-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg text-sm"
        >
          Partner with Us
        </Link>
      </div>
    </nav>
  );
}
