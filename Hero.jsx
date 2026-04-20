// Hero — headline + floating amber capsule placeholder
function Hero() {
  return (
    <section className="omm-hero">
      <div className="omm-hero__text">
        <div className="omm-eyebrow">Protocolo médico · Hombres</div>
        <h1 className="omm-hero__h">
          Tu cabello<br/>tiene solución.
        </h1>
        <p className="omm-hero__sub">
          Protocolo personalizado con seguimiento mensual por un dermatólogo
          certificado. Sin visitas al consultorio.
        </p>
        <div className="omm-hero__ctas">
          <a className="omm-btn omm-btn--primary" href="#evaluacion">
            Empieza tu evaluación gratuita <span className="omm-arrow">→</span>
          </a>
          <a className="omm-btn omm-btn--ghost" href="#protocolo">
            Conoce el protocolo
          </a>
        </div>
        <div className="omm-hero__trust">
          <div className="omm-hero__trust-avatar" aria-hidden="true">MA</div>
          <div>
            <div className="omm-hero__trust-name">Dr. Manuel Amador</div>
            <div className="omm-hero__trust-role">Dermatólogo certificado · Director médico</div>
          </div>
        </div>
      </div>

      {/* Animated 3D pill */}
      <div className="omm-hero__media">
        <div className="omm-hero__meta-corner">OMM·01 · Protocolo</div>
        <div className="omm-hero__meta-corner omm-hero__meta-corner--right">Lote MX·2026.04</div>
        <Animated3DPill />
        <div className="omm-hero__placeholder-note">omm-pill3d · CSS/JS render</div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
