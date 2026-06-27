import { useState, useEffect, useRef } from "react";

function CinematicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.35 + 0.05,
    }));

    const grains = Array.from({ length: 1800 }, () => ({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 1.2 + 0.4,
      a: Math.random() * 0.07 + 0.02,
    }));

    const streaks = Array.from({ length: 5 }, (_, i) => ({
      y: 0.22 + i * 0.15,
      speed: 0.0006 + i * 0.0002,
      phase: i * 1.6,
      width: 0.6 + i * 0.1,
    }));

    const render = (ts) => {
      const t = ts / 1000;
      const W = canvas.width;
      const H = canvas.height;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);

      // Silk / smoke blobs
      for (let i = 0; i < 6; i++) {
        const cx = W * (0.15 + i * 0.14 + Math.sin(t * 0.07 + i) * 0.07);
        const cy = H * (0.3 + Math.cos(t * 0.05 + i * 0.9) * 0.22);
        const rx = W * (0.22 + Math.sin(t * 0.04 + i) * 0.09);
        const ry = H * (0.16 + Math.cos(t * 0.06 + i) * 0.05);
        const a = 0.018 + i * 0.005;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
        g.addColorStop(0, `rgba(255,255,255,${a})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, t * 0.015 + i, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        const alpha = p.a * (0.5 + Math.sin(t * 0.4 + p.x * 10) * 0.5);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Anamorphic streaks
      streaks.forEach((s) => {
        const cx = ((t * s.speed + s.phase) % 1.6) - 0.3;
        const sy = s.y * H;
        const len = W * s.width;
        const sg = ctx.createLinearGradient((cx - 0.15) * W, sy, (cx + 0.35) * W, sy);
        sg.addColorStop(0, "transparent");
        sg.addColorStop(0.4, "rgba(255,255,255,0.04)");
        sg.addColorStop(0.6, "rgba(255,255,255,0.055)");
        sg.addColorStop(1, "transparent");
        ctx.fillStyle = sg;
        ctx.fillRect((cx - 0.15) * W, sy - 0.5, len, 1);
      });

      // Film grain
      grains.forEach((g) => {
        ctx.fillStyle = `rgba(255,255,255,${g.a * (0.5 + Math.random() * 0.9)})`;
        ctx.fillRect(
          ((g.x + Math.random() * 0.001) % 1) * W,
          ((g.y + Math.random() * 0.001) % 1) * H,
          g.s, g.s
        );
      });

      // Central glow
      const cg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.38);
      cg.addColorStop(0, "rgba(255,255,255,0.045)");
      cg.addColorStop(1, "transparent");
      ctx.fillStyle = cg;
      ctx.fillRect(0, 0, W, H);

      // Vignette
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.12, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, "rgba(0,0,0,0.88)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}

export default function VialcHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const letters = ["V", "I", "A", "L", "C"];

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes letterUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 220px; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .letter {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(80px, 14vw, 140px);
          color: #fff;
          line-height: 1;
          opacity: 0;
          display: inline-block;
          text-shadow: 0 0 80px rgba(255,255,255,0.15);
        }
        .letter.go {
          animation: letterUp 0.9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .tagline {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.32);
          text-transform: uppercase;
          opacity: 0;
        }
        .tagline.go {
          animation: fadeIn 1.2s ease forwards;
        }

        .deco-line {
          height: 0.5px;
          background: rgba(255,255,255,0.18);
          width: 0;
        }
        .deco-line.go {
          animation: lineGrow 1s cubic-bezier(.16,1,.3,1) forwards;
        }

        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-link:hover { color: rgba(255,255,255,0.85); }

        .cta-primary {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .cta-primary:hover { background: rgba(255,255,255,0.88); }

        .cta-secondary {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          background: transparent;
          border: 0.5px solid rgba(255,255,255,0.18);
          padding: 14px 32px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .cta-secondary:hover { border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.75); }

        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 42px;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 6px;
        }
        .dot-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: #fff;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .side-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          writing-mode: vertical-rl;
        }
      `}</style>

      <CinematicBackground />

      {/* NAV */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "32px 48px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.1s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0" y="0" width="10" height="10" fill="white" />
            <rect x="12" y="0" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="0" y="12" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="12" y="12" width="10" height="10" fill="white" />
          </svg>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#fff", fontSize: 16, letterSpacing: "0.1em" }}>VIALC</span>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          {["Trabajo", "Servicios", "Acerca", "Contacto"].map(l => (
            <a key={l} href={l === "Acerca" ? "/?page=about" : l === "Servicios" ? "/?page=services" : "#"} className="nav-link">{l}</a>
          ))}
        </div>
        <button className="cta-primary" onClick={() => window.location.href='/?page=brief'}>Comenzar →</button>
      </nav>

      {/* SIDE LABELS */}
      <div style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ width: "0.5px", height: 48, background: "rgba(255,255,255,0.15)" }} />
        <span className="side-label" style={{ transform: "rotate(180deg)" }}>GDL 2026 — MX</span>
      </div>
      <div style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <span className="side-label">Scroll</span>
        <div style={{ width: "0.5px", height: 48, background: "rgba(255,255,255,0.15)" }} />
      </div>

      {/* MAIN CONTENT */}
      <main style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        gap: 0,
      }}>
        {/* Badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          border: "0.5px solid rgba(255,255,255,0.14)",
          padding: "8px 20px", marginBottom: 40,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.3s",
          backdropFilter: "blur(4px)",
        }}>
          <div className="dot-pulse" />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
            Agencia de Marketing Premium
          </span>
        </div>

        {/* Deco line top */}
        <div className={`deco-line ${visible ? "go" : ""}`} style={{ animationDelay: "0.4s", marginBottom: 32 }} />

        {/* LETTERS */}
        <div style={{ display: "flex", gap: "clamp(4px, 1vw, 12px)", marginBottom: 32 }}>
          {letters.map((l, i) => (
            <span
              key={l}
              className={`letter ${visible ? "go" : ""}`}
              style={{ animationDelay: `${0.5 + i * 0.13}s` }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* Deco line bottom */}
        <div className={`deco-line ${visible ? "go" : ""}`} style={{ animationDelay: "1.3s", marginBottom: 24 }} />

        {/* Tagline */}
        <p className={`tagline ${visible ? "go" : ""}`} style={{ animationDelay: "1.5s", marginBottom: 48 }}>
          Marketing de Alto Nivel
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease 1.8s",
        }}>
          <button className="cta-primary">Ver Nuestro Trabajo →</button>
          <button className="cta-secondary">Reservar una cita</button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 64, marginTop: 72, flexWrap: "wrap", justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 2.2s",
        }}>
          {[
           { num: "Estrategia", label: "" },
{ num: "Contenido", label: "" },
{ num: "Resultados", label: "" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div style={{
        position: "relative", zIndex: 10,
        textAlign: "center", padding: "24px",
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.35em",
        color: "rgba(255,255,255,0.12)",
        textTransform: "uppercase",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 2.5s",
      }}>
        Guadalajara - México 2026
      </div>
    </div>
  );
}
