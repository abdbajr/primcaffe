import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Galleri from "./components/Galleri";
import Lokacioni from "./components/Lokacioni";
import OmOss from "./components/OmOss";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Galleri />
        <Lokacioni />
        <OmOss />
      </main>
      <footer
        className="px-6 md:px-12 py-10"
        style={{ background: "#0e0d0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-[0.15em] uppercase" style={{ color: "#9a9088" }}>
          <span className="font-[family-name:var(--font-bebas)] text-base tracking-[0.1em]" style={{ color: "#e4dbd0" }}>Prim Caffe</span>
          <span>Xhon Kenedi 9A-1/001 · Shkup</span>
          <span>+389 71 901 999</span>
          <span>06:30 – 00:00</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/prim.caffe" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#9a9088" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1HmHfT2AyM/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#9a9088" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
