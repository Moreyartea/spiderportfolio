const contacts = [
  {
    label: "Email",
    value: "fatihtaqiyyuddin113@gmail.com",
    href: "mailto:fatihtaqiyyuddin113@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "github.com/Moreyartea",
    href: "https://github.com/Moreyartea",
    icon: "🐙",
  },
  {
    label: "Instagram",
    value: "Instagram",
    href: "https://www.instagram.com",
    icon: "📷",
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0A0A0A] pt-[110px] pb-20 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-[#E62429] border-2 border-black text-white text-xs font-bold tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          MARI TERHUBUNG
        </span>

        <h2
          className="font-comic text-4xl md:text-6xl text-white mb-10"
          style={{ WebkitTextStroke: "1.5px #FFD400" }}
        >
          KONTAK
        </h2>

        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border-4 border-[#FFD400] shadow-[6px_6px_0px_#E62429] p-5 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="text-2xl">{c.icon}</span>

              <p className="text-xs font-bold tracking-wider text-[#FFD400] mt-2">
                {c.label.toUpperCase()}
              </p>

              <p className="text-white text-sm break-all mt-1">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t-2 border-white/20 pt-6">
          <p className="font-comic text-[#FFD9C7] text-lg">
            FATIH.DEV
          </p>

          <p className="text-white/40 text-xs">
            © 2026 Fatih Taqiyyuddin. Tugas kuliah — aset visual Spider-Man
            digunakan untuk keperluan edukasi.
          </p>
        </div>
      </div>
    </footer>
  );
}