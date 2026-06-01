import { useState } from "react";

const steps = [
  {
    section: "ADN del Negocio y Marca",
    number: "01",
    questions: [
      { id: "nombre_negocio", label: "¿Cuál es el nombre oficial de tu negocio y el sitio web/redes actuales (si existen)?", type: "textarea", placeholder: "Ej: Mi Empresa S.A. — @miempresa en Instagram, www.miempresa.com" },
      { id: "descripcion_simple", label: "¿Cómo le explicarías lo que hace tu negocio a un niño de 10 años?", type: "textarea", placeholder: "Evita tecnicismos, sé directo y simple..." },
      { id: "personalidad_marca", label: "Si tu marca fuera una persona, ¿cómo describirías su personalidad y qué 3 valores la definen?", type: "textarea", placeholder: "Ej: Sería una persona moderna, confiable y cercana. Sus valores: honestidad, innovación y calidad." },
      { id: "propuesta_valor", label: "¿Cuál es tu propuesta de valor única? ¿Por qué un cliente debería comprarte a ti y no a tu competencia?", type: "textarea", placeholder: "¿Qué te hace diferente y mejor que los demás?" },
    ]
  },
  {
    section: "Audiencia y Mercado",
    number: "02",
    questions: [
      { id: "cliente_ideal", label: "¿Quién es tu cliente ideal actual?", type: "textarea", placeholder: "Describe su edad promedio, género, intereses y qué problemas le resuelve tu producto/servicio..." },
      { id: "cliente_sonado", label: "¿Quién es tu cliente 'soñado' o el nuevo público al que te gustaría llegar?", type: "textarea", placeholder: "Describe el perfil de ese cliente ideal al que aspiras..." },
      { id: "competidores", label: "¿Cuáles son tus 3 competidores más directos?", type: "textarea", placeholder: "Menciona sus nombres o redes sociales..." },
      { id: "marcas_admira", label: "¿Qué 3 marcas admiras por cómo manejan su comunicación o estética?", type: "textarea", placeholder: "Pueden ser locales o internacionales..." },
    ]
  },
  {
    section: "Objetivos de Negocio y Ventas",
    number: "03",
    questions: [
      { id: "objetivo_redes", label: "¿Cuál es el objetivo principal que buscas alcanzar con las redes sociales en los próximos 3 a 6 meses?", type: "radio", options: ["Ventas en web", "Captación de leads/contactos", "Posicionamiento de marca", "Tráfico a local físico", "Otro"] },
      { id: "producto_estrella", label: "¿Cuál es el producto o servicio que te deja mayor margen de ganancia y en el que deberíamos enfocar los esfuerzos?", type: "textarea", placeholder: "Describe el producto/servicio estrella de tu negocio..." },
      { id: "proceso_cliente", label: "¿Cómo es el proceso desde que un cliente te descubre hasta que te paga? ¿Dónde se pierden los clientes?", type: "textarea", placeholder: "Ej: Me encuentran en Instagram → me mandan DM → cotizo → muchos no responden más..." },
      { id: "ticket_promedio", label: "¿Cuál es el ticket promedio de compra de tus clientes?", type: "text", placeholder: "Ej: $500 MXN, $2,000 MXN, $10,000 MXN..." },
    ]
  },
  {
    section: "Identidad Visual y Recursos",
    number: "04",
    questions: [
      { id: "manual_marca", label: "¿Cuentas con un manual de identidad de marca?", type: "radio", options: ["Sí, tengo manual completo", "Tengo logo pero no manual", "Solo tengo colores definidos", "No tengo nada aún"] },
      { id: "material_visual", label: "¿De qué material visual disponemos para empezar a trabajar?", type: "checkbox", options: ["Fotos de alta calidad", "Videos del proceso/producto", "Testimonios de clientes", "Nada por ahora"] },
      { id: "formatos_contenido", label: "¿Qué formatos de contenido te gustaría implementar que no hayas hecho antes?", type: "checkbox", options: ["TikToks / Reels", "Blogs / Artículos", "Transmisiones en vivo", "Colaboraciones con influencers", "Podcasts", "Email marketing"] },
    ]
  },
  {
    section: "Logística y Expectativas",
    number: "05",
    questions: [
      { id: "temas_evitar", label: "¿Hay algún tema, palabra, enfoque o competencia de la que prefieras que NO hablemos en tus redes?", type: "textarea", placeholder: "Ej: No mencionar a la competencia X, evitar hablar de precios directamente..." },
      { id: "presupuesto_pauta", label: "¿Cuál es tu presupuesto mensual estimado para invertir en publicidad pagada (Meta Ads / Google Ads)?", type: "radio", options: ["Menos de $2,000 MXN", "$2,000 – $5,000 MXN", "$5,000 – $10,000 MXN", "$10,000 – $20,000 MXN", "Más de $20,000 MXN", "Aún no lo tengo definido"] },
      { id: "contacto_aprobacion", label: "¿Quién será la persona de tu equipo encargada de aprobar el contenido y responder dudas del día a día?", type: "text", placeholder: "Nombre, cargo y medio de contacto preferido..." },
    ]
  },
];

