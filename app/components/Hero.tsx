export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[60vh] md:min-h-screen flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16 pt-24 md:pt-0 relative overflow-hidden"
      style={{ background: "#0e0d0c" }}
    >
      {/* Dekorativt bakgrundstext */}
      <span
        className="absolute bottom-[-0.1em] right-[-0.05em] font-[family-name:var(--font-bebas)] leading-none pointer-events-none select-none"
        style={{ fontSize: "55vw", color: "rgba(255,255,255,0.03)" }}
        aria-hidden="true"
      >
        PRIM
      </span>

      <h1
        className="font-[family-name:var(--font-bebas)] leading-[0.88] relative z-10 mb-8 md:mb-12"
        style={{ fontSize: "clamp(5.5rem,30vw,20rem)", color: "#e4dbd0" }}
      >
        PRIM
        <span
          className="block font-[family-name:var(--font-cormorant)] italic font-light tracking-[0.05em] mt-1"
          style={{ fontSize: "0.42em", color: "#9a9088" }}
        >
          Caffe
        </span>
      </h1>

      <div className="flex justify-between items-end relative z-10">
        <p
          className="text-xs tracking-[0.2em] uppercase leading-loose"
          style={{ color: "#9a9088" }}
        >
          Shkup<br />
          Maqedonia e Veriut
        </p>

        <a
          href="#galleri"
          className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-[#e4dbd0]"
          style={{ color: "#9a9088" }}
        >
          <span className="block w-10 h-px" style={{ background: "#c8a96e" }} />
          Shko poshtë
        </a>
      </div>
    </section>
  );
}
