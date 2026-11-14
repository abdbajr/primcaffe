"use client";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [onYellow, setOnYellow] = useState(false);
  const galleriRef = useRef<Element | null>(null);

  useEffect(() => {
    galleriRef.current = document.getElementById("galleri");

    function update() {
      if (!galleriRef.current) return;
      const rect = galleriRef.current.getBoundingClientRect();
      setOnYellow(rect.top < 80 && rect.bottom > 0);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  function handleLink(id: string) {
    setOpen(false);
    document.body.style.overflow = "";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleMenu() {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  const textColor = onYellow ? "#0e0d0c" : "#e4dbd0";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-12 py-8">
        <button
          onClick={() => handleLink("home")}
          className="font-[family-name:var(--font-bebas)] text-base tracking-[0.3em] transition-colors duration-300"
          style={{ color: textColor }}
        >
          Prim Caffe
        </button>

        <button
          onClick={toggleMenu}
          className="flex flex-col gap-[6px] p-1 z-[300] cursor-pointer"
          aria-label="Meny"
        >
          <span
            className="block w-[30px] h-[1.5px] transition-all duration-400 origin-center"
            style={{
              background: textColor,
              transform: open ? "translateY(7.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-[30px] h-[1.5px] transition-all duration-300 origin-center"
            style={{
              background: textColor,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-[30px] h-[1.5px] transition-all duration-400 origin-center"
            style={{
              background: textColor,
              transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[150] flex flex-col justify-center px-12 transition-all duration-500"
        style={{
          background: "#0e0d0c",
          clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          pointerEvents: open ? "all" : "none",
        }}
      >
        <ul className="list-none">
          {[
            { label: "Kryefaqja", id: "home", num: "01" },
            { label: "Galeria", id: "galleri", num: "02" },
            { label: "Lokacioni", id: "lokacioni", num: "03" },
          ].map((item, i) => (
            <li
              key={item.id}
              className="overflow-hidden border-t border-white/[0.08] last:border-b last:border-white/[0.08]"
            >
              <button
                onClick={() => handleLink(item.id)}
                className="w-full flex items-center justify-between py-3 font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] tracking-[0.04em] leading-none transition-colors duration-200 hover:text-[#c8a96e]"
                style={{
                  color: "#e4dbd0",
                  transform: open ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.5s cubic-bezier(0.76,0,0.24,1) ${0.08 + i * 0.06}s, color 0.2s`,
                }}
              >
                {item.label}
                <span className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.2em] text-[#9a9088] self-start mt-2">
                  {item.num}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="absolute bottom-12 left-12 text-xs tracking-[0.2em] uppercase text-[#9a9088]">
          Prim Caffe · Specialty Coffee · Shkup
        </p>
      </div>
    </>
  );
}
