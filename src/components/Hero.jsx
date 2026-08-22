export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden"
    >
      {/* =========================================================
          HERO BODY
      ========================================================= */}
      <div className="relative flex flex-col md:flex-row min-h-screen pt-[76px]">

        {/* =====================================================
            LEFT — PHOTO
        ===================================================== */}
        <div className="relative w-full md:w-1/2 min-h-[620px] md:min-h-[calc(100vh-76px)] bg-[#1A3FA0] flex items-center justify-center py-20 md:py-0 overflow-hidden">

          {/* WEB PATTERN */}
          <svg
            className="absolute top-0 left-0 w-[150%] h-[150%] opacity-[0.16] -translate-x-1/4 -translate-y-1/4 pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x2 = 400 + Math.cos(angle) * 400;
              const y2 = 400 + Math.sin(angle) * -400;

              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="1.5"
                />
              );
            })}

            {[60, 120, 180, 240, 300, 360].map((r, i) => (
              <path
                key={i}
                d={`M 0 ${r} Q ${r * 0.4} ${r * 0.4} ${r} 0`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          {/* DECORATIVE SPIDER SILHOUETTE */}
          <svg
            className="absolute -top-[5%] -right-[15%] w-[70%] h-[80%] opacity-[0.12] pointer-events-none select-none rotate-[18deg]"
            viewBox="0 0 200 300"
            fill="#000000"
            aria-hidden="true"
          >
            <ellipse cx="100" cy="60" rx="24" ry="28" />

            <path d="M100 85 L55 60 L35 25 L20 40 L45 80 L90 115 Z" />

            <path d="M100 85 L150 100 L185 130 L175 155 L135 130 L90 110 Z" />

            <path d="M85 140 Q55 190 20 220 L45 245 Q80 205 105 165 Z" />

            <path d="M115 140 Q150 175 190 195 L175 225 Q130 195 100 165 Z" />
          </svg>

          {/* HALFTONE */}
          <div
            className="absolute top-8 left-8 w-32 h-32 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* PHOTO CARD */}
          <div className="relative z-10">

            {/* TOP LABEL */}
            <div className="absolute -top-5 -left-8 z-20 px-4 py-2 bg-[#FFD400] border-3 border-black shadow-[4px_4px_0px_#000] rotate-[-6deg]">
              <span className="text-[10px] font-black tracking-[0.2em] text-black">
                IDENTITY // 001
              </span>
            </div>

            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-[340px] md:h-[430px] bg-[#FFD9C7] border-4 border-black shadow-[12px_12px_0px_#000] rotate-[-1.5deg] md:translate-y-5 overflow-hidden">

              {/* =================================================
                  FOTO PROFIL
              ================================================= */}
              <img
                src="/assets/foto-profil.png"
                alt="Foto profil Fatih Taqiyyuddin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }
                }}
              />

              {/* FALLBACK */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-center px-6 bg-[#FFD9C7]">
                <span className="text-5xl mb-4">
                  🕷️
                </span>

                <p className="text-black/50 text-sm font-black">
                  FOTO PROFIL
                </p>

                <p className="text-black/35 text-xs mt-2 leading-relaxed">
                  Foto belum ditemukan.
                  <br />
                  <strong>
                    public/assets/foto-profil.png
                  </strong>
                </p>
              </div>

              {/* PHOTO CORNER */}
              <div className="absolute top-3 right-3 w-7 h-7 bg-[#E62429] border-2 border-black rotate-12" />

              {/* PHOTO LABEL */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 border-2 border-white/40 px-3 py-2">
                <p className="text-[9px] text-white/60 font-bold tracking-widest">
                  STUDENT • DEVELOPER • PROBLEM SOLVER
                </p>
              </div>
            </div>
          </div>

          {/* BIG BACKGROUND NUMBER */}
          <span className="font-comic absolute bottom-2 left-5 text-white/[0.07] text-[110px] md:text-[170px] leading-none select-none pointer-events-none">
            01
          </span>

          {/* DECORATIVE LABEL */}
          <div className="absolute bottom-8 right-8 hidden sm:block px-3 py-2 bg-black border-2 border-[#FFD400] rotate-[-3deg]">
            <p className="text-[#FFD400] text-[9px] font-black tracking-widest">
              FRIENDLY NEIGHBORHOOD
            </p>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <div
          className="hidden md:block absolute top-[76px] bottom-0 left-1/2 w-5 -translate-x-1/2 z-20 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(135deg, #000 0 8px, transparent 8px 16px)",
          }}
        />

        {/* =====================================================
            RIGHT — INTRO
        ===================================================== */}
        <div className="relative w-full md:w-1/2 bg-[#E62429] flex flex-col justify-center px-7 sm:px-10 md:px-14 lg:px-20 py-20 overflow-hidden">

          {/* DECORATIVE SHAPE */}
          <div className="absolute top-12 right-10 w-16 h-16 bg-[#8C1518] border-4 border-black shadow-[6px_6px_0px_#000] rotate-[12deg]" />

          <div className="absolute bottom-12 right-12 w-24 h-24 opacity-30 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(#000 1.5px, transparent 1.5px)",
                backgroundSize: "9px 9px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-xl">

            {/* STATUS */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD400] border-3 border-black text-black text-[10px] font-black tracking-widest shadow-[4px_4px_0px_#000]">
                <span className="w-2 h-2 rounded-full bg-green-600 border border-black" />
                AVAILABLE TO CONNECT
              </span>

              <span className="px-3 py-2 bg-white border-2 border-black text-black text-[10px] font-black tracking-widest rotate-[-2deg]">
                2026
              </span>
            </div>

            {/* MAIN TITLE */}
            <h1
              className="font-comic text-6xl sm:text-7xl lg:text-8xl leading-[0.86] text-white tracking-wide"
              style={{ WebkitTextStroke: "2px black" }}
            >
              FATIH
              <br />
              <span className="text-[#FFD9C7]">
                TAQIYYUDDIN
              </span>
            </h1>

            {/* ROLE */}
            <div className="mt-7 flex items-center gap-3">
              <div className="w-12 h-1 bg-[#FFD400]" />

              <p className="text-white font-black text-sm md:text-base tracking-[0.12em]">
                COMPUTER SCIENCE STUDENT
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-6 bg-black/25 border-l-4 border-[#FFD400] px-5 py-5 max-w-lg">
              <p className="text-white text-sm md:text-base leading-relaxed">
                Mahasiswa Ilmu Komputer Universitas Negeri Medan yang tertarik
                pada pengembangan aplikasi web &amp; mobile, pemecahan masalah,
                dan eksplorasi teknologi.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#FFD400] border-3 border-black text-black text-xs font-black tracking-widest shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                LIHAT PROJECT

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border-3 border-black text-black text-xs font-black tracking-widest shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                TENTANG SAYA
              </a>
            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-3 gap-3 mt-10 max-w-lg">

              <div className="bg-[#8C1518] border-3 border-black p-3 shadow-[3px_3px_0px_#000]">
                <p className="font-comic text-2xl text-[#FFD400]">
                  01
                </p>

                <p className="text-[9px] text-white/70 font-black tracking-wider">
                  STUDENT
                </p>
              </div>

              <div className="bg-[#8C1518] border-3 border-black p-3 shadow-[3px_3px_0px_#000]">
                <p className="font-comic text-2xl text-[#FFD400]">
                  WEB
                </p>

                <p className="text-[9px] text-white/70 font-black tracking-wider">
                  DEVELOPMENT
                </p>
              </div>

              <div className="bg-[#8C1518] border-3 border-black p-3 shadow-[3px_3px_0px_#000]">
                <p className="font-comic text-2xl text-[#FFD400]">
                  ∞
                </p>

                <p className="text-[9px] text-white/70 font-black tracking-wider">
                  CURIOSITY
                </p>
              </div>
            </div>
          </div>

          {/* COMIC NUMBER */}
          <span className="font-comic absolute -bottom-8 -right-2 text-black/[0.08] text-[180px] md:text-[250px] leading-none select-none pointer-events-none">
            01
          </span>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-[#FFD400] transition-colors"
      >
        <span className="text-[9px] font-black tracking-[0.3em]">
          SCROLL
        </span>

        <span className="w-5 h-8 border-2 border-current flex items-start justify-center p-1">
          <span className="w-1 h-2 bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
}