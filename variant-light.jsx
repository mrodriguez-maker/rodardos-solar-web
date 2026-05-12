/* variant-light.jsx — Variation D: Industrial LIGHT
   Industrial / data-driven feel of B, but on white. Navy headlines, monospace numbers,
   minimal icon system, generous whitespace. Real Tastiota photos. */

const PHOTOS_REAL = {
  rowClean: 'assets/desh-01-row-clean.jpg',
  tallGrass: 'assets/desh-02-tall-grass.jpg',
  overgrowth: 'assets/desh-03-overgrowth.jpg',
  workerTrimmer: 'assets/desh-04-worker-trimmer.jpg',
  workerRow: 'assets/desh-05-worker-row.jpg',
  tracker: 'assets/desh-06-tracker.jpg',
  panelAngle: 'assets/desh-07-panel-angle.jpg',
  d8: 'assets/desh-08.jpg',
  d9: 'assets/desh-09.jpg',
  d10: 'assets/desh-10.jpg',
  d11: 'assets/desh-11.jpg',
  d12: 'assets/desh-12.jpg',
  d13: 'assets/desh-13.jpg',
};
window.PHOTOS_REAL = PHOTOS_REAL;

const HeaderD = () => (
  <header style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    padding: '20px 0',
    borderBottom: '1px solid rgba(20,36,126,0.08)',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <RodardosWordmark color="var(--marino)" arc="var(--cielo)" />
        <span style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--marino)',
          padding: '4px 10px', border: '1px solid rgba(20,36,126,0.2)', borderRadius: 2,
          letterSpacing: '0.1em',
        }}>SOLAR · DIVISION_</span>
      </div>
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Servicios', 'Capacidades', 'Caso · Tastiota', 'Cotización'].map(l => (
          <a key={l} style={{
            color: 'var(--marino)', fontSize: 13, fontFamily: 'var(--font-mono)',
            opacity: 0.85, letterSpacing: '0.04em',
          }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--marino)', color: '#fff', padding: '12px 22px', fontSize: 13,
          fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', borderRadius: 2,
        }}>SOLICITAR_PROPUESTA →</button>
      </nav>
    </div>
  </header>
);

