const projects = [
  {
    name: "NoteZ",
    tag: "Personal Project",
    desc: "Aplikasi mobile produktivitas personal dengan arsitektur offline-first — data tersimpan lokal di perangkat, dengan opsi sinkronisasi ke cloud. Dilengkapi fitur pencatatan keuangan dan wishlist dengan format Rupiah.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Capacitor"],
    link: "https://github.com/Moreyartea/NoteZ",
    color: "#FFD400",
  },
  {
    name: "StokTeknik",
    tag: "Client Project",
    desc: "Aplikasi manajemen stok yang dikembangkan untuk klien — usaha reparasi elektronik (mesin las inverter & TV). Mencakup pelacakan stok, manajemen pekerjaan servis, riwayat, laporan, hingga nota servis yang bisa dicetak langsung.",
    stack: ["Neubrutalism UI", "Google Stitch", "Backup/Restore JSON"],
    link: null,
    color: "#1A3FA0",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#FFF4E0] py-20 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-[#E62429] border-2 border-black text-white text-xs font-bold tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          KARYA
        </span>

        <h2 className="font-comic text-4xl md:text-6xl text-[#0A0A0A] mb-10">
          PROJECT
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 ${
                i % 2 === 0 ? "rotate-[-0.4deg]" : "rotate-[0.4deg]"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="font-comic text-3xl md:text-4xl text-black">{p.name}</h3>
                <span
                  className="px-3 py-1 border-2 border-black text-xs font-bold tracking-wider"
                  style={{ backgroundColor: p.color }}
                >
                  {p.tag.toUpperCase()}
                </span>
              </div>

              <p className="text-black/80 leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-black text-white text-xs font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-[#FFD400] border-2 border-black text-black text-sm font-bold shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  LIHAT DI GITHUB →
                </a>
              ) : (
                <span className="inline-block px-5 py-2.5 bg-black/10 border-2 border-black/30 text-black/50 text-sm font-bold">
                  PROJECT PRIVAT
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
