export default function Motivation() {
  return (
    <section className="relative w-full bg-[#1A3FA0] py-20 px-6 md:px-16 overflow-hidden border-t-4 border-black">
      <svg
        className="absolute -top-1/4 -right-1/4 w-[70%] h-[70%] opacity-[0.1] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36 * Math.PI) / 180;
          const x2 = 200 + Math.cos(angle) * 300;
          const y2 = 200 + Math.sin(angle) * 300;
          return <line key={i} x1="200" y1="200" x2={x2} y2={y2} stroke="white" strokeWidth="1.5" />;
        })}
      </svg>

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-[#FFD400] border-2 border-black text-black text-xs font-bold tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          TUJUAN
        </span>

        <h2
          className="font-comic text-4xl md:text-6xl text-white mb-8"
          style={{ WebkitTextStroke: "1.5px black" }}
        >
          MOTIVASI SAYA
        </h2>

        <div className="bg-[#FFF4E0] border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-10 inline-block text-left rotate-[-0.3deg]">
          <p className="text-black/40 text-xs font-bold tracking-wider mb-3">
            [ HUBUNGAN ANTARA CITA-CITA DAN KEPRIBADIAN ]
          </p>
          <p className="text-base md:text-lg leading-relaxed text-black">
            Sejak kecil saya senang mengamati pola dan memecahkan teka-teki. 
            Alasan itulah yang menjadikan cita-cita saya adalah menjadi detektif. 
            Ilmu Komputer ternyata membawa semangat yang sama: setiap baris kode 
            adalah petunjuk, setiap bug adalah misteri yang harus dipecahkan.
            Ke depan, saya ingin terus mengasah kemampuan ini untuk membangun
            solusi digital yang benar-benar membantu menyelesaikan masalah
            orang lain, bukan sekadar aplikasi biasa.
          </p>
        </div>
      </div>
    </section>
  );
}