const allQuestions = steps.flatMap(s => s.questions.map(q => ({ ...q, section: s.section, sectionNumber: s.number })));
const total = allQuestions.length;

export default function VialcBrief() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [started, setStarted] = useState(false);

  const q = allQuestions[current];
  const progress = ((current) / total) * 100;

  const handleAnswer = (val: any) => {
    setAnswers(prev => ({ ...prev, [q.id]: val }));
  };

  const handleCheckbox = (opt: string) => {
    const prev = answers[q.id] || [];
    const updated = prev.includes(opt) ? prev.filter((o: string) => o !== opt) : [...prev, opt];
    setAnswers(a => ({ ...a, [q.id]: updated }));
  };

  const submitToFormspree = async () => {
    setSending(true);
    try {
      const formData: Record<string, string> = {
        nombre: name,
        email: email,
      };
      allQuestions.forEach(q => {
        const val = answers[q.id];
        if (val) {
          formData[q.id] = Array.isArray(val) ? val.join(", ") : val;
        }
      });

      await fetch("https://formspree.io/f/mwvzdjpg", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (e) {
      console.error(e);
    }
    setSending(false);
    setDone(true);
  };

  const next = () => {
    if (current < total - 1) setCurrent(c => c + 1);
    else submitToFormspree();
  };

  const back = () => { if (current > 0) setCurrent(c => c - 1); };

  const canContinue = () => {
    const val = answers[q.id];
    if (!val) return false;
    if (typeof val === "string") return val.trim().length > 0;
    if (Array.isArray(val)) return val.length > 0;
    return true;
  };

  const currentSection = allQuestions[current]?.sectionNumber;
  const sectionName = allQuestions[current]?.section;

  return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", flexDirection: "column", fontFamily: "'DM Mono', monospace", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(.16,1,.3,1) both; }
        .fade-in { animation: fadeIn 0.8s ease both; }

        textarea, input[type="text"] {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid rgba(255,255,255,0.2);
          color: #fff;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 300;
          padding: 16px 0;
          outline: none;
          resize: none;
          letter-spacing: 0.05em;
          transition: border-color 0.3s;
          line-height: 1.7;
        }
        textarea:focus, input[type="text"]:focus {
          border-bottom-color: rgba(255,255,255,0.7);
        }
        textarea::placeholder, input::placeholder {
          color: rgba(255,255,255,0.2);
          font-size: 13px;
        }
        .radio-opt, .check-opt {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          border: 0.5px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 10px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          letter-spacing: 0.08em;
        }
        .radio-opt:hover, .check-opt:hover {
          border-color: rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.85);
        }
        .radio-opt.selected, .check-opt.selected {
          border-color: rgba(255,255,255,0.8);
          color: #fff;
          background: rgba(255,255,255,0.04);
        }
        .dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          border: 0.5px solid rgba(255,255,255,0.4);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .dot.filled { background: #fff; border-color: #fff; }
        .square {
          width: 14px; height: 14px;
          border: 0.5px solid rgba(255,255,255,0.4);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          font-size: 10px;
          color: #000;
        }
        .square.filled { background: #fff; border-color: #fff; }

        .btn-primary {
          background: #fff;
          color: #000;
          border: none;
          padding: 16px 40px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: rgba(255,255,255,0.88); }
        .btn-primary:disabled { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.3); cursor: not-allowed; }
        .btn-ghost {
          background: transparent;
          color: rgba(255,255,255,0.35);
          border: 0.5px solid rgba(255,255,255,0.15);
          padding: 16px 32px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-ghost:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.35); }
        
        .progress-bar {
          height: 0.5px;
          background: rgba(255,255,255,0.08);
          width: 100%;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          background: rgba(255,255,255,0.5);
          transition: width 0.5s cubic-bezier(.16,1,.3,1);
        }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
      `}</style>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 48px", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <rect x="0" y="0" width="10" height="10" fill="white" />
            <rect x="12" y="0" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="0" y="12" width="10" height="10" fill="white" opacity="0.3" />
            <rect x="12" y="12" width="10" height="10" fill="white" />
          </svg>
          <span style={{ color: "#fff", fontSize: 15, letterSpacing: "0.1em" }}>VIALC</span>
        </div>
        {started && !done && (
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.2em" }}>
            {current + 1} / {total}
          </span>
        )}
      </nav>

      {/* PROGRESS BAR */}
      {started && !done && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* CONTENT */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>

        {/* INTRO */}
        {!started && (
          <div className="fade-up" style={{ maxWidth: 600, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.12)", padding: "8px 20px", marginBottom: 40 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "inline-block" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Briefing Estratégico</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(42px, 6vw, 72px)", color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
              Cuéntanos sobre<br /><em>tu negocio</em>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.8, marginBottom: 48, letterSpacing: "0.05em" }}>
              Este brief nos ayuda a entender a fondo tu marca, tus clientes y tus objetivos.<br />
              Tómate tu tiempo — no hay respuestas incorrectas.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              <input type="text" placeholder="Tu nombre completo" value={name} onChange={e => setName(e.target.value)} style={{ textAlign: "center" }} />
              <input type="text" placeholder="Tu correo electrónico" value={email} onChange={e => setEmail(e.target.value)} style={{ textAlign: "center" }} />
            </div>

            <button className="btn-primary" disabled={!name.trim() || !email.trim()} onClick={() => setStarted(true)}>
              Comenzar Brief →
            </button>

            <p style={{ marginTop: 24, color: "rgba(255,255,255,0.18)", fontSize: 11, letterSpacing: "0.15em" }}>
              {total} preguntas · ~10 minutos
            </p>
          </div>
        )}

        {/* QUESTIONS */}
        {started && !done && (
          <div key={current} className="fade-up" style={{ maxWidth: 680, width: "100%" }}>
            {/* Section label */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "rgba(255,255,255,0.08)", lineHeight: 1 }}>{currentSection}</span>
              <div>
                <div style={{ height: "0.5px", width: 32, background: "rgba(255,255,255,0.2)", marginBottom: 8 }} />
                <span style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>{sectionName}</span>
              </div>
            </div>

            {/* Question */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(22px, 3vw, 32px)", color: "#fff", lineHeight: 1.4, marginBottom: 32 }}>
              {q.label}
            </h2>

            {/* Input types */}
            {(q.type === "textarea") && (
              <textarea rows={4} placeholder={q.placeholder} value={answers[q.id] || ""} onChange={e => handleAnswer(e.target.value)} autoFocus />
            )}
            {(q.type === "text") && (
              <input type="text" placeholder={q.placeholder} value={answers[q.id] || ""} onChange={e => handleAnswer(e.target.value)} autoFocus />
            )}
            {q.type === "radio" && (
              <div>
                {q.options?.map(opt => (
                  <div key={opt} className={`radio-opt ${answers[q.id] === opt ? "selected" : ""}`} onClick={() => handleAnswer(opt)}>
                    <div className={`dot ${answers[q.id] === opt ? "filled" : ""}`} />
                    {opt}
                  </div>
                ))}
              </div>
            )}
            {q.type === "checkbox" && (
              <div>
                {q.options?.map(opt => {
                  const checked = (answers[q.id] || []).includes(opt);
                  return (
                    <div key={opt} className={`check-opt ${checked ? "selected" : ""}`} onClick={() => handleCheckbox(opt)}>
                      <div className={`square ${checked ? "filled" : ""}`}>{checked ? "✓" : ""}</div>
                      {opt}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48 }}>
              {current > 0 && <button className="btn-ghost" onClick={back}>← Atrás</button>}
              <button className="btn-primary" disabled={!canContinue() || sending} onClick={next}>
                {sending ? "Enviando..." : current === total - 1 ? "Enviar Brief →" : "Continuar →"}
              </button>
            </div>

            {/* Skip */}
            <button onClick={next} style={{ marginTop: 20, background: "none", border: "none", color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase" }}>
              Omitir pregunta
            </button>
          </div>
        )}

        {/* DONE */}
        {done && (
          <div className="fade-up" style={{ maxWidth: 560, textAlign: "center" }}>
            <div style={{ width: 64, height: 64, border: "0.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 40px" }}>
              <span style={{ fontSize: 28 }}>✓</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              Brief recibido,<br /><em>gracias {name}.</em>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.8, marginBottom: 48, letterSpacing: "0.05em" }}>
              Nuestro equipo revisará tus respuestas y te contactará en las próximas 24 horas con una propuesta personalizada.
            </p>
            <div style={{ border: "0.5px solid rgba(255,255,255,0.1)", padding: "24px 32px", marginBottom: 40, textAlign: "left" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 8 }}>Confirmación enviada a</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>{email}</p>
            </div>
            <a href="/" style={{ display: "inline-block" }}>
              <button className="btn-primary">Volver al inicio</button>
            </a>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "20px", borderTop: "0.5px solid rgba(255,255,255,0.05)", fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.12)", textTransform: "uppercase" }}>
        VIALC · Briefing Estratégico · Confidencial
      </div>
    </div>
  );
}
