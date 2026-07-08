<navexport default function VialcPoliticas() {
  const sections = [
    {
      cat: "Forma de pago",
      items: [
        "Se requiere un anticipo del 50% para comenzar cualquier proyecto.",
        "El 50% restante se paga antes o después de la publicación dependiendo del servicio.",
        "El pago se realiza mediante transferencia bancaria.",
      ],
    },
    {
      cat: "Material del cliente",
      items: [
        "El cliente es responsable de proporcionar todo el contenido necesario (textos, imágenes, logotipos, documentos).",
        "El cliente garantiza que tenemos los derechos para utilizar todo el contenido proporcionado.",
      ],
    },
    {
      cat: "Tiempo de entrega",
      items: [
        "El tiempo de entrega comienza cuando el cliente entrega todo el material y se confirma el anticipo.",
        "Si el cliente tarda en enviar materiales, los tiempos podrán modificarse sin afectar otros proyectos.",
      ],
    },
    {
      cat: "Revisiones y cambios",
      items: [
        "Cada servicio incluye el número de revisiones especificado en su descripción.",
        "Nuevas funciones, páginas o diseños fuera del alcance inicial se consideran trabajo adicional con costo extra.",
        "Una vez aprobada la revisión, cualquier modificación posterior puede generar un costo adicional.",
        "Nuevas funcionalidades después de la entrega final se cotizarán como servicio independiente.",
      ],
    },
    {
      cat: "Revisión del proyecto",
      items: [
        "El cliente tiene 6 días naturales para revisar el proyecto y enviar observaciones.",
        "Sin respuesta en ese periodo, el proyecto se considera aprobado y pasa a la siguiente etapa.",
      ],
    },
    {
      cat: "Soporte",
      items: [
        "El soporte incluido cubre únicamente errores relacionados con el trabajo realizado por nuestro equipo.",
        "Solo se pueden corregir errores del servicio ya entregado durante los días de soporte especificados.",
      ],
    },
    {
      cat: "Cancelaciones",
      items: [
        "En caso de cancelación una vez iniciado el proyecto, el anticipo no es reembolsable.",
        "Si el proyecto queda detenido por falta de respuesta más de 20 días naturales, podremos darlo por cerrado.",
      ],
    },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "60px 48px", fontFamily: "'DM Mono', monospace", color: "#fff", boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .nav-link-p { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.38); text-decoration:none; transition:color 0.3s; }
        .nav-link-p:hover { color:rgba(255,255,255,0.85); }
        .cta-p { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:#000; background:#fff; border:none; padding:14px 32px; cursor:pointer; transition:background 0.2s; }
        .cta-p:hover { background:rgba(255,255,255,0.88); }
        .pol-section { padding:40px 0; border-bottom:0.5px solid rgba(255,255,255,0.07); display:grid; grid-template-columns:200px 1fr; gap:0 48px; }
        .pol-section:last-child { border-bottom:none; }
        @media(max-width:700px){ .pol-section{ grid-template-columns:1fr; gap:16px 0; } }
      `}</style>

      

      {/* BADGE */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.14)", padding: "7px 18px", marginBottom: 44 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Nuestras políticas</span>
      </div>

      {/* TITLE */}
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1, marginBottom: 14 }}>
        Transparencia<br /><em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>en todo momento.</em>
      </h1>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", maxWidth: 520, lineHeight: 1.8, marginBottom: 64 }}>
        Trabajamos con reglas claras para garantizar una experiencia justa, profesional y sin sorpresas para ambas partes.
      </p>

      {/* SECTIONS */}
      <div>
        {sections.map((s) => (
          <div key={s.cat} className="pol-section">
            <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", paddingTop: 4, lineHeight: 1.6 }}>
              {s.cat}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {s.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: 6 }} />
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", lineHeight: 1.9 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)", margin: "64px 0" }} />

      {/* COMUNICACIÓN */}
      <div style={{ border: "0.5px solid rgba(255,255,255,0.12)", padding: 40, maxWidth: 600, margin: "0 auto" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Comunicación</div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 20, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontStyle: "italic" }}>
          "Toda solicitud de cambios, aprobación o información deberá realizarse por el medio de comunicación acordado — WhatsApp o correo electrónico."
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" as const, marginTop: 64 }}>
        <button className="cta-p" onClick={() => window.location.href = "/?page=brief"}>Comenzar un proyecto →</button>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center" as const, marginTop: 48, fontSize: 10, letterSpacing: "0.35em", color: "rgba(255,255,255,0.12)", textTransform: "uppercase" as const }}>
        Guadalajara · México 2026
      </div>
    </div>
  );
}
