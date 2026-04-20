// WhyOmme — 3-column differentiators
function WhyOmme() {
  const items = [
    { t: "Dermatólogo certificado incluido", d: "No un bot. Un médico real revisa tu caso y firma el protocolo." },
    { t: "Seguimiento mensual real", d: "Fotos, ajustes y conversación con tu dermatólogo cada mes." },
    { t: "Protocolo de mínimo 6 meses", d: "Porque así funciona el folículo. Sin promesas de 30 días." },
  ];
  return (
    <section className="omm-why">
      <div className="omm-section-head">
        <div className="omm-eyebrow">Por qué Omme</div>
        <h2 className="omm-h2">Medicina, no marketing.</h2>
      </div>
      <div className="omm-why__grid">
        {items.map((x, i) => (
          <div className="omm-why__cell" key={i}>
            <div className="omm-why__n">0{i+1}</div>
            <div className="omm-why__t">{x.t}</div>
            <div className="omm-why__d">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Pricing — two plan cards, featured badge on 12-month
function Pricing() {
  return (
    <section className="omm-pricing" id="precios">
      <div className="omm-section-head">
        <div className="omm-eyebrow">Precios</div>
        <h2 className="omm-h2">Elige tu horizonte.</h2>
        <p className="omm-lead">Evaluación médica inicial gratuita en ambos planes.</p>
      </div>
      <div className="omm-pricing__grid">
        <div className="omm-plan">
          <div className="omm-eyebrow">Plan 6 meses</div>
          <div className="omm-plan__title">Protocolo inicial</div>
          <div className="omm-plan__price">$4,799<span className="omm-plan__cur"> MXN</span></div>
          <div className="omm-plan__meta">Total · MSI disponibles</div>
          <ul className="omm-bullets omm-bullets--plan">
            <li><span className="omm-check">✓</span> Evaluación médica inicial</li>
            <li><span className="omm-check">✓</span> Dutasterida 0.5mg + Minoxidil 5mg mensual</li>
            <li><span className="omm-check">✓</span> Seguimiento con dermatólogo</li>
            <li><span className="omm-check">✓</span> Envío discreto</li>
          </ul>
          <a className="omm-btn omm-btn--ghost omm-btn--full" href="#">Elegir 6 meses</a>
        </div>

        <div className="omm-plan omm-plan--featured">
          <span className="omm-plan__badge">Recomendado</span>
          <div className="omm-eyebrow omm-eyebrow--on-dark">Plan 12 meses</div>
          <div className="omm-plan__title">Protocolo completo</div>
          <div className="omm-plan__price">$8,699<span className="omm-plan__cur"> MXN</span></div>
          <div className="omm-plan__meta">Regular $9,588 · ahorras $889</div>
          <ul className="omm-bullets omm-bullets--plan">
            <li><span className="omm-check">✓</span> Todo del plan 6 meses</li>
            <li><span className="omm-check">✓</span> Ajustes trimestrales del protocolo</li>
            <li><span className="omm-check">✓</span> Prioridad en mensajería médica</li>
            <li><span className="omm-check">✓</span> 2 meses gratis efectivos</li>
          </ul>
          <a className="omm-btn omm-btn--lime omm-btn--full" href="#">Elegir 12 meses</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyOmme, Pricing });
