export default function CampusLife() {
  return (
    <>
      <section
        id="campus"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#0b1630]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white">Campus Life</h2>

          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            Experience hackathons, sports, clubs, innovation labs, cultural
            festivals, NSS, workshops and much more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Hackathons", "#hackathons"],
              ["Sports", "#sports"],
              ["Cultural Fest", "#fest"],
            ].map(([title, link]) => (
              <a
                key={title}
                href={link}
                className="h-64 rounded-3xl bg-gradient-to-br from-blue-900/50 to-orange-500/20 border border-white/10 flex items-end p-6 text-2xl font-semibold text-white hover:scale-105 transition duration-300"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="hackathons"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#101b36]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white">Hackathons</h2>
          <p className="text-xl text-gray-300 max-w-4xl">
            VCET regularly hosts coding competitions, innovation challenges,
            startup events and national-level hackathons where students build
            real-world projects and compete with top colleges.
          </p>
        </div>
      </section>

      <section
        id="sports"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#0b1630]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white">Sports</h2>
          <p className="text-xl text-gray-300 max-w-4xl">
            VCET offers football, cricket, basketball, athletics, indoor games
            and inter-college sports tournaments to promote fitness and teamwork.
          </p>
        </div>
      </section>

      <section
        id="fest"
        className="scroll-mt-32 min-h-screen px-10 py-24 bg-[#081225]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white">Cultural Fest</h2>
          <p className="text-xl text-gray-300 max-w-4xl">
            The annual VCET cultural fest includes dance, music, fashion shows,
            drama, concerts and student performances from across the campus.
          </p>
        </div>
      </section>
    </>
  )
}