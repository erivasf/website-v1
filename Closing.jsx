// Testimonials — understated 2-up
function Testimonials() {
  const items = [
    { q: "A los cuatro meses, la diferencia era visible. Pero más importante: entendía qué estaba pasando.", n: "Rodrigo, 34", c: "Monterrey · 8 meses en protocolo" },
    { q: "Hablar con un dermatólogo desde el celular me pareció raro al principio. Después, obvio.", n: "Alejandro, 29", c: "CDMX · 6 meses en protocolo" },
  ];
  return (
    <section className="omm-testimonials">
      <div className="omm-section-head">
        <div className="omm-eyebrow">Pacientes</div>
        <h2 className="omm-h2"><em>Algunos resultados.</em></h2>
      </div>
      <div className="omm-testimonials__grid">
        {items.map((x, i) => (
          <figure className="omm-quote" key={i}>
            <blockquote>"{x.q}"</blockquote>
            <figcaption>
              <div className="omm-quote__avatar" aria-hidden="true">{x.n[0]}</div>
              <div>
                <div className="omm-quote__name">{x.n}</div>
                <div className="omm-quote__meta">{x.c}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

// FAQ — hairline dividers
function FAQ() {
  const [open, setOpen] = React.useState(0);
  const qs = [
    { q: "¿Cuánto tarda en verse resultados?", a: "Los primeros cambios son visibles alrededor del mes 3. Los resultados consistentes requieren mínimo 6 meses — así funciona el folículo." },
    { q: "¿Qué incluye el protocolo?", a: "Evaluación médica inicial, formulación mensual de Dutasterida 0.5mg + Minoxidil 5mg, mensajería directa con tu dermatólogo, envío a domicilio y seguimiento mensual con ajustes." },
    { q: "¿Hay efectos secundarios?", a: "Como todo medicamento, existen efectos posibles. Tu dermatólogo los discute contigo en la evaluación inicial y ajusta el protocolo según tu respuesta." },
    { q: "¿Puedo cancelar?", a: "Sí. El plan es mensual en su facturación interna y puedes suspender el protocolo cuando quieras, sin penalización." },
    { q: "¿Es seguro sin consulta presencial?", a: "Sí, bajo supervisión de un dermatólogo certificado. La evaluación fotográfica y el historial médico permiten un diagnóstico preciso para la mayoría de los casos de alopecia androgénica." },
  ];
  return (
    <section className="omm-faq" id="faq">
      <div className="omm-section-head omm-section-head--left">
        <div className="omm-eyebrow">Preguntas frecuentes</div>
        <h2 className="omm-h2">Antes de empezar.</h2>
      </div>
      <div className="omm-faq__list">
        {qs.map((x, i) => (
          <div className={"omm-faq__item" + (open === i ? " is-open" : "")} key={i} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="omm-faq__q">
              <span>{x.q}</span>
              <span className="omm-faq__mark">{open === i ? "–" : "+"}</span>
            </div>
            {open === i && <div className="omm-faq__a">{x.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// FinalCTA — dark section
function FinalCTA() {
  return (
    <section className="omm-final" id="evaluacion">
      <div className="omm-final__inner">
        <h2 className="omm-final__h">
          La ventana está abierta.<br/>
          <em>El folículo responde.</em>
        </h2>
        <a className="omm-btn omm-btn--on-dark" href="#">
          Empieza ahora <span className="omm-arrow">→</span>
        </a>
        <div className="omm-final__meta">Evaluación médica gratuita · 5 minutos</div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="omm-footer">
      <div className="omm-footer__top">
        <img className="omm-footer__logo" src="../../assets/omme-logo-full.png" alt="omme" />
        <div className="omm-footer__cols">
          <div>
            <div className="omm-footer__h">Protocolo</div>
            <a>Cómo funciona</a><a>Precios</a><a>FAQ</a>
          </div>
          <div>
            <div className="omm-footer__h">Omme</div>
            <a>Sobre nosotros</a><a>Equipo médico</a><a>Prensa</a>
          </div>
          <div>
            <div className="omm-footer__h">Legal</div>
            <a>Privacidad</a><a>Términos</a><a>Aviso médico</a>
          </div>
        </div>
      </div>
      <div className="omm-footer__fine">
        Omme opera bajo supervisión de dermatólogos certificados por el Consejo Mexicano de Dermatología.
        La información y productos presentados no sustituyen un diagnóstico médico presencial en casos complejos.
        © 2026 Omme — Ciudad de México.
      </div>
    </footer>
  );
}

Object.assign(window, { Testimonials, FAQ, FinalCTA, Footer });