const HeroD = () => (
  <section style={{
    position: 'relative', minHeight: 820, color: 'var(--ink)',
    background: '#fff', overflow: 'hidden', paddingTop: 110,
  }}>
    {/* Subtle grid */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, pointerEvents: 'none' }} aria-hidden>
      <defs>
        <pattern id="gridD" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(20,36,126,0.06)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridD)"/>
    </svg>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'center', minHeight: 580 }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32,
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: 'var(--marino)',
            padding: '6px 12px', background: 'var(--cielo-pale)', borderRadius: 2,
          }}>
            <span style={{ width: 8, height: 8, background: '#1F9B5A', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(31,155,90,0.18)' }}/>
            <span>OPERATING_TASTIOTA · 27.9°N · 110.9°W</span>
          </div>
          <h1 style={{
            fontSize: 88, lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.03em',
            color: 'var(--marino)', marginBottom: 28, textWrap: 'balance',
          }}>
            Mantenemos en línea<br/>
            <span style={{ color: 'var(--cielo)' }}>cada watt</span> de tu parque.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 560, color: 'var(--ink-soft)', marginBottom: 36 }}>
            Limpieza, vegetación y drones para parques solares a gran escala. Operación
            medible — performance ratio, soiling, tiempos de respuesta — reportada al
            asset manager cada semana.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
            <button className="btn btn-primary" style={{
              background: 'var(--marino)', color: '#fff', padding: '18px 28px',
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em', borderRadius: 2,
            }}>SOLICITAR_PROPUESTA →</button>
            <button className="btn" style={{
              color: 'var(--marino)', border: '1px solid rgba(20,36,126,0.25)', padding: '18px 28px',
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em', borderRadius: 2,
            }}>VER_TASTIOTA.MD</button>
          </div>
          {/* Trust strip */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            paddingTop: 24, borderTop: '1px solid rgba(20,36,126,0.1)',
          }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.1em' }}>
              CLIENTE_ACTIVO_
            </div>
            <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-soft)' }}>
              <span><strong style={{ color: 'var(--marino)' }}>Reverau</strong> · O&M Revergy Group</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span><strong style={{ color: 'var(--marino)' }}>Canadian Solar</strong> · BiHiKu7 Cert.</span>
            </div>
          </div>
        </div>

        {/* Right: photo with telemetry overlay */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', borderRadius: 4 }}>
            <img src={PHOTOS_REAL.tracker} alt="Parque Solar Tastiota"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            {/* Corner crops */}
            <div style={{ position: 'absolute', top: 12, left: 12, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              IMG_001 · TRACKER_SINGLE_AXIS
            </div>
            <div style={{ position: 'absolute', top: 12, right: 12, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              REC · {new Date().toISOString().slice(0,10)}
            </div>
          </div>
          {/* Floating data card */}
          <div style={{
            position: 'absolute', bottom: -32, left: -32, right: 24,
            background: '#fff', border: '1px solid rgba(20,36,126,0.12)',
            boxShadow: '0 24px 48px -16px rgba(20,36,126,0.18)',
            padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          }}>
            {[
              ['MODULES_CLEANED', '288,580', 'Tastiota · Caracolí'],
              ['HECTÁREAS', '215', 'útiles · 646,750 m²'],
            ].map(([k, v, sub], i) => (
              <div key={i} style={{
                padding: i === 1 ? '0 0 0 24px' : '0 24px 0 0',
                borderRight: i === 0 ? '1px solid rgba(20,36,126,0.1)' : 'none',
              }}>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.14em', marginBottom: 8 }}>{k}</div>
                <div className="tabular" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--marino)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.55, marginTop: 6, color: 'var(--ink)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom telemetry strip — light variant */}
      <div style={{
        marginTop: 96, padding: '24px 0',
        borderTop: '1px solid rgba(20,36,126,0.12)',
        borderBottom: '1px solid rgba(20,36,126,0.12)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {[
          { label: 'PANELES_LIMPIEZA', value: '288,580', unit: 'u', delta: '+100%' },
          { label: 'SUPERFICIE', value: '646,750', unit: 'm²', delta: '215 ha' },
          { label: 'SLA_CUMPLIMIENTO', value: '100', unit: '%', delta: 'Q4·26' },
          { label: 'EQUIPO_PROPIO', value: '0', unit: 'subs', delta: 'in_house' },
        ].map((k, i) => (
          <div key={i} style={{
            padding: '0 28px',
            borderLeft: i > 0 ? '1px solid rgba(20,36,126,0.12)' : 'none',
          }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.14em', marginBottom: 8 }}>{k.label}</div>
            <div className="tabular" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--marino)', display: 'flex', alignItems: 'baseline', gap: 6 }}>
              {k.value}<span style={{ fontSize: 14, opacity: 0.55, fontWeight: 400 }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#1F9B5A', marginTop: 4 }}>↑ {k.delta}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesD = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.12em', marginBottom: 16 }}>// SERVICES.json</div>
          <h2 style={{ fontSize: 60, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--marino)', maxWidth: 800 }}>
            Tres servicios.<br/>Un solo SLA.
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--marino)', opacity: 0.6, letterSpacing: '0.08em' }}>
          [03 / 03 ACTIVE]
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          // Use real photos for the deshierbe service
          const realPhoto = i === 0 ? PHOTOS_REAL.panelAngle
                         : i === 1 ? PHOTOS_REAL.workerTrimmer
                         : PHOTOS_REAL.tracker;
          return (
            <article key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr 240px',
              gap: 32, padding: '40px 0', alignItems: 'center',
              borderTop: '1px solid rgba(20,36,126,0.1)',
              borderBottom: i === SERVICES.length - 1 ? '1px solid rgba(20,36,126,0.1)' : 'none',
            }}>
              <div>
                <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--marino)', lineHeight: 1 }}>0{i+1}</div>
                <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--marino)', opacity: 0.55, letterSpacing: '0.14em' }}>SVC_0{i+1}</div>
              </div>
              <div>
                <div style={{ color: 'var(--marino)', marginBottom: 20 }}><I/></div>
                <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--marino)', marginBottom: 6 }}>{s.title}</h3>
                <div style={{ fontSize: 12, color: 'var(--marino)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{s.sub.toUpperCase()}</div>
              </div>
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 16 }}>{s.body}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, padding: '4px 10px', border: '1px solid rgba(20,36,126,0.2)',
                      fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', color: 'var(--marino)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', height: 140, overflow: 'hidden', borderRadius: 4 }}>
                <img src={realPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const TastiotaD = () => (
  <section style={{ padding: 'var(--d-section) 0', background: 'var(--paper)', position: 'relative' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.12em', marginBottom: 12 }}>// CASE_STUDY.live</div>
          <h2 style={{ fontSize: 96, lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.035em', color: 'var(--marino)' }}>
            Tastiota<span style={{ color: 'var(--cielo)' }}>.</span>
          </h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)', letterSpacing: '0.12em', marginBottom: 6 }}>STATUS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
            <span style={{ width: 10, height: 10, background: '#1F9B5A', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(31,155,90,0.2)' }}/>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em', color: 'var(--marino)' }}>EN_EJECUCIÓN</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, background: '#fff', border: '1px solid rgba(20,36,126,0.12)' }}>
        <div style={{ padding: 40, borderRight: '1px solid rgba(20,36,126,0.12)' }}>
          <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.015em', color: 'var(--marino)' }}>Parque Solar Caracolí</h3>
          <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.1em', marginBottom: 20, opacity: 0.7 }}>
            CLIENT: REVERAU · REVERGY GROUP
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 24 }}>
            Limpieza one-time de 288,580 paneles bifaciales sobre 215 ha útiles, con cumplimiento
            de las especificaciones técnicas de Canadian Solar para preservar garantía. Ejecución
            en 6 semanas con cuadrilla y maquinaria propia desde Guaymas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 24 }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={PHOTOS_REAL.workerTrimmer} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', bottom: 6, left: 6, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                IMG_002 · DESHIERBE
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={PHOTOS_REAL.rowClean} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', bottom: 6, left: 6, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                IMG_003 · POST_INTERVENCIÓN
              </div>
            </div>
          </div>
          <button className="btn" style={{
            background: 'var(--marino)', color: '#fff', padding: '14px 22px',
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', borderRadius: 2,
          }}>VER_MEMORIA_TÉCNICA →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignContent: 'start' }}>
          {[
            ['MÓDULOS', '288,580', 'unidades'],
            ['MODELO', 'BiHiKu7', 'CS7N-MB-AG'],
            ['POTENCIA', '640–665', 'W bifaciales'],
            ['SUPERFICIE', '646,750', 'm² · 215 ha'],
            ['ESTRUCTURA', 'Tracker', 'single-axis'],
            ['PLAZO', '6', 'semanas'],
            ['CONTRATISTA', 'RODARDOS', 'Guaymas, Sonora'],
            ['ALCANCE', '3 SVC', 'limp+veg+caminos'],
          ].map(([k, v, sub], i) => (
            <div key={i} style={{
              padding: '28px 24px',
              borderBottom: i < 6 ? '1px solid rgba(20,36,126,0.1)' : 'none',
              borderRight: i % 2 === 0 ? '1px solid rgba(20,36,126,0.1)' : 'none',
            }}>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.14em', marginBottom: 10, opacity: 0.7 }}>{k}</div>
              <div className="tabular" style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--marino)' }}>{v}</div>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.55, marginTop: 8, letterSpacing: '0.04em', color: 'var(--ink)' }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DifferentiatorsD = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#fff' }}>
    <div className="container">
      <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.12em', marginBottom: 16 }}>// EDGE.compute</div>
      <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 56, maxWidth: 900, color: 'var(--marino)' }}>
        Tres compromisos que firmamos, ejecutamos y reportamos.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
        {DIFERENCIADORES.map((d, i) => {
          const I = d.icon;
          return (
            <div key={i} style={{
              padding: 40, background: i === 1 ? 'var(--cielo-pale)' : '#fff',
              border: '1px solid rgba(20,36,126,0.12)',
              marginLeft: i > 0 ? -1 : 0,
              minHeight: 280, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <div style={{ color: 'var(--marino)' }}><I/></div>
                <div className="tabular" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--marino)', letterSpacing: '0.1em', opacity: 0.6 }}>EDGE_0{i+1}</div>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.01em', color: 'var(--marino)' }}>{d.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{d.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const FormD = () => (
  <section style={{ padding: 'var(--d-section) 0', background: 'var(--paper)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.12em', marginBottom: 16 }}>// REQUEST_QUOTE.form</div>
          <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 24, color: 'var(--marino)' }}>
            Cotiza tu parque.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 40 }}>
            Respondemos en menos de 48 horas con propuesta técnico-económica:
            alcance, plazo, equipo asignado, SLA y reporte semanal.
          </p>
          <div style={{ padding: 24, border: '1px solid rgba(20,36,126,0.15)', background: '#fff' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)', letterSpacing: '0.1em', marginBottom: 12 }}>
              CONTACT.direct
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--marino)' }}>solar@rodardos.com</div>
            <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 4 }}>+52 622 000 0000 · Guaymas, Sonora</div>
          </div>
        </div>
        <form style={{
          background: '#fff', border: '1px solid rgba(20,36,126,0.12)',
          padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }} onSubmit={(e) => { e.preventDefault(); alert('Cotización enviada (demo)'); }}>
          {[
            ['proyecto', 'NOMBRE_PROYECTO', 'Ej. Parque Solar Caracolí', 'span 2'],
            ['empresa', 'EMPRESA', 'Reverau', null],
            ['rol', 'ROL', 'Asset manager', null],
            ['mw', 'CAPACIDAD_MW', '180', null],
            ['mod', 'N_MODULOS', '288580', null],
            ['estado', 'ESTADO', 'Sonora', null],
            ['fecha', 'FECHA_OBJETIVO', '', null],
            ['email', 'EMAIL', 'contacto@empresa.com', 'span 2'],
          ].map(([id, label, ph, span]) => (
            <div key={id} className="field" style={{ gridColumn: span || 'auto' }}>
              <label style={{ fontFamily: 'var(--font-mono)', color: 'var(--marino)', fontSize: 11 }}>{label}</label>
              <input placeholder={ph} type={id === 'fecha' ? 'date' : 'text'}
                style={{ background: 'transparent', border: '1px solid rgba(20,36,126,0.2)', color: 'var(--ink)', borderRadius: 0, padding: '14px 16px' }}/>
            </div>
          ))}
          <button type="submit" style={{
            gridColumn: 'span 2', padding: 18, background: 'var(--marino)', color: '#fff',
            fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', fontSize: 13,
            border: 'none', cursor: 'pointer', borderRadius: 0,
          }}>SUBMIT_REQUEST →</button>
        </form>
      </div>
    </div>
  </section>
);

const FooterD = () => (
  <footer style={{ background: '#fff', color: 'var(--ink)', padding: '48px 0', borderTop: '1px solid rgba(20,36,126,0.12)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
      <RodardosWordmark color="var(--marino)" arc="var(--cielo)"/>
      <div style={{ display: 'flex', gap: 40, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--marino)', opacity: 0.7 }}>
        <span>© 2026 RODARDOS S.A. DE C.V.</span>
        <span>SOLAR_DIVISION</span>
        <span>GUAYMAS · MX</span>
      </div>
    </div>
  </footer>
);

const VariantLight = () => (
  <div className="artboard-page" data-screen-label="Variante D · Industrial Light">
    <HeaderD/>
    <HeroD/>
    <ServicesD/>
    <TastiotaD/>
    <DifferentiatorsD/>
    <FormD/>
    <FooterD/>
  </div>
);

window.VariantLight = VariantLight;
