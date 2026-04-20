// Protocol — product section with ingredient callouts
function Protocol() {
  return (
    <section className="omm-protocol" id="protocolo">
      <div className="omm-protocol__media">
        <Animated3DPill />
        {/* Ingredient callouts */}
        <div className="omm-callout omm-callout--a">
          <div className="omm-callout__line"></div>
          <div className="omm-callout__tag">
            <div className="omm-callout__k">Dutasterida</div>
            <div className="omm-callout__v">0.5mg · oral</div>
          </div>
        </div>
        <div className="omm-callout omm-callout--b">
          <div className="omm-callout__line"></div>
          <div className="omm-callout__tag">
            <div className="omm-callout__k">Minoxidil</div>
            <div className="omm-callout__v">5% · tópico</div>
          </div>
        </div>
      </div>
      <div className="omm-protocol__text">
        <div className="omm-eyebrow">El protocolo</div>
        <h2 className="omm-h2">
          No es un shampoo.<br/>
          <em>Es un protocolo médico.</em>
        </h2>
        <p className="omm-lead">
          Formulado por dermatólogos certificados. Entregado en tu casa cada mes,
          con seguimiento clínico incluido.
        </p>
        <ul className="omm-bullets">
          <li><span className="omm-check">✓</span> Dosis ajustadas a tu caso</li>
          <li><span className="omm-check">✓</span> Envío discreto mensual</li>
          <li><span className="omm-check">✓</span> Historial clínico privado</li>
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { Protocol });
