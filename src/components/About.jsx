export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFF4E0] py-20 md:py-24 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      {/* =========================================================
          BACKGROUND HALFTONE
      ========================================================= */}
      <div
        className="absolute top-8 right-8 w-32 h-32 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0A0A0A 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div
        className="absolute bottom-10 left-10 w-24 h-24 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#E62429 2px, transparent 2px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* =========================================================
          BACKGROUND NUMBER
      ========================================================= */}
      <span className="absolute -bottom-12 right-2 font-comic text-[180px] md:text-[260px] leading-none text-black/[0.05] select-none pointer-events-none">
        03
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative max-w-6xl mx-auto">
        {/* SECTION LABEL */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#1A3FA0] border-2 border-black text-white text-xs font-black tracking-wider shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            CHARACTER FILE // 001
          </span>

          <span className="text-black/45 text-[10px] font-black tracking-[0.2em]">
            THE PERSON BEHIND THE CODE
          </span>
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <h2 className="font-comic text-5xl md:text-7xl text-black leading-none">
              TENTANG SAYA
            </h2>

            <p className="mt-3 text-black/60 text-sm md:text-base max-w-xl">
              Bukan hanya tentang apa yang saya pelajari, tetapi juga tentang
              bagaimana saya berpikir, bekerja, dan melihat sesuatu.
            </p>
          </div>

          {/* COMIC LABEL */}
          <div className="self-start md:self-auto px-4 py-2 bg-[#FFD400] border-3 border-black shadow-[4px_4px_0px_#000] rotate-[2deg]">
            <span className="text-black text-[9px] font-black tracking-[0.16em]">
              FILE STATUS: OPEN
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN CHARACTER PANEL
        ===================================================== */}
        <div className="grid lg:grid-cols-[0.8fr_1.5fr] gap-6 items-stretch">
          {/* ===================================================
              LEFT — CHARACTER TRAITS
          =================================================== */}
          <div className="relative bg-[#E62429] border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-7 rotate-[-0.5deg] overflow-hidden">
            {/* Decorative geometry */}
            <div className="absolute top-5 right-5 w-8 h-8 bg-[#FFD400] border-3 border-black rotate-12" />

            <div className="absolute bottom-5 right-5 flex gap-1 opacity-40">
              <span className="w-2 h-2 bg-black" />
              <span className="w-2 h-2 border-2 border-black" />
              <span className="w-2 h-2 bg-black" />
            </div>

            <p className="text-[#FFD400] text-[10px] font-black tracking-[0.2em] mb-3">
              CHARACTER PROFILE
            </p>

            <h3
              className="font-comic text-4xl md:text-5xl text-white leading-none mb-7"
              style={{ WebkitTextStroke: "1px black" }}
            >
              HOW I
              <br />
              THINK
            </h3>

            {/* TRAIT 01 */}
            <div className="border-t-2 border-black/30 pt-4 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFD400] border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-black text-black">
                    01
                  </span>
                </div>

                <div>
                  <p className="text-white text-xs font-black tracking-widest">
                    CURIOUS
                  </p>

                  <p className="text-white/70 text-xs mt-1 leading-relaxed">
                    Suka mencari tahu bagaimana dan mengapa sesuatu bekerja.
                  </p>
                </div>
              </div>
            </div>

            {/* TRAIT 02 */}
            <div className="border-t-2 border-black/30 pt-4 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFD400] border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-black text-black">
                    02
                  </span>
                </div>

                <div>
                  <p className="text-white text-xs font-black tracking-widest">
                    PROBLEM SOLVER
                  </p>

                  <p className="text-white/70 text-xs mt-1 leading-relaxed">
                    Error bukan akhir, tetapi petunjuk untuk menemukan solusi.
                  </p>
                </div>
              </div>
            </div>

            {/* TRAIT 03 */}
            <div className="border-t-2 border-black/30 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFD400] border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-black text-black">
                    03
                  </span>
                </div>

                <div>
                  <p className="text-white text-xs font-black tracking-widest">
                    DETAIL MINDED
                  </p>

                  <p className="text-white/70 text-xs mt-1 leading-relaxed">
                    Senang memperhatikan detail kecil yang membuat sesuatu
                    terasa lebih tepat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT — PERSONAL STORY
          =================================================== */}
          <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-9 rotate-[0.3deg]">
            {/* Top label */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1.5 bg-[#FFD400] border-2 border-black text-[9px] font-black tracking-[0.16em] shadow-[2px_2px_0px_#000]">
                FATIH, IN A NUTSHELL
              </span>

              <span className="text-[9px] font-black text-black/25 tracking-widest">
                03 / 05
              </span>
            </div>

            {/* STORY */}
            <div className="relative">
              {/* Decorative quote mark */}
              <span className="absolute -top-5 -left-2 font-comic text-7xl text-[#E62429]/15 select-none pointer-events-none">
                “
              </span>

              <p className="relative text-base md:text-lg leading-relaxed text-black">
                Halo, saya Fatih — mahasiswa Ilmu Komputer yang percaya bahwa
                belajar coding itu mirip menjadi detektif: mengumpulkan
                petunjuk dari error message, menyusun logika, sampai akhirnya
                menemukan "pelaku" di balik bug yang bikin pusing.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black mt-5">
                Rasa penasaran itu yang mendorong saya terus membangun
                proyek-proyek kecil, dari aplikasi produktivitas pribadi
                sampai membantu menyelesaikan masalah nyata orang di sekitar
                saya.
              </p>

              <div className="my-7 h-[3px] bg-black" />

              <p className="text-base md:text-lg leading-relaxed text-black">
                Di luar layar, saya suka menonton dan berolahraga untuk
                menjaga keseimbangan — karena menurut saya ide-ide terbaik
                justru sering muncul saat sedang tidak di depan komputer.
              </p>
            </div>

            {/* Bottom stamp */}
            <div className="flex justify-end mt-7">
              <div className="px-3 py-2 border-2 border-[#E62429] text-[#E62429] rotate-[-2deg]">
                <span className="text-[9px] font-black tracking-[0.15em]">
                  STILL LEARNING / STILL BUILDING
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            THREE CORE PRINCIPLES
        ===================================================== */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {/* THINK */}
          <div className="relative bg-[#FFD400] border-4 border-black shadow-[6px_6px_0px_#000] p-5 rotate-[-0.7deg]">
            <span className="absolute top-3 right-4 text-[9px] font-black text-black/25">
              01
            </span>

            <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center mb-4">
              <span className="font-black text-xs">T</span>
            </div>

            <p className="text-[10px] font-black tracking-[0.18em] text-black/60 mb-1">
              APPROACH
            </p>

            <h3 className="font-comic text-3xl text-black">
              THINK
            </h3>

            <p className="text-xs md:text-sm text-black/70 leading-relaxed mt-2">
              Memahami masalah sebelum terburu-buru mencari jawabannya.
            </p>
          </div>

          {/* BUILD */}
          <div className="relative bg-[#1A3FA0] border-4 border-black shadow-[6px_6px_0px_#000] p-5 rotate-[0.5deg]">
            <span className="absolute top-3 right-4 text-[9px] font-black text-white/30">
              02
            </span>

            <div className="w-10 h-10 bg-[#E62429] border-3 border-black flex items-center justify-center mb-4">
              <span className="font-black text-xs text-white">B</span>
            </div>

            <p className="text-[10px] font-black tracking-[0.18em] text-white/60 mb-1">
              APPROACH
            </p>

            <h3 className="font-comic text-3xl text-white">
              BUILD
            </h3>

            <p className="text-xs md:text-sm text-white/70 leading-relaxed mt-2">
              Mengubah ide menjadi sesuatu yang benar-benar bisa dicoba dan
              digunakan.
            </p>
          </div>

          {/* BALANCE */}
          <div className="relative bg-[#E62429] border-4 border-black shadow-[6px_6px_0px_#000] p-5 rotate-[-0.3deg]">
            <span className="absolute top-3 right-4 text-[9px] font-black text-white/30">
              03
            </span>

            <div className="w-10 h-10 bg-[#FFD400] border-3 border-black flex items-center justify-center mb-4">
              <span className="font-black text-xs text-black">B</span>
            </div>

            <p className="text-[10px] font-black tracking-[0.18em] text-white/60 mb-1">
              OUTSIDE THE SCREEN
            </p>

            <h3 className="font-comic text-3xl text-white">
              BALANCE
            </h3>

            <p className="text-xs md:text-sm text-white/75 leading-relaxed mt-2">
              Menjaga ruang untuk hiburan, olahraga, dan kehidupan di luar
              komputer.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM COMIC NOTE
        ===================================================== */}
        <div className="flex justify-end mt-7">
          <div className="relative px-4 py-2 bg-black border-3 border-black shadow-[4px_4px_0px_#E62429] rotate-[1deg]">
            <span className="text-[#FFD400] text-[9px] md:text-[10px] font-black tracking-[0.15em]">
              NEXT FILE → MY IDENTITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}