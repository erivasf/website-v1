// Omme — Sticky top nav
// Warm-glass blur over cream, pill CTA
function Nav() {
  return (
    <nav className="omm-nav">
      <a className="omm-nav__logo" href="#">
        <img src="../../assets/omme-logo-full.png" alt="omme" />
      </a>
      <div className="omm-nav__links">
        <a href="#protocolo">Protocolo</a>
        <a href="#como">Cómo funciona</a>
        <a href="#precios">Precios</a>
        <a href="#faq">FAQ</a>
      </div>
      <a className="omm-btn omm-btn--primary omm-btn--sm" href="#evaluacion">
        Empieza tu evaluación <span className="omm-arrow">→</span>
      </a>
    </nav>
  );
}

Object.assign(window, { Nav });
