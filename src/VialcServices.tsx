import { useState, useEffect } from "react";

export default function VialcServices() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const rows = [
    { label: "Publicaciones al mes", impulso: "12", dominio: "20", imperio: "30" },
    { label: "Reels / TikToks", impulso: "4", dominio: "8", imperio: "12" },
    { label: "Diseño gráfico", impulso: true, dominio: true, imperio: true },
    { label: "Gestión de Facebook", impulso: true, dominio: true, imperio: true },
    { label: "Gestión de Instagram", impulso: true, dominio: true, imperio: true },
    { label: "Gestión de TikTok", impulso: false, dominio: true, imperio: true },
    { label: "Respuesta a mensajes", impulso: "Básica", dominio: "Intermedia", imperio: "Completa" },
    { label: "Meta Ads", impulso: false, dominio: true, imperio: true },
    { label: "Landing Page", impulso: false, dominio: true, imperio: true },
    { label: "Página Web Completa", impulso: false, dominio: false, imperio: true },
    { label: "Branding Premium", impulso: false, dominio: false, imperio: true },
    { label: "SEO Básico", impulso: false, dominio: false, imperio: true },
    { label: "Reporte mensual", impulso: true, dominio: true, imperio: true },
    { label: "Reunión estratégica", impulso: false, dominio: "1 mensual", imperio: "2 mensuales" },
  ];

  const renderCell = (val: boolean | string, featured = false) => {
    if (val === true) return <span style={{ color: featured ? "#fff" : "rgba(255,255,255,0.55)", fontSize: 14 }}>✓</span>;
    if (val === false) return <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 14 }}>✕</span>;
    return <span>{val}</span>;
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "48px", fontFamily: "'DM Mono', monospace", color: "#fff", boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes lineGrow { from{width:0} to{width:100%} }
        .a1 { animation: fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.1s both; }
        .a2 { animation: fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.3s both; }
        .a3 { animation: fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.5s both; }
        .a4 { animation: fadeIn 1s ease 0.7s both; }
        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: none;
          color: rgba(255,255,255,0.35);
          font-family: 'DM Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          cursor: pointer; margin-bottom: 40px; padding: 0;
          transition: color 0.2s;
        }
        .back-btn:hover { color: rgba(255,255,255,0.7); }
        .srv-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .srv-table th {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); padding: 16px 20px; text-align: center;
          border-bottom: 0.5px solid rgba(255,255,255,0.12);
        }
        .srv-table th:first-child { text-align: left; color: rgba(255,255,255,0.2); width: 36%; }
        .srv-table th.feat { color: #fff; border-bottom: 0.5px solid rgba(255,255,255,0.45); }
        .srv-table td {
          padding: 13px 20px; font-size: 11px; color: rgba(255,255,255,0.4);
          border-bottom: 0.5px solid rgba(255,255,255,0.05);
          text-align: center; letter-spacing: 0.04em;
        }
        .srv-table td:first-child { text-align: left; color: rgba(255,255,255,0.5); }
        .srv-table td.feat { background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.65); }
        .srv-table tr:hover td { background: rgba(255,255,255,0.02); }
        .srv-table tr:hover td.feat { background: rgba(255,255,255,0.05); }
        .cta-btn {
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #000; background: #fff; border: none;
          padding: 16px 40px; cursor: pointer; transition: background 0.2s;
        }
        .cta-btn:hover { background: rgba(255,255,255,0.88); }
      `}</style>

      {/* BACK BUTTON */}
      <button className={`back-btn ${visible ? "a1" : ""}`} onClick={() => window.history.back()}>
        ← Regresar
      </button>

      {/* BADGE */}
      <div className={visible ? "a1" : ""} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.14)", padding: "7px 18px", marginBottom: 32, marginLeft: 0 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Paquetes de marketing</span>
      </div>

      {/* TITLE */}
      <h1 className={visible ? "a2" : ""} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.1, marginBottom: 8 }}>
        Elige tu plan <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>ideal.</em>
      </h1>
      <p className={visible ? "a2" : ""} style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", marginBottom: 40, lineHeight: 1.8 }}>
        Comparativa completa de paquetes · VIALC Marketing
      </p>

      {/* DIVIDER */}
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.12)", marginBottom: 40, animation: visible ? "lineGrow 1s cubic-bezier(.16,1,.3,1) 0.4s both" : "none" }} />

      {/* TABLE */}
      <div className={visible ? "a4" : ""}>
        <table className="srv-table">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Impulso</th>
              <th className="feat">Dominio</th>
              <th>Imperio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td>{renderCell(row.impulso)}</td>
                <td className="feat">{renderCell(row.dominio, true)}</td>
                <td>{renderCell(row.imperio)}</td>
              </tr>
            ))}
            <tr>
              <td style={{ borderTop: "0.5px solid rgba(255,255,255,0.12)", borderBottom: "none", padding: "28px 20px" }}></td>
              <td style={{ borderTop: "0.5px solid rgba(255,255,255,0.12)", borderBottom: "none", padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 28, color: "#fff", lineHeight: 1 }}>$4,990</div>
                <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" as const, marginTop: 6 }}>MXN / mes</div>
              </td>
              <td className="feat" style={{ borderTop: "0.5px solid rgba(255,255,255,0.12)", borderBottom: "none", padding: "28px 20px" }}>
                <div style={{ display: "inline-block", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#000", background: "#fff", padding: "4px 10px", marginBottom: 14 }}>Más elegido</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 34, color: "#fff", lineHeight: 1 }}>$8,990</div>
                <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" as const, marginTop: 6 }}>MXN / mes</div>
              </td>
              <td style={{ borderTop: "0.5px solid rgba(255,255,255,0.12)", borderBottom: "none", padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 28, color: "#fff", lineHeight: 1 }}>$14,990</div>
                <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" as const, marginTop: 6 }}>MXN / mes</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className={visible ? "a3" : ""} style={{ textAlign: "center" as const, marginTop: 56 }}>
        <button className="cta-btn" onClick={() => window.location.href = "/?page=brief"}>Comenzar ahora →</button>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center" as const, marginTop: 48, fontSize: 10, letterSpacing: "0.35em", color: "rgba(255,255,255,0.12)", textTransform: "uppercase" as const }}>
        Guadalajara · México 2026
      </div>
    </div>
  );
}
