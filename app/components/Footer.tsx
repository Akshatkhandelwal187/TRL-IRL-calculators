import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
              BITS TEC<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Enabling technology transfer and fostering innovation at BITS Pilani. Supported by DST, Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-secondary">About TEC</Link></li>
              <li><Link href="#" className="hover:text-secondary">Our Team</Link></li>
              <li><Link href="#" className="hover:text-secondary">Events</Link></li>
              <li><Link href="#" className="hover:text-secondary">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/trl" className="hover:text-secondary">TRL Assessment</Link></li>
              <li><Link href="#" className="hover:text-secondary">Patent Search</Link></li>
              <li><Link href="#" className="hover:text-secondary">Industry Problems</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-light border border-gray-200 rounded-lg focus:outline-none focus:border-secondary text-sm"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BITS Pilani Technology Enabling Centre.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
