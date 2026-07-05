import { useState, useEffect } from "react";

function ChecklistItem({ text }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      fontFamily: "'DM Mono', monospace",
      fontSize: 13, lineHeight: 1.7,
      color: "rgba(255,255,255,0.55)",
      marginBottom: 10,
    }}>
      <span style={{ color: "rgba(255,255,255,0.3)", marginTop: 1 }}>—</span>
      <span>{text}</span>
    </li>
  );
}

function PlanCard({ name, price, idealFor, delivery, features, featured, delay, visible }) {
  return (
    <div style={{
      position: "relative",
      border: featured ? "0.5px solid rgba(255,255,255,0.45)" : "0.5px solid rgba(255,255,255,0.14)",
      background: featured ? "rgba(255,255,255,0.03)" : "transparent",
      padding: "44px 36px",
      flex: "1 1 300px",
      maxWidth: 360,
      display: "flex",
      flexDirection: "column",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>
      {featured && (
        <span style={{
          position: "absolute", top: -11,
          left: "50%", transform: "translateX(-50%)",
          fontFamily: "'DM Mono', monospace",
          fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "#000", background: "#fff",
          padding: "5px 14px",
        }}>
          Más elegido
        </span>
      )}

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
        fontSize: 30, color: "#fff", marginBottom: 6,
      }}>
        {name}
      </h3>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
        fontSize: 40, color: "#fff", marginBottom: 18,
      }}>
        {price}
      </div>

      <p style={{
        fontFamily: "'DM Mono', monospace", fontSize: 11.5, lineHeight: 1.7,
        color: "rgba(255,255,255,0.4)", marginBottom: 28,
      }}>
        {idealFor}
      </p>

      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.14)", marginBottom: 26 }} />

      <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 32, flex: 1 }}>
        {features.map((f, i) => <ChecklistItem key={i} text={f} />)}
      </ul>

      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 24,
      }}>
        Entrega: {delivery}
      </div>

      <button
        className={featured ? "cta-primary" : "cta-secondary"}
        style={{ width: "100%" }}
        onClick={() => window.location.href = "/?page=brief"}
      >
        Elegir plan →
      </button>
    </div>
  );
}

export default function VialcServicioWeb() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const plans = [
    {
      name: "Landing Page",
      price: "$2,500",
      idealFor: "Ideal para emprendedores y pequeños negocios que quieren empezar a conseguir clientes.",
      delivery: "3 días",
      features: [
        "Diseño personalizado",
        "Integración de WhatsApp",
        "Formulario de contacto personalizado",
        "Google Maps",
        "Adaptación para celular",
        "Información del negocio",
        "Hasta 10 imágenes",
        "Enlaces a redes sociales",
        "Botones de llamada a la acción",
        "3 rondas de cambios",
      ],
      featured: false,
    },
    {
      name: "Página Profesional",
      price: "$4,000",
      idealFor: "Ideal para negocios que quieren una presencia profesional en internet.",
      delivery: "5 días",
      features: [
        "Todo lo del plan Landing Page",
        "Hasta 5 páginas",
        "Menú de navegación",
        "Página de servicios",
        "Página \"Nosotros\"",
        "Galería de imágenes",
        "Sección de preguntas frecuentes",
        "Página de contacto",
        "5 rondas de cambios",
        "Diseño más completo",
      ],
      featured: true,
    },
    {
      name: "Página Premium",
      price: "$6,500",
      idealFor: "Ideal para empresas que buscan vender más y proyectar una imagen de alto nivel.",
      delivery: "1 semana",
      features: [
        "Todo lo del plan Profesional",
        "Hasta 8 páginas",
        "Diseño adaptado a tu identidad visual",
        "Contenido optimizado para ser más claro y persuasivo",
        "Productos o servicios mostrados de forma organizada",
        "Rondas de cambios ilimitadas",
      ],
      featured: false,
    },
  ];

  const notIncluded = [
    "SEO avanzado",
    "Investigación profunda de palabras clave",
    "Google Search Console",
    "Google Analytics",
    "Facebook Pixel",
    "CRM complejos",
    "Automatizaciones muy avanzadas",
    "Integraciones con APIs",
    "Tiendas en línea grandes",
    "Sistemas de reservas personalizados",
    "Áreas de miembros",
    "Programación a medida",
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400;500&display=swap');

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
      `}</style>

      {/* Background: soft gradient wash to echo the hero without the full canvas animation */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05), transparent 60%)",
      }} />

      {/* NAV */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "32px 48px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.1s",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0" y="0" width="10" height="10" fill="white" />
            <rect x="12" y="0" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="0" y="12" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="12" y="12" width="10" height="10" fill="white" />
          </svg>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#fff", fontSize: 16, letterSpacing: "0.1em" }}>VIALC</span>
        </a>
        <div style={{ display: "flex", gap: 40 }}>
          <a href="#" className="nav-link">Trabajo</a>
          <a href="/?page=services" className="nav-link">Servicios</a>
          <a href="/?page=servicio-web" className="nav-link" style={{ color: "rgba(255,255,255,0.85)" }}>Servicio Web</a>
          <a href="/?page=about" className="nav-link">Acerca</a>
          <a href="#" className="nav-link">Contacto</a>
        </div>
        <button className="cta-primary" onClick={() => window.location.href = "/?page=brief"}>Comenzar →</button>
      </nav>

      {/* HEADER */}
      <header style={{
        position: "relative", zIndex: 10,
        textAlign: "center",
        padding: "64px 24px 40px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(.16,1,.3,1) 0.2s",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          border: "0.5px solid rgba(255,255,255,0.14)",
          padding: "8px 20px", marginBottom: 28,
        }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
            Páginas Web
          </span>
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "clamp(40px, 6vw, 68px)", color: "#fff", margin: 0,
        }}>
          Servicios Web
        </h1>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.4)", maxWidth: 560, margin: "24px auto 0", lineHeight: 1.8,
        }}>
          Creamos páginas web profesionales que ayudan a que tu negocio genere confianza,
          reciba más consultas y convierta visitantes en clientes.
        </p>
      </header>

      {/* PLANS */}
      <main style={{
        position: "relative", zIndex: 10,
        display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28,
        padding: "24px 48px 80px",
      }}>
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} delay={0.3 + i * 0.15} visible={visible} />
        ))}
      </main>

      {/* WHAT'S NOT INCLUDED */}
      <section style={{
        position: "relative", zIndex: 10,
        maxWidth: 780, margin: "0 auto", padding: "0 24px 96px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.9s",
      }}>
        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.14)", marginBottom: 40 }} />
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 26, color: "#fff", textAlign: "center", marginBottom: 8,
        }}>
          Lo que ningún plan incluye
        </h2>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.35)",
          textAlign: "center", marginBottom: 32,
        }}>
          Estos servicios requieren desarrollo personalizado y se cotizan por separado.
        </p>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "10px 24px",
        }}>
          {notIncluded.map((item) => (
            <div key={item} style={{
              display: "flex", alignItems: "center", gap: 10,
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              color: "rgba(255,255,255,0.32)",
            }}>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>×</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div style={{
        position: "relative", zIndex: 10,
        textAlign: "center", padding: "24px",
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.35em",
        color: "rgba(255,255,255,0.12)",
        textTransform: "uppercase",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 1.1s",
      }}>
        Guadalajara - México 2026
      </div>
    </div>
  );
}
