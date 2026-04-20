// Animated3DPill — a crisp, 3D-looking pharmaceutical capsule
// Rendered entirely in CSS + JS. Subtle parallax on mouse, continuous slow rotation,
// floating Y loop. The capsule is composed of two hemispheres + a center label.
// Two halves: amber (Dutasterida) top, deep ink (Minoxidil) bottom.

function Animated3DPill({ compact = false }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mouse parallax — subtle. Tilt pill ± 8°.
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.setProperty('--mx', dx.toFixed(3));
      el.style.setProperty('--my', dy.toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty('--mx', '0');
      el.style.setProperty('--my', '0');
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className={"omm-pill3d " + (compact ? "is-compact" : "")} ref={ref}>
      <div className="omm-pill3d__scene">
        <div className="omm-pill3d__halo"></div>
        <div className="omm-pill3d__shadow"></div>
        <div className="omm-pill3d__capsule">
          {/* Top hemisphere — amber */}
          <div className="omm-pill3d__half omm-pill3d__half--top">
            <div className="omm-pill3d__gloss"></div>
            <div className="omm-pill3d__rim"></div>
          </div>
          {/* Bottom hemisphere — ink black */}
          <div className="omm-pill3d__half omm-pill3d__half--bot">
            <div className="omm-pill3d__gloss"></div>
            <div className="omm-pill3d__rim"></div>
            <div className="omm-pill3d__stamp">
              <div className="omm-pill3d__wordmark">omme</div>
              <div className="omm-pill3d__rule"></div>
              <div className="omm-pill3d__code">DUT 0.5mg + MIN 5mg</div>
            </div>
          </div>
          {/* Glow ring behind seam */}
          <div className="omm-pill3d__glow-ring"></div>
          {/* Seam band */}
          <div className="omm-pill3d__seam"></div>
        </div>
      </div>
      <div className="omm-pill3d__meta">
        <span className="omm-pill3d__dot"></span>
        OMM·01 · Protocolo
      </div>
    </div>
  );
}

Object.assign(window, { Animated3DPill });
