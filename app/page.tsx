import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-deep-blue text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            BITS Pilani TEC Innovation Assessment
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Empowering innovation through precise assessment tools.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* TRL Calculator Card */}
          <Link
            href="/trl"
            className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-gold overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-deep-blue mb-4 group-hover:text-gold transition-colors">
                TRL Calculator
              </h2>
              <p className="text-gray-600 mb-6">
                Assess the Technology Readiness Level of your innovation.
                Determine the maturity of your technology from concept to commercialization.
              </p>
              <div className="flex items-center text-deep-blue font-semibold group-hover:text-gold">
                Start Assessment
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>

          {/* IRL Calculator Card */}
          <Link
            href="#"
            className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-gold overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-deep-blue mb-4 group-hover:text-gold transition-colors">
                IRL Calculator
              </h2>
              <p className="text-gray-600 mb-6">
                Evaluate the Investment Readiness Level of your startup.
                Gauge your attractiveness to investors and readiness for funding.
              </p>
              <div className="flex items-center text-deep-blue font-semibold group-hover:text-gold">
                Start Assessment
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-8 px-6">
        <div className="container mx-auto text-center opacity-80 text-sm">
          &copy; {new Date().getFullYear()} BITS Pilani TEC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
