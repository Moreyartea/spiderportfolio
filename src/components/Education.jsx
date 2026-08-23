import { Link } from "react-router-dom";
const education = [
  {
    number: "01",
    period: "2013 — 2018",
    level: "PRIMARY SCHOOL",
    institution: "SDIT AL-MUSABBIHIN",
    status: "COMPLETED",
    accent: "yellow",
  },
  {
    number: "02",
    period: "2018 — 2022",
    level: "JUNIOR HIGH SCHOOL",
    institution: "AMANAH TAHFIZ BOARDING SCHOOL",
    status: "COMPLETED",
    accent: "red",
  },
  {
    number: "03",
    period: "2022 — 2025",
    level: "SENIOR HIGH SCHOOL",
    institution: "MAN 2 MODEL MEDAN",
    status: "COMPLETED",
    accent: "yellow",
  },
  {
    number: "04",
    period: "2025 — NOW",
    level: "UNIVERSITY",
    institution: "UNIVERSITAS NEGERI MEDAN",
    program: "ILMU KOMPUTER",
    status: "CURRENT",
    accent: "blue",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full bg-[#FFF4E0] py-20 md:py-24 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      {/* =========================================================
          BACKGROUND HALFTONE
      ========================================================= */}
      <div
        className="absolute top-10 right-10 w-32 h-32 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#1A3FA0 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div
        className="absolute bottom-8 left-8 w-36 h-36 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#E62429 2px, transparent 2px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* =========================================================
          DECORATIVE GEOMETRY
      ========================================================= */}
      <div className="absolute top-28 left-[7%] w-9 h-9 bg-[#E62429] border-4 border-black rotate-[12deg] pointer-events-none" />

      <div className="absolute bottom-24 right-[8%] w-12 h-12 bg-[#FFD400] border-4 border-black rotate-[-10deg] pointer-events-none" />

      {/* =========================================================
          BACKGROUND NUMBER
      ========================================================= */}
      <span className="absolute -bottom-16 right-0 font-comic text-[180px] md:text-[250px] leading-none text-black/[0.05] select-none pointer-events-none">
        03
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative max-w-6xl mx-auto">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#1A3FA0] border-2 border-black text-white text-xs font-black tracking-wider shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            EDUCATION FILE // 003
          </span>

          <span className="text-black/45 text-[10px] font-black tracking-[0.2em]">
            ACADEMIC JOURNEY
          </span>
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <h2 className="font-comic text-5xl md:text-7xl text-black leading-none">
              EDUCATION
            </h2>

            <p className="mt-3 text-black/60 text-sm md:text-base max-w-xl">
              Jejak pendidikan yang membentuk perjalanan saya hingga saat ini.
            </p>
          </div>

          {/* STATUS */}
          <div className="self-start md:self-auto px-4 py-2 bg-[#FFD400] border-3 border-black shadow-[4px_4px_0px_#000] rotate-[2deg]">
            <span className="text-black text-[9px] font-black tracking-[0.16em]">
              ACADEMIC RECORD / OPEN
            </span>
          </div>
        </div>

        {/* =====================================================
            EDUCATION DOSSIER
        ===================================================== */}
        <div className="relative bg-[#1A3FA0] border-4 border-black shadow-[9px_9px_0px_#000] p-5 md:p-8">

          {/* ===================================================
              DOSSIER HEADER
          =================================================== */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 mb-7 border-b-4 border-black">

            <div>
              <p className="text-[#FFD400] text-[10px] font-black tracking-[0.2em]">
                ACADEMIC RECORD
              </p>

              <h3
                className="font-comic text-4xl md:text-5xl text-white leading-none mt-1"
                style={{ WebkitTextStroke: "1px black" }}
              >
                THE ROAD SO FAR
              </h3>
            </div>

            <div className="px-3 py-2 bg-[#E62429] border-3 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
              <span className="text-white text-[9px] font-black tracking-[0.16em]">
                FILE STATUS: ACTIVE
              </span>
            </div>
          </div>

          {/* ===================================================
              TIMELINE
          =================================================== */}
          <div className="relative">

            {/* TIMELINE LINE */}
            <div className="absolute left-[19px] md:left-[23px] top-5 bottom-5 w-[4px] bg-black" />

            <div className="space-y-6">

              {education.map((item, index) => {
                const isCurrent = item.status === "CURRENT";

                return (
                  <div
                    key={item.number}
                    className="relative flex gap-4 md:gap-6"
                  >

                    {/* =================================================
                        TIMELINE NODE
                    ================================================= */}
                    <div className="relative z-10 shrink-0 w-10 md:w-12 flex justify-center">

                      <div
                        className={`
                          w-9
                          h-9
                          md:w-11
                          md:h-11

                          border-4
                          border-black

                          flex
                          items-center
                          justify-center

                          shadow-[3px_3px_0px_#000]

                          ${
                            isCurrent
                              ? "bg-[#FFD400]"
                              : index % 2 === 0
                                ? "bg-[#E62429]"
                                : "bg-white"
                          }
                        `}
                      >
                        <span
                          className={`
                            text-[9px]
                            md:text-[10px]
                            font-black
                            ${
                              isCurrent ||
                              index % 2 !== 0
                                ? "text-black"
                                : "text-white"
                            }
                          `}
                        >
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        EDUCATION CARD
                    ================================================= */}
                    <div
                      className={`
                        flex-1
                        bg-[#FFF4E0]
                        border-4
                        border-black
                        shadow-[6px_6px_0px_#000]
                        p-5
                        md:p-6
                        ${
                          index % 2 === 0
                            ? "rotate-[-0.3deg]"
                            : "rotate-[0.3deg]"
                        }
                      `}
                    >

                      {/* TOP ROW */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">

                        <div>
                          <p className="text-[#E62429] text-[9px] md:text-[10px] font-black tracking-[0.18em]">
                            {item.level}
                          </p>

                          <p className="text-black/45 text-[9px] font-black tracking-[0.15em] mt-1">
                            {item.period}
                          </p>
                        </div>

                        {/* STATUS */}
                        <span
                          className={`
                            px-3
                            py-1.5
                            border-2
                            border-black
                            text-[8px]
                            md:text-[9px]
                            font-black
                            tracking-[0.14em]
                            shadow-[2px_2px_0px_#000]

                            ${
                              isCurrent
                                ? "bg-[#FFD400] text-black"
                                : "bg-white text-black"
                            }
                          `}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* INSTITUTION */}
                      <h4 className="font-comic text-2xl md:text-4xl text-black leading-none">
                        {item.institution}
                      </h4>

                      {/* UNIVERSITY PROGRAM */}
                      {item.program && (
                        <div className="inline-flex items-center gap-2 mt-4 px-3 py-2 bg-[#1A3FA0] border-2 border-black shadow-[3px_3px_0px_#000]">
                          <span className="w-2 h-2 bg-[#FFD400] border border-black" />

                          <span className="text-white text-[9px] md:text-[10px] font-black tracking-[0.14em]">
                            PROGRAM STUDI // {item.program}
                          </span>
                        </div>
                      )}

                      {/* BOTTOM REGISTRATION */}
                      <div className="flex items-center justify-between mt-5 pt-3 border-t-2 border-black">

                        <span className="text-[8px] font-black tracking-[0.16em] text-black/35">
                          EDUCATION RECORD // {item.number}
                        </span>

                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-[#E62429] border border-black" />
                          <span className="w-2 h-2 bg-[#FFD400] border border-black" />
                          <span className="w-2 h-2 bg-[#1A3FA0] border border-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* ===================================================
              FOOTER NOTE
          =================================================== */}
          <div className="mt-8 bg-black border-3 border-black shadow-[4px_4px_0px_#E62429] px-4 py-4">

            <div className="flex items-start gap-3">

              <div className="relative w-6 h-6 shrink-0 mt-0.5">
                <div className="absolute inset-0 bg-[#FFD400] border-2 border-white rotate-45" />
              </div>

              <div>
                <p className="text-[#FFD400] text-[9px] font-black tracking-[0.18em]">
                  CURRENT CHAPTER
                </p>

                <p className="text-white/75 text-xs md:text-sm leading-relaxed mt-1">
                  Saat ini sedang melanjutkan perjalanan akademik sebagai
                  mahasiswa Ilmu Komputer di Universitas Negeri Medan.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
                NEXT FILE NAVIGATION
            ===================================================== */}
            <div className="flex justify-end mt-7">

            <Link
                to="/personal"
                className="
                inline-flex
                items-center

                px-4
                py-2

                bg-[#FFD400]
                border-3
                border-black

                shadow-[4px_4px_0px_#000]

                !text-black
                text-[9px]
                md:text-[10px]
                font-black
                tracking-[0.15em]

                rotate-[1.5deg]

                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-[2px_2px_0px_#000]

                active:translate-x-[4px]
                active:translate-y-[4px]
                active:shadow-none

                transition-all
                duration-150
                "
            >
                NEXT FILE → PERSONAL STUFF
            </Link>

            </div>

      </div>
    </section>
  );
}