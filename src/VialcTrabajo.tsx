export default function VialcTrabajo() {
  const steps = [
    {
      num: "01", tag: "Inicio", title: "Reunión inicial",
      desc: "Comenzamos con una reunión para conocer tu negocio, entender tus necesidades y definir el objetivo principal. Te ayudaremos a elegir el servicio que más te conviene y resolveremos cualquier duda antes de iniciar.",
    },
    {
      num: "02", tag: "Planeación", title: "Definimos objetivos",
      desc: "Analizamos qué deseas lograr — más clientes, mejorar tu imagen, automatizar procesos — y definimos el alcance del proyecto, las funciones que incluirá y el tiempo estimado de entrega.",
    },
    {
      num: "03", tag: "Preparación", title: "Recibimos el material",
      desc: "Una vez aprobado el proyecto y recibido el anticipo, solicitaremos todo el material necesario: logotipos, fotografías, textos e información del negocio. El tiempo de entrega comienza cuando contemos con todo.",
    },
    {
      num: "04", tag: "Producción", title: "Diseñamos y desarrollamos",
      desc: "Nuestro equipo trabaja en el proyecto utilizando herramientas profesionales para agilizar el proceso sin comprometer la calidad. Diseñamos la propuesta y desarrollamos las funciones acordadas.",
    },
    {
      num: "05", tag: "Revisión", title: "Revisión del cliente",
      desc: "Cuando el proyecto esté listo, recibirás una primera versión para revisarla. Podrás solicitar las modificaciones incluidas en tu plan para asegurarnos de que el resultado cumpla con tus expectativas.",
    },
    {
      num: "06", tag: "Cierre", title: "Entrega y publicación",
      desc: "Una vez aprobados los cambios y recibido el pago restante, realizamos la entrega final o publicamos el proyecto. Durante el tiempo de soporte incluido estaremos disponibles para corregir cualquier error.",
    },
  ];

  const frases = [
    { num: "01", head: "Automatización", text: "Ahorra tiempo automatizando tareas repetitivas y mejora el seguimiento de tus clientes." },
    { num: "02", head: "Branding", text: "Haz que tu negocio transmita confianza y sea fácil de recordar." },
    { num: "03", head: "Página Web", text: "Convierte visitantes en clientes con una página profesional." },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "60px 48px", fontFamily: "'DM Mono', monospace", color: "#fff", boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .nav-link-t {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-link-t:hover { color: rgba(255,255,255,0.85); }
        .cta-primary-t {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cta-primary-t:hover { background: rgba(255,255,255,0.88); }
        .step-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0 32px;
          padding: 36px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.07);
        }
        .step-row:last-child { border-bottom: none; }
        .frases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 0.5px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 700px) {
          .frases-grid { grid-template-columns: 1fr; }
          .step-row { grid-template-columns: 60px 1fr; gap: 0 16px; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 64 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0" y="0" width="10" height="10" fill="white" />
            <rect x="12" y="0" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="0" y="12" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="12" y="12" width="10" height="10" fill="white" />
          </svg>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#fff", fontSize: 16, letterSpacing: "0.1em" }}>VIALC</span>
        </a>
        <div style={{ display: "flex", gap: 32 }}>
          <a href="/?page=trabajo" className="nav-link-t" style={{ color: "rgba(255,255,255,0.85)" }}>Trabajo</a>
          <a href="/?page=services" className="nav-link-t">Servicios</a>
          <a href="/?page=servicio-web" className="nav-link-t">Servicio Web</a>
          <a href="/?page=about" className="nav-link-t">Acerca</a>
        </div>
        <button className="cta-primary-t" onClick={() => window.location.href = "/?page=brief"}>Comenzar →</button>
      </nav>

      {/* BADGE */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.14)", padding: "7px 18px", marginBottom: 44 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Cómo trabajamos</span>
      </div>

      {/* TITLE */}
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1, marginBottom: 14 }}>
        Proceso claro,<br /><em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>resultados reales.</em>
      </h1>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", maxWidth: 480, lineHeight: 1.8, marginBottom: 72 }}>
        Mantenemos una comunicación clara y transparente durante todo el proceso para garantizar un resultado profesional y una experiencia de trabajo sencilla.
      </p>

      {/* STEPS */}
      <div>
        {steps.map((s) => (
          <div key={s.num} className="step-row">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 52, color: "rgba(255,255,255,0.07)", lineHeight: 1, paddingTop: 4 }}>{s.num}</div>
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>{s.tag}</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 24, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h2>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em", lineHeight: 1.9 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.12)", margin: "72px 0" }} />

      {/* FRASES */}
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 28, color: "#fff", marginBottom: 40, textAlign: "center" as const }}>
        Lo que hacemos <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>por ti</em>
      </h2>
      <div className="frases-grid">
        {frases.map((f) => (
          <div key={f.num} style={{ background: "#000", padding: "36px 28px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>— {f.num}</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 22, color: "#fff", marginBottom: 12 }}>{f.head}</h3>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, letterSpacing: "0.04em" }}>{f.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" as const, marginTop: 72 }}>
        <button className="cta-primary-t" onClick={() => window.location.href = "/?page=brief"}>Comenzar ahora →</button>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center" as const, marginTop: 48, fontSize: 10, letterSpacing: "0.35em", color: "rgba(255,255,255,0.12)", textTransform: "uppercase" as const }}>
        Guadalajara · México 2026
      </div>
    </div>
  );
}
