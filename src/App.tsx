export default function App() {
  return (
    <div className="min-h-screen bg-[#081225] text-white overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            VCET
          </h1>

          <nav className="hidden lg:flex gap-8 text-sm text-gray-200">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
            <a href="#departments" className="hover:text-orange-400 transition">
              Departments
            </a>
            <a href="#placements" className="hover:text-orange-400 transition">
              Placements
            </a>
            <a href="#campus" className="hover:text-orange-400 transition">
              Campus Life
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition"
          >
            Apply Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 scroll-mt-32"
      >
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
            Autonomous • NBA & NAAC Accredited • Industry-Ready Engineering
            Education with world-class placements, innovation, and campus life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#campus"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-2xl inline-block"
            >
              Explore Campus
            </a>

            <a
              href="#departments"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-semibold inline-block"
            >
              View Departments
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              ["5000+", "Students"],
              ["95%", "Placement"],
              ["100+", "Recruiters"],
              ["30+", "Years"],
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

      {/* About */}
      <section
        id="about"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#0b1630]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">About VCET</h2>
          <p className="text-xl text-gray-300 leading-9 max-w-4xl">
            VCET is an autonomous engineering college focused on innovation,
            industry-ready learning, research, placements, and student growth.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section
        id="departments"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#101b36]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Departments</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Computer Engineering",
              "AI & Data Science",
              "Information Technology",
              "Mechanical Engineering",
              "Civil Engineering",
              "Electronics & Telecommunication",
            ].map((dept) => (
              <div
                key={dept}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:-translate-y-2 hover:border-blue-500 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{dept}</h3>
                <p className="text-gray-400">
                  Explore industry-ready programs, labs, innovation, projects,
                  and placements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section
        id="placements"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#081225]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Placements</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1.06 Cr", "Highest Package"],
              ["12 LPA", "Average Package"],
              ["95%", "Placement Rate"],
              ["100+", "Recruiters"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center"
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {value}
                </div>
                <div className="text-gray-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
<section
  id="campus"
  className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#0b1630]"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-8">Campus Life</h2>
    <p className="text-xl text-gray-300 max-w-3xl mb-12">
      Experience hackathons, sports, clubs, innovation labs, cultural
      festivals, NSS, workshops and much more.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        ["Hackathons", "#hackathons"],
        ["Sports", "#sports"],
        ["Cultural Fest", "#fest"],
      ].map(([item, link]) => (
        <a
          key={item}
          href={link}
          className="h-64 rounded-3xl bg-gradient-to-br from-blue-900/50 to-orange-500/20 border border-white/10 flex items-end p-6 text-2xl font-semibold hover:scale-105 transition duration-300"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</section>

{/* Hackathons */}
<section
  id="hackathons"
  className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#101b36]"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-8">Hackathons</h2>
    <p className="text-xl text-gray-300 max-w-4xl">
      VCET regularly hosts coding competitions, innovation challenges,
      startup events and national-level hackathons where students build
      real-world projects and compete with top colleges.
    </p>
  </div>
</section>

{/* Sports */}
<section
  id="sports"
  className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#0b1630]"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-8">Sports</h2>
    <p className="text-xl text-gray-300 max-w-4xl">
      VCET offers football, cricket, basketball, athletics, indoor games
      and inter-college sports tournaments to promote fitness and teamwork.
    </p>
  </div>
</section>

{/* Cultural Fest */}
<section
  id="fest"
  className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#081225]"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-8">Cultural Fest</h2>
    <p className="text-xl text-gray-300 max-w-4xl">
      The annual VCET cultural fest includes dance, music, fashion shows,
      drama, concerts and student performances from across the campus.
    </p>
  </div>
</section>
      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-32 px-10 py-24 bg-[#081225]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Contact VCET</h2>
          <p className="text-gray-300 mb-10">
            Reach out for admissions, campus visits and more.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="mb-3">📍 Vasai, Maharashtra</p>
            <p className="mb-3">📞 +91 98765 43210</p>
            <p>✉ admissions@vcet.edu.in</p>
          </div>
        </div>
      </section>
    </div>
  )
}