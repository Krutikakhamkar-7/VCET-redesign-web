export default function App() {
  return (
    <div className="min-h-screen bg-[#081225] text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            VCET
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-200">
            <a href="#" className="hover:text-orange-400 transition">Home</a>
            <a href="#" className="hover:text-orange-400 transition">About</a>
            <a href="#" className="hover:text-orange-400 transition">Departments</a>
            <a href="#" className="hover:text-orange-400 transition">Placements</a>
            <a href="#" className="hover:text-orange-400 transition">Campus Life</a>
            <a href="#" className="hover:text-orange-400 transition">Contact</a>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition">
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2563eb33,_transparent_35%),radial-gradient(circle_at_bottom_left,_#ff7a0033,_transparent_35%)]" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="uppercase tracking-[0.4em] text-orange-400 mb-4 text-sm">
            Vidyavardhini's College of Engineering & Technology
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Build The Future <br />
            With <span className="text-blue-500">VCET</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-8">
            Autonomous • NBA & NAAC Accredited • Industry-Ready Engineering Education with world-class placements, innovation, and campus life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-2xl">
              Explore Campus
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-semibold">
              View Departments
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              ["5000+", "Students"],
              ["95%", "Placement"],
              ["100+", "Recruiters"],
              ["30+", "Years"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6"
              >
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-gray-400 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}