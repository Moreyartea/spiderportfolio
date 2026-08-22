const interests = [
  {
    number: "01",
    code: "WATCH",
    title: "MENONTON",
    desc: "Film & series jadi cara favorit untuk relaksasi dan mencari inspirasi cerita.",
    accent: "bg-[#FFD400]",
    rotation: "rotate-[-0.7deg]",
  },
  {
    number: "02",
    code: "MOVE",
    title: "OLAHRAGA",
    desc: "Menjaga tubuh tetap fit supaya pikiran juga tetap jernih saat coding.",
    accent: "bg-[#1A3FA0]",
    rotation: "rotate-[0.7deg]",
  },
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="relative w-full bg-[#E62429] py-20 md:py-24 px-6 md:px-16 overflow-hidden border-t-4 border-black"
    >
      {/* =========================================================
          BACKGROUND HALFTONE
      ========================================================= */}
      <div
        className="absolute bottom-0 left-0 w-44 h-44 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0A0A0A 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div
        className="absolute top-10 right-10 w-28 h-28 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#FFD400 2px, transparent 2px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* =========================================================
          DECORATIVE GEOMETRIC ELEMENTS
      ========================================================= */}
      <div className="absolute top-28 left-[8%] w-10 h-10 border-4 border-black bg-[#FFD400] rotate-[12deg] pointer-events-none" />

      <div className="absolute bottom-20 right-[8%] w-14 h-14 border-4 border-black bg-[#1A3FA0] rotate-[-8deg] pointer-events-none" />

      {/* =========================================================
          BACKGROUND NUMBER
      ========================================================= */}
      <span className="absolute -bottom-12 right-0 font-comic text-[180px] md:text-[260px] leading-none text-black/[0.08] select-none pointer-events-none">
        04
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative max-w-6xl mx-auto">
        {/* SECTION LABEL */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#FFD400] border-2 border-black text-black text-xs font-black tracking-wider shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            PERSONAL FILE // 004
          </span>

          <span className="text-white/55 text-[10px] font-black tracking-[0.2em]">
            OUTSIDE THE CODE
          </span>
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <h2
              className="font-comic text-5xl md:text-7xl text-white leading-none"
              style={{ WebkitTextStroke: "1.5px black" }}
            >
              MINAT &amp; HOBI
            </h2>

            <p className="mt-3 text-white/70 text-sm md:text-base max-w-xl">
              Karena kehidupan tidak selalu tentang layar, kode, dan deadline.
            </p>
          </div>

          {/* STATUS LABEL */}
          <div className="self-start md:self-auto px-4 py-2 bg-white border-3 border-black shadow-[4px_4px_0px_#000] rotate-[2deg]">
            <span className="text-black text-[9px] font-black tracking-[0.16em]">
              PERSONAL / UNCLASSIFIED
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN INTEREST CARDS
        ===================================================== */}
        <div className="grid md:grid-cols-2 gap-7">
          {interests.map((item) => (
            <div
              key={item.title}
              className={`group relative bg-[#FFF4E0] border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 ${item.rotation} transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#000]`}
            >
              {/* TOP FILE TAB */}
              <div
                className={`absolute -top-4 left-6 px-4 py-1.5 border-3 border-black shadow-[3px_3px_0px_#000] ${item.accent}`}
              >
                <span
                  className={`text-[9px] font-black tracking-[0.16em] ${
                    item.code === "MOVE"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  FILE // {item.number}
                </span>
              </div>

              {/* REGISTRATION NUMBER */}
              <span className="absolute top-4 right-5 text-[9px] font-black text-black/25 tracking-widest">
                {item.number} / 02
              </span>

              {/* GEOMETRIC MARKER */}
              <div
                className={`relative w-20 h-20 md:w-24 md:h-24 mt-3 mb-7 border-4 border-black shadow-[5px_5px_0px_#000] flex items-center justify-center ${
                  item.code === "WATCH"
                    ? "bg-[#FFD400]"
                    : "bg-[#1A3FA0]"
                } rotate-[-3deg]`}
              >
                <div className="absolute inset-3 border-2 border-black/30" />

                <span
                  className={`font-comic text-3xl md:text-4xl ${
                    item.code === "WATCH"
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {item.number}
                </span>

                {/* Registration cross */}
                <span className="absolute -top-3 -right-3 w-5 h-5 bg-[#E62429] border-2 border-black flex items-center justify-center text-white text-[10px] font-black">
                  +
                </span>
              </div>

              {/* CODE */}
              <p className="text-[#E62429] text-[10px] font-black tracking-[0.2em] mb-1">
                {item.code}
              </p>

              {/* TITLE */}
              <h3 className="font-comic text-4xl md:text-5xl text-black leading-none mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-md">
                {item.desc}
              </p>

              {/* BOTTOM LINE */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t-3 border-black">
                <span className="text-[8px] font-black tracking-[0.18em] text-black/40">
                  PERSONAL INTEREST
                </span>

                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#E62429] border border-black" />
                  <span className="w-2 h-2 bg-[#FFD400] border border-black" />
                  <span className="w-2 h-2 bg-[#1A3FA0] border border-black" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            PERSONAL RHYTHM PANEL
        ===================================================== */}
        <div className="relative mt-9 bg-[#1A3FA0] border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 rotate-[0.3deg]">
          {/* Decorative corner */}
          <div className="absolute top-5 right-5 w-7 h-7 bg-[#E62429] border-3 border-black rotate-12" />

          <div className="grid md:grid-cols-[0.7fr_1.5fr] gap-7 items-center">
            {/* LEFT */}
            <div>
              <p className="text-[#FFD400] text-[10px] font-black tracking-[0.2em] mb-2">
                PERSONAL RHYTHM
              </p>

              <h3
                className="font-comic text-4xl md:text-5xl text-white leading-none"
                style={{ WebkitTextStroke: "1px black" }}
              >
                RESET.
                <br />
                RECHARGE.
              </h3>
            </div>

            {/* RIGHT */}
            <div className="border-l-4 border-[#FFD400] pl-5">
              <p className="text-white text-sm md:text-base leading-relaxed">
                Menonton memberi ruang untuk menikmati cerita dan melihat
                sesuatu dari sudut pandang berbeda. Olahraga membantu menjaga
                tubuh tetap aktif dan pikiran tetap jernih.
              </p>

              <p className="text-white/55 text-xs leading-relaxed mt-4">
                Dua hal sederhana yang membantu menjaga keseimbangan di antara
                dunia digital dan kehidupan sehari-hari.
              </p>
            </div>
          </div>

          {/* Bottom registration */}
          <div className="flex justify-end mt-6">
            <span className="text-[#FFD400] text-[8px] font-black tracking-[0.18em]">
              OFF SCREEN / ON LIFE
            </span>
          </div>
        </div>

        {/* =====================================================
            QUICK PERSONAL TAGS
        ===================================================== */}
        <div className="flex flex-wrap gap-3 mt-7">
          <div className="px-4 py-2 bg-[#FFD400] border-3 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            <span className="text-black text-[9px] font-black tracking-[0.14em]">
              MOVIES &amp; SERIES
            </span>
          </div>

          <div className="px-4 py-2 bg-white border-3 border-black shadow-[3px_3px_0px_#000] rotate-[1deg]">
            <span className="text-black text-[9px] font-black tracking-[0.14em]">
              SPORTS
            </span>
          </div>

          <div className="px-4 py-2 bg-[#E62429] border-3 border-black shadow-[3px_3px_0px_#000] rotate-[-0.5deg]">
            <span className="text-white text-[9px] font-black tracking-[0.14em]">
              OUTSIDE THE SCREEN
            </span>
          </div>
        </div>

        {/* =====================================================
            BOTTOM COMIC NOTE
        ===================================================== */}
        <div className="flex justify-end mt-7">
          <div className="relative px-4 py-2 bg-black border-3 border-black shadow-[4px_4px_0px_#FFD400] rotate-[1deg]">
            <span className="text-[#FFD400] text-[9px] md:text-[10px] font-black tracking-[0.15em]">
              NEXT FILE → SKILLS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}