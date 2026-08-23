import { Link } from "react-router-dom";

const data = [
  {
    label: "Nama Lengkap",
    value: "Fatih Taqiyyuddin",
  },
  {
    label: "Universitas",
    value: "Universitas Negeri Medan",
  },
  {
    label: "Jurusan",
    value: "Matematika",
  },
  {
    label: "Program Studi",
    value: "Ilmu Komputer",
  },
  {
    label: "Cita-cita",
    value: "Detektif",
  },
];

export default function DataDiri() {
  return (
    <section
      id="data-diri"
      className="relative w-full bg-[#1A3FA0] py-20 md:py-24 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      {/* =========================================================
          DECORATIVE SPIDER WEB
      ========================================================= */}
      <svg
        className="absolute -bottom-1/4 -left-1/4 w-[80%] h-[80%] opacity-[0.1] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36 * Math.PI) / 180;
          const x2 = 200 + Math.cos(angle) * 300;
          const y2 = 200 + Math.sin(angle) * 300;

          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="1.5"
            />
          );
        })}

        {[50, 100, 150, 200, 250].map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={r}
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* =========================================================
          HALFTONE DECORATION
      ========================================================= */}
      <div
        className="absolute top-10 right-10 w-32 h-32 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* =========================================================
          BACKGROUND NUMBER
      ========================================================= */}
      <span className="absolute -bottom-10 right-4 font-comic text-[180px] md:text-[250px] text-black/[0.08] leading-none select-none pointer-events-none">
        02
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative max-w-6xl mx-auto">

        {/* SECTION LABEL */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#FFD400] border-2 border-black text-black text-xs font-black tracking-wider shadow-[3px_3px_0px_#000]">
            IDENTITY FILE // 002
          </span>

          <span className="text-white/60 text-[10px] font-bold tracking-[0.2em]">
            CLASSIFIED PROFILE
          </span>
        </div>

        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <h2
              className="font-comic text-5xl md:text-7xl text-white leading-none"
              style={{ WebkitTextStroke: "1.5px black" }}
            >
              SPIDER IDENTITY
            </h2>

            <p className="mt-3 text-white/70 text-sm md:text-base max-w-xl">
              Sedikit informasi tentang manusia di balik layar dan kode.
            </p>
          </div>

          <div className="hidden md:block px-4 py-2 bg-[#E62429] border-3 border-black shadow-[4px_4px_0px_#000] rotate-[-2deg]">
            <span className="text-white text-[10px] font-black tracking-widest">
              FILE STATUS: OPEN
            </span>
          </div>
        </div>

        {/* =====================================================
            IDENTITY CARD
        ===================================================== */}
        <div className="relative bg-[#FFF4E0] border-4 border-black shadow-[10px_10px_0px_#000] rotate-[-0.3deg] overflow-hidden">

          {/* CARD TOP BAR */}
          <div className="flex items-center justify-between px-5 md:px-7 py-3 bg-[#E62429] border-b-4 border-black">
            <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em]">
              PERSONAL IDENTIFICATION
            </span>

            <span className="text-[#FFD400] text-[10px] md:text-xs font-black tracking-widest">
              001 / 005
            </span>
          </div>

          {/* CARD BODY */}
          <div className="grid md:grid-cols-[240px_1fr] gap-0">

            {/* =================================================
                PROFILE PANEL
            ================================================= */}
            <div className="relative bg-[#FFD9C7] border-b-4 md:border-b-0 md:border-r-4 border-black p-6 md:p-8 flex flex-col items-center justify-center min-h-[280px]">

              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-5 h-5 bg-[#FFD400] border-2 border-black rotate-[-8deg]" />

              <div className="absolute top-5 right-5 w-5 h-5 bg-[#E62429] border-2 border-black rotate-[12deg]" />

              {/* Avatar placeholder */}
              <div className="relative w-36 h-40 md:w-40 md:h-44 bg-white border-4 border-black shadow-[6px_6px_0px_#000] rotate-[1deg] flex items-center justify-center overflow-hidden">

                <img
                  src="/assets/foto-profil.png"
                  alt="Foto profil Fatih Taqiyyuddin"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";

                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = "flex";
                    }
                  }}
                />

                <div className="hidden absolute inset-0 flex-col items-center justify-center text-center">
                  <span className="text-4xl mb-2">🕷️</span>

                  <span className="text-[9px] font-black text-black/50 tracking-wider">
                    PHOTO
                  </span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <p className="font-comic text-2xl text-black">
                  FATIH TAQIYYUDDIN
                </p>

                <p className="text-[9px] font-black tracking-[0.2em] text-black/50 mt-1">
                  STUDENT / DEVELOPER
                </p>
              </div>
            </div>

            {/* =================================================
                INFORMATION PANEL
            ================================================= */}
            <div className="p-5 md:p-8">

              <div className="grid sm:grid-cols-2 gap-4">

                {data.map((item, i) => (
                  <div
                    key={item.label}
                    className={`group relative bg-white border-3 border-black p-5 md:p-6 shadow-[5px_5px_0px_#000] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] ${
                      i % 2 === 0
                        ? "rotate-[-0.4deg]"
                        : "rotate-[0.4deg]"
                    }`}
                  >

                    {/* =================================================
                        DOSSIER LABEL
                    ================================================= */}
                    <div
                      className={`absolute -top-3 left-4 px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] ${
                        i % 2 === 0
                          ? "bg-[#FFD400] rotate-[-1.5deg]"
                          : "bg-[#E62429] rotate-[1.5deg]"
                      }`}
                    >
                      <span
                        className={`text-[8px] md:text-[9px] font-black tracking-[0.15em] ${
                          i % 2 === 0
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        FILE // {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* =================================================
                        COMIC REGISTRATION MARK
                    ================================================= */}
                    <span className="absolute top-3 right-4 text-[8px] font-black text-black/25 tracking-wider">
                      {String(i + 1).padStart(2, "0")} / 05
                    </span>

                    <div className="pt-4">

                      {/* LABEL */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-[#E62429] border border-black" />

                        <p className="text-[9px] md:text-[10px] font-black tracking-[0.14em] text-[#E62429]">
                          {item.label.toUpperCase()}
                        </p>
                      </div>

                      {/* VALUE */}
                      <p className="text-base md:text-lg font-bold text-black leading-tight break-words pr-5">
                        {item.value}
                      </p>
                    </div>

                    {/* DECORATIVE REGISTRATION MARK */}
                    <div className="absolute bottom-3 right-4 flex items-center gap-1 opacity-30">
                      <span className="w-1.5 h-1.5 bg-black" />

                      <span className="w-1.5 h-1.5 border border-black" />

                      <span className="text-[7px] font-black tracking-wider">
                        ID
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-5 flex items-start gap-3 bg-[#000] px-4 py-3 border-3 border-black shadow-[4px_4px_0px_#E62429]">

                <div className="relative w-5 h-5 shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-[#FFD400] border-2 border-white rotate-45" />
                </div>

                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  Setiap orang punya cerita. Ini adalah sedikit bagian dari
                  cerita saya yang sedang terus berkembang.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SMALL COMIC LABEL
        ===================================================== */}
        <div className="flex justify-end mt-7">

        </div>
      </div>
    </section>
  );
}