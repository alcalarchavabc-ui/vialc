export default function VialcServices() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "80px 40px", fontFamily: "'DM Mono', monospace", boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .srv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border: 0.5px solid rgba(255,255,255,0.12);
        }
        @media (max-width: 768px) {
          .srv-grid { grid-template-columns: 1fr; }
          .srv-card { border-right: none !important; border-bottom: 0.5px solid rgba(255,255,255,0.12); }
        }
        .srv-card {
          background: #000;
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          border-right: 0.5px solid rgba(255,255,255,0.12);
          transition: background 0.3s;
        }
        .srv-card:last-child { border-right: none; }
        .srv-card:hover { background: rgba(255,255,255,0.02); }
        .srv-card.featured { background: rgba(255,255,255,0.04); }
        .srv-list { list-style: none; flex: 1; margin-bottom: 40px; padding: 0; }
        .srv-list li {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em;
          padding: 9px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1.4;
        }
        .srv-list li::before {
          content: '';
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        .featured .srv-list li { color: rgba(255,255,255,0.6); }
        .featured .srv-list li::before { background: rgba(255,255,255,0.45); }
        .srv-btn {
          width: 100%;
          background: transparent;
          border: 0.5px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.45);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .srv-btn:hover { border-color: rgba(255,255,255,0.5); color: rgba(255,255,255,0.9); }
        .srv-btn-hot { background: #fff !important; color: #000 !important; border-color: #fff !important; }
        .srv-btn-hot:hover { background: rgba(255,255,255,0.88) !important; }
      `}</style>

      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        <div style={{ width: 32, height: "0.5px", background: "rgba(255,255,255,0.3)" }} />
        <span style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const }}>Servicios VIALC</span>
      </div>

      {/* Title */}
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", lineHeight: 1.1, marginBottom: 12 }}>
        Elige tu<br /><em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>paquete ideal.</em>
      </h1>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", marginBottom: 64, lineHeight: 1.8, maxWidth: 480 }}>
        Soluciones diseñadas para cada etapa de tu negocio.
      </p>

      {/* Cards */}
      <div className="srv-grid">

        {/* IMPULSO */}
        <div className="srv-card">
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: "rgba(255,255,255,0.06)", lineHeight: 1, marginBottom: 20 }}>01</div>
          <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, padding: "4px 10px", border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.35)", marginBottom: 14, width: "fit-content" }}>Básico</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 32, color: "#fff", marginBottom: 6 }}>Impulso</h2>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", marginBottom: 28, lineHeight: 1.6 }}>Manejo básico de redes sociales.</p>
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)", marginBottom: 24 }} />
          <ul className="srv-list">
            {["Diseño de publicaciones", "8–12 posts al mes", "Historias", "Calendario de contenido", "Optimización de perfil", "Reporte mensual"].map(f => <li key={f}>{f}</li>)}
          </ul>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 40, color: "#fff", lineHeight: 1, marginBottom: 4 }}>$3,999</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 20 }}>MXN / mes</div>
          <button className="srv-btn" onClick={() => window.location.href='/?page=brief'}>Comenzar →</button>
        </div>

        {/* CRECIMIENTO */}
        <div className="srv-card featured">
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: "rgba(255,255,255,0.06)", lineHeight: 1, marginBottom: 20 }}>02</div>
          <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, padding: "4px 10px", border: "0.5px solid rgba(255,255,255,0.45)", color: "rgba(255,255,255,0.75)", marginBottom: 14, width: "fit-content" }}>★ Más popular</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 32, color: "#fff", marginBottom: 6 }}>Crecimiento</h2>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", marginBottom: 28, lineHeight: 1.6 }}>Estrategia de contenido profesional.</p>
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)", marginBottom: 24 }} />
          <ul className="srv-list">
            {["Reels profesionales", "Edición dinámica", "Community management", "Publicaciones constantes", "Investigación de tendencias", "Campañas básicas de anuncios", "Reportes y métricas"].map(f => <li key={f}>{f}</li>)}
          </ul>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 40, color: "#fff", lineHeight: 1, marginBottom: 4 }}>$4,999</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 20 }}>MXN / mes</div>
          <button className="srv-btn srv-btn-hot" onClick={() => window.location.href='/?page=brief'}>Comenzar →</button>
        </div>

        {/* DOMINIO */}
        <div className="srv-card">
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: "rgba(255,255,255,0.06)", lineHeight: 1, marginBottom: 20 }}>03</div>
          <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, padding: "4px 10px", border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.35)", marginBottom: 14, width: "fit-content" }}>Premium</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 32, color: "#fff", marginBottom: 6 }}>Dominio</h2>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", marginBottom: 28, lineHeight: 1.6 }}>Estrategia completa de branding y ventas.</p>
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)", marginBottom: 24 }} />
          <ul className="srv-list">
            {["Producción profesional de contenido", "Reels de alto impacto", "Gestión completa de redes", "Meta Ads avanzados", "Embudos de venta", "Automatizaciones", "Seguimiento de leads", "Análisis competitivo", "Consultoría estratégica"].map(f => <li key={f}>{f}</li>)}
          </ul>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 40, color: "#fff", lineHeight: 1, marginBottom: 4 }}>$5,999</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 20 }}>MXN / mes</div>
          <button className="srv-btn" onClick={() => window.location.href='/?page=brief'}>Comenzar →</button>
        </div>

      </div>
    </div>
  );
}
