import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Galleri from "./components/Galleri";
import Lokacioni from "./components/Lokacioni";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Galleri />
        <Lokacioni />
      </main>
      <footer
        className="flex justify-between items-center px-12 py-8 text-xs tracking-[0.15em] uppercase"
        style={{ background: "#0e0d0c", borderTop: "1px solid rgba(255,255,255,0.06)", color: "#9a9088" }}
      >
        <span>© 2025 Prim Caffe</span>
        <span>Shkup · Maqedonia e Veriut</span>
      </footer>
    </>
  );
}
