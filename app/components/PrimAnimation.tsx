"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface Props {
  onDone: () => void;
  targetRef: RefObject<HTMLSpanElement | null>;
}

export default function PrimAnimation({ onDone, targetRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let animId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const run = () => {
      // Hämta exakt position från DOM-elementet
      const el = targetRef.current;
      if (!el) { timeoutId = setTimeout(run, 50); return; }

      const rect = el.getBoundingClientRect();
      const sectionRect = canvas.getBoundingClientRect();

      // Relativ position inom canvas
      const elX = rect.left - sectionRect.left;
      const elY = rect.top - sectionRect.top;
      const elW = rect.width;
      const elH = rect.height;

      // Rita PRIM exakt där elementet är
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const offCtx = off.getContext("2d")!;

      const computedStyle = window.getComputedStyle(el);
      const fontSize = parseFloat(computedStyle.fontSize);
      const lineHeight = parseFloat(computedStyle.lineHeight) || fontSize * 0.88;

      offCtx.fillStyle = "#e4dbd0";
      offCtx.font = `400 ${fontSize}px 'Bebas Neue', sans-serif`;
      offCtx.textAlign = "left";
      offCtx.textBaseline = "alphabetic";
      offCtx.fillText("PRIM", elX, elY + lineHeight * 0.82);

      const imageData = offCtx.getImageData(0, 0, W, H);
      const data = imageData.data;

      const targets: { x: number; y: number }[] = [];
      const step = 3;
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          const i = (y * W + x) * 4;
          if (data[i + 3] > 128) targets.push({ x, y });
        }
      }

      if (targets.length === 0) {
        timeoutId = setTimeout(run, 100);
        return;
      }

      type Particle = {
        x: number; y: number;
        tx: number; ty: number;
        size: number; speed: number;
        alpha: number; settled: boolean;
      };

      const particles: Particle[] = targets.map((t) => ({
        x: Math.random() < 0.5
          ? -Math.random() * W * 0.5
          : W + Math.random() * W * 0.5,
        y: elY + elH * 0.5 + (Math.random() - 0.5) * elH * 2,
        tx: t.x,
        ty: t.y,
        size: Math.random() * 1.5 + 0.3,
        speed: 0.02 + Math.random() * 0.025,
        alpha: Math.random() * 0.3 + 0.15,
        settled: false,
      }));

      let fadeOutStarted = false;

      function animate() {
        ctx!.clearRect(0, 0, W, H);
        let settledCount = 0;

        for (const p of particles) {
          const dx = p.tx - p.x;
          const dy = p.ty - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 1.2) {
            const boost = dist < 50 ? 2.5 : 1;
            p.x += dx * p.speed * boost;
            p.y += dy * p.speed * boost;
          } else {
            p.x = p.tx;
            p.y = p.ty;
            p.settled = true;
          }

          if (p.settled) settledCount++;

          const progress = 1 - Math.min(dist / (W * 0.5), 1);
          const size = p.size + progress * 2.5;
          const alpha = Math.min(p.alpha + progress * 0.8, 1);

          ctx!.beginPath();
          ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(228, 219, 208, ${alpha})`;
          ctx!.fill();
        }

        const pct = settledCount / particles.length;

        if (pct >= 0.98 && !fadeOutStarted) {
          fadeOutStarted = true;
          onDone();
          let op = 1;
          const fade = setInterval(() => {
            op -= 0.04;
            setOpacity(Math.max(op, 0));
            if (op <= 0) clearInterval(fade);
          }, 16);
          return;
        }

        animId = requestAnimationFrame(animate);
      }

      animate();
      setTimeout(() => onDone(), 5000);
    };

    document.fonts.ready.then(() => {
      timeoutId = setTimeout(run, 150);
    });

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity, zIndex: 20 }}
    />
  );
}
