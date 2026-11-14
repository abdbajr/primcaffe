"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Lokacioni() {
  return (
    <section
      id="lokacioni"
      className="min-h-screen grid grid-cols-2"
      style={{ background: "#1e1a16" }}
    >
      {/* Vänster */}
      <div
        className="flex flex-col justify-between px-12 py-32"
        style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "#c8a96e" }}>
            03 — Lokacioni
          </p>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-[0.9]"
            style={{ fontSize: "clamp(4rem,8vw,9rem)", color: "#e4dbd0" }}
          >
            LOKACIONI
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-3" style={{ color: "#c8a96e" }}>
              Adresa
            </p>
            <p className="text-base leading-loose" style={{ color: "#9a9088" }}>
              <strong style={{ color: "#e4dbd0", fontWeight: 400 }}>Xhon Kenedi 9A-1/001</strong>
              <br />
              Shkup, Maqedonia e Veriut
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-3" style={{ color: "#c8a96e" }}>
              Orari i punës
            </p>
            <div
              className="grid gap-y-0 gap-x-8 text-sm"
              style={{ gridTemplateColumns: "auto 1fr", lineHeight: 2.1, color: "#9a9088" }}
            >
              <span style={{ color: "#e4dbd0" }}>Hën – Pre</span><span>07:00 – 21:00</span>
              <span style={{ color: "#e4dbd0" }}>E shtunë</span><span>08:00 – 22:00</span>
              <span style={{ color: "#e4dbd0" }}>E diel</span><span>09:00 – 20:00</span>
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-3" style={{ color: "#c8a96e" }}>
              Kontakti
            </p>
            <p className="text-base" style={{ color: "#9a9088" }}>+389 71 901 999</p>
          </div>
        </div>
      </div>

      {/* Höger — karta */}
      <div className="flex flex-col">
        <Map />
      </div>
    </section>
  );
}
