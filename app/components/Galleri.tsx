import Image from "next/image";

const images = [
  { src: "/images/Inne med kunder.jpeg", label: "Kafeja", span: "col-span-7", ratio: "16/10", pos: "center" },
  { src: "/images/Favvo.jpeg", label: "Fasada", span: "col-span-5", ratio: "2/3", pos: "center top" },
  { src: "/images/Inne tom.jpeg", label: "Interieri", span: "col-span-4", ratio: "1/1", pos: "center" },
  { src: "/images/Maskinen.jpeg", label: "Makina", span: "col-span-4", ratio: "1/1", pos: "center" },
  { src: "/images/Soffa.jpeg", label: "Rehatësia", span: "col-span-4", ratio: "1/1", pos: "center" },
];

export default function Galleri() {
  return (
    <section id="galleri" className="pt-12 md:pt-16 pb-12 md:pb-24 px-6 md:px-12" style={{ background: "#f5c842" }}>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-4 items-start mb-4">
          <div className="col-span-7 flex flex-col justify-between" style={{ aspectRatio: "16/10" }}>
            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "1rem" }}>
              <span className="text-xs tracking-[0.25em] uppercase block mb-2" style={{ color: "rgba(0,0,0,0.4)" }}>02 — Fotografi</span>
              <h2 className="font-[family-name:var(--font-bebas)] leading-[0.9] tracking-[0.02em]" style={{ fontSize: "clamp(4rem,10vw,10rem)", color: "#0e0d0c" }}>GALERIA</h2>
            </div>
            <div className="relative overflow-hidden group" style={{ aspectRatio: "16/10" }}>
              <Image src={images[0].src} alt={images[0].label} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: images[0].pos }} sizes="50vw" />
            </div>
          </div>
          <div className="col-span-5 relative overflow-hidden group" style={{ alignSelf: "stretch" }}>
            <Image src={images[1].src} alt={images[1].label} fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: images[1].pos }} sizes="40vw" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {images.slice(2).map((img, i) => (
            <div key={i} className={`${img.span} relative overflow-hidden group`} style={{ aspectRatio: img.ratio }}>
              <Image src={img.src} alt={img.label} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: img.pos }} sizes="33vw" />
            </div>
          ))}
        </div>
      </div>

      {/* MOBIL */}
      <div className="block md:hidden">
        <div className="grid gap-2 items-start mb-2" style={{ gridTemplateColumns: "3fr 2fr" }}>
          <div className="flex flex-col gap-2">
            <div className="pb-3">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase block mb-1" style={{ color: "rgba(0,0,0,0.4)" }}>02 — Fotografi</span>
              <div className="flex items-baseline gap-2">
                <h2 className="font-[family-name:var(--font-bebas)] leading-[0.9]" style={{ fontSize: "clamp(2.5rem,12vw,5rem)", color: "#0e0d0c" }}>GALERIA</h2>
                <span className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "1.1rem", color: "rgba(0,0,0,0.75)" }}>Since 2018</span>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={images[0].src} alt={images[0].label} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ alignSelf: "stretch", minHeight: "10px" }}>
            <Image src={images[1].src} alt={images[1].label} fill className="object-cover" style={{ objectPosition: "center top" }} sizes="50vw" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {images.slice(2).map((img) => (
            <div key={img.label} className="relative overflow-hidden w-full" style={{ aspectRatio: "1/1" }}>
              <Image src={img.src} alt={img.label} fill className="object-cover" style={{ objectPosition: img.pos }} sizes="33vw" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
