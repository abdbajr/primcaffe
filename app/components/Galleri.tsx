import Image from "next/image";

const images = [
  { src: "/images/Inne med kunder.jpeg", label: "Kafeja", span: "col-span-7" },
  { src: "/images/Favvo.jpeg", label: "Fasada", span: "col-span-5" },
  { src: "/images/Inne tom.jpeg", label: "Interieri", span: "col-span-4" },
  { src: "/images/Maskinen.jpeg", label: "Makina", span: "col-span-4" },
  { src: "/images/Soffa.jpeg", label: "Rehatësia", span: "col-span-4" },
];

export default function Galleri() {
  return (
    <section id="galleri" className="py-12 md:py-24 px-6 md:px-12" style={{ background: "#f5c842" }}>
      <div
        className="mb-8 md:mb-12 pb-4 md:pb-6"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}
      >
        <span className="text-xs tracking-[0.25em] uppercase block mb-2" style={{ color: "rgba(0,0,0,0.4)" }}>
          02 — Fotografi
        </span>
        <h2
          className="font-[family-name:var(--font-bebas)] leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(4rem,10vw,10rem)", color: "#0e0d0c" }}
        >
          GALERIA
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.span} relative overflow-hidden group`}
            style={{ aspectRatio: i === 0 ? "16/10" : i === 1 ? "4/5" : "1/1" }}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.2em] uppercase z-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
