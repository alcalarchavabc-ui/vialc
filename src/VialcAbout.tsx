export default function VialcAbout() {
  return (
    <section style={{
      position: "relative",
      background: "#000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      padding: "120px 48px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .about-label {
          animation: fadeIn 1s ease 0.2s both;
        }
        .about-title {
          animation: fadeUp 1s cubic-bezier(.16,1,.3,1) 0.4s both;
        }
        .about-line {
          animation: lineGrow 1.2s cubic-bezier(.16,1,.3,1) 0.6s both;
        }
        .about-p1 {
          animation: fadeUp 1s cubic-bezier(.16,1,.3,1) 0.7s both;
        }
        .about-p2 {
          animation: fadeUp 1s cubic-bezier(.16,1,.3,1) 0.9s both;
        }
        .about-p3 {
          animation: fadeUp 1s cubic-bezier(.16,1,.3,1) 1.1s both;
        }
        .about-values {
          animation: fadeUp 1s cubic-bezier(.16,1,.3,1) 1.3s both;
        }
      `}</style>

      {/* Decorative number */}
      <div style={{
        position: "absolute",
        right: 48,
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(160px, 20vw, 280px)",
        fontWeight: 300,
        color: "rgba(255,255,255,0.03)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>02</div>

      {/* Left accent line */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "0.5px",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)",
      }} />

      <div style={{ maxWidth: 800, position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <div className="about-label" style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 48,
        }}>
          <div style={{ width: 32, height: "0.5px", background: "rgba(255,255,255,0.3)" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
          }}>Acerca de VIALC</span>
        </div>

        {/* Title */}
        <h2 className="about-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(42px, 6vw, 72px)",
          color: "#fff",
          lineHeight: 1.1,
          marginBottom: 40,
          letterSpacing: "-0.01em",
        }}>
          Nacimos con un<br />
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>propósito claro.</em>
        </h2>

        {/* Divider line */}
        <div className="about-line" style={{
          height: "0.5px",
          background: "rgba(255,255,255,0.15)",
          marginBottom: 40,
          width: 0,
        }} />

        {/* Text paragraphs */}
        <p className="about-p1" style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 300,
          fontSize: 14,
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.04em",
          marginBottom: 24,
        }}>
          En VIALC, nacimos con un propósito claro: ser el motor que impulse el crecimiento de los negocios locales y los pequeños emprendedores. Creemos firmemente que detrás de cada negocio hay un gran sueño, y estamos aquí para ayudarte a llevarlo hasta las nubes.
        </p>

        <p className="about-p2" style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 300,
          fontSize: 14,
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.04em",
          marginBottom: 24,
        }}>
          Nos apasiona el mundo digital, pero nos apasionan aún más las personas. Por eso, no solo gestionamos tus redes sociales; nos convertimos en tus aliados estratégicos.
        </p>

        <p className="about-p3" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(20px, 2.5vw, 28px)",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "0.01em",
          marginBottom: 56,
          fontStyle: "italic",
        }}>
          "No hay mayor satisfacción para nosotros que ver los resultados reales de nuestro trabajo y celebrar, codo a codo contigo, el crecimiento y el éxito de tu negocio. Si tú creces, nosotros también."
        </p>

        {/* Values */}
        <div className="about-values" style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
        }}>
          {[
            { num: "01", label: "Aliados Estratégicos" },
            { num: "02", label: "Resultados Reales" },
            { num: "03", label: "Crecimiento Mutuo" },
          ].map(v => (
            <div key={v.num} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 300,
                color: "rgba(255,255,255,0.2)",
                lineHeight: 1,
              }}>{v.num}</span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
              }}>{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
