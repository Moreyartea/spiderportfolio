const skillGroups = [
  { category: "Bahasa & Framework", items: ["JavaScript", "TypeScript", "Next.js", "React"] },
  { category: "Styling", items: ["Tailwind CSS"] },
  { category: "Backend & Database", items: ["Supabase"] },
  { category: "Tools", items: ["Git & GitHub", "Capacitor", "Google Stitch"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0A0A0A] py-20 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-[#1A3FA0] border-2 border-black text-white text-xs font-bold tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          KEMAMPUAN
        </span>

        <h2
          className="font-comic text-4xl md:text-6xl text-white mb-10"
          style={{ WebkitTextStroke: "1.5px #E62429" }}
        >
          SKILL
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#1A1A1A] border-4 border-[#FFD400] shadow-[6px_6px_0px_#E62429] p-6"
            >
              <p className="text-xs font-bold tracking-wider text-[#FFD400] mb-3">
                {group.category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white text-black text-sm font-bold border-2 border-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
