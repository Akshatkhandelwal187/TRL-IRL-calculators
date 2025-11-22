import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Background Overlay with Image (Placeholder URL used) */}
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.bits-pilani.ac.in/wp-content/uploads/2023/04/pilani-campus-1.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/90 to-primary/70" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold tracking-widest mb-6 uppercase">
            Technology Enabling Centre
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Accelerating Innovation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
              From Lab to Market
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Connecting R&D, MSMEs, and Startups to foster an ecosystem of indigenous technology development.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white p-2 rounded-full shadow-2xl flex items-center">
            <input
              type="text"
              placeholder="Search technologies, patents, or experts..."
              className="flex-grow px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-full"
            />
            <button className="bg-accent hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="bg-white py-10 shadow-md relative z-20 -mt-10 container mx-auto rounded-xl max-w-6xl border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { label: "Technologies Transferred", value: "45+" },
            { label: "Industrial Partners", value: "120+" },
            { label: "Patents Filed", value: "85+" },
            { label: "TRL Assessments", value: "300+" },
          ].map((stat, index) => (
            <div key={index} className="text-center px-4">
              <h3 className="text-4xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who We Empower</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Industry */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary group">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">For Industry</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find ready-to-deploy technologies and expert consultants to solve your industrial challenges.
              </p>
              <Link href="#" className="text-accent font-bold hover:underline flex items-center">
                Find Solutions <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            {/* Card 2: Academia */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">For Academia</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protect your Intellectual Property and bridge the gap between research and commercialization.
              </p>
              <Link href="#" className="text-primary font-bold hover:underline flex items-center">
                IP Services <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            {/* Card 3: Startups */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-accent group">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">For Startups</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access incubation support, mentorship, and tools to assess your investment readiness.
              </p>
              <Link href="/trl" className="text-accent font-bold hover:underline flex items-center">
                Use Calculators <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS PREVIEW */}
      <section className="bg-dark text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Essential Tools for Innovation</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <Link href="/trl" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 p-6 rounded-xl flex-1 max-w-md mx-auto text-left transition-all">
                <h4 className="text-xl font-bold text-secondary mb-2">TRL Calculator</h4>
                <p className="text-gray-300 text-sm">Measure the maturity of your technology instantly.</p>
             </Link>
             <Link href="#" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 p-6 rounded-xl flex-1 max-w-md mx-auto text-left transition-all">
                <h4 className="text-xl font-bold text-accent">IRL Calculator</h4>
                <p className="text-gray-300 text-sm">Check your startup's investment readiness.</p>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
