// ProblemBar — 3 horizontal stats
function ProblemBar() {
  const stats = [
    { n: "20M", t: "mexicanos con alopecia androgénica" },
    { n: "+70%", t: "buscan solución en internet" },
    { n: "<10%", t: "recibe tratamiento médico real" },
  ];
  return (
    <section className="omm-stats">
      {stats.map((s, i) => (
        <div className="omm-stats__cell" key={i}>
          <div className="omm-stats__n">{s.n}</div>
          <div className="omm-stats__t">{s.t}</div>
        </div>
      ))}
    </section>
  );
}

// HowItWorks — 3-step flow
function HowItWorks() {
  const steps = [
    { n: "01", t: "Evaluación gratuita", d: "Responde un cuestionario médico en 5 minutos." },
    { n: "02", t: "Protocolo personalizado", d: "Un dermatólogo certificado lo diseña para ti." },
    { n: "03", t: "Seguimiento mensual", d: "Ajustes, fotos y soporte — todo desde casa." },
  ];
  return (
    <section className="omm-how" id="como">
      <div className="omm-section-head">
        <div className="omm-eyebrow">Cómo funciona</div>
        <h2 className="omm-h2">Un protocolo, tres pasos.</h2>
      </div>
      <div className="omm-how__grid">
        {steps.map((s) => (
          <div className="omm-step" key={s.n}>
            <div className="omm-step__n">{s.n}</div>
            <div className="omm-step__t">{s.t}</div>
            <div className="omm-step__d">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ProblemBar, HowItWorks });
