function Animated3DPill({ compact = false }) {
  return (
    <div className={"omm-pill3d " + (compact ? "is-compact" : "")}>
      <div className="omm-pill3d__wrap">
        <div className="omm-pill3d__pill">
          <div className="omm-pill3d__body">
            <div className="omm-pill3d__base"></div>
            <div className="omm-pill3d__light-main"></div>
            <div className="omm-pill3d__light-edge"></div>
            <div className="omm-pill3d__shadow-inner"></div>
            <div className="omm-pill3d__seam"></div>
            <div className="omm-pill3d__seam-hi"></div>
            <div className="omm-pill3d__rim"></div>
            <div className="omm-pill3d__specular"></div>
          </div>
        </div>
        <div className="omm-pill3d__shadow"></div>
      </div>
      <div className="omm-pill3d__meta">
        <span className="omm-pill3d__dot"></span>
        OMM·01 · Protocolo
      </div>
    </div>
  );
}

Object.assign(window, { Animated3DPill });
