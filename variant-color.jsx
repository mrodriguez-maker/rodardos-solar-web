/* variant-color.jsx — Variation F: Industrial Dark + MÁS COLOR
   Base navy (como B), pero con uso intenso de cielo + bloques de color saturado,
   gradientes radiales, acentos vivos. Fotos reales de Tastiota. */

const PHOTOS_F = (typeof window !== 'undefined' && window.PHOTOS_REAL) || {
  rowClean: 'assets/desh-01-row-clean.jpg',
  tallGrass: 'assets/desh-02-tall-grass.jpg',
  overgrowth: 'assets/desh-03-overgrowth.jpg',
  workerTrimmer: 'assets/desh-04-worker-trimmer.jpg',
  workerRow: 'assets/desh-05-worker-row.jpg',
  tracker: 'assets/desh-06-tracker.jpg',
  panelAngle: 'assets/desh-07-panel-angle.jpg',
};

const HeaderF = () => (
  <header style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    padding: '20px 0',
    borderBottom: '1px solid rgba(143,196,243,0.2)',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <RodardosWordmark color="#fff" arc="var(--cielo)" />
        <span style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--cielo)',
          padding: '4px 10px', border: '1px solid rgba(143,196,243,0.4)', borderRadius: 2,
          letterSpacing: '0.1em', background: 'rgba(143,196,243,0.08)',
        }}>SOLAR · DIVISION_</span>
      </div>
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Servicios', 'Capacidades', 'Caso · Tastiota', 'Cotización'].map(l => (
          <a key={l} style={{ color: '#fff', fontSize: 13, fontFamily: 'var(--font-mono)', opacity: 0.85, letterSpacing: '0.04em' }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--cielo)', color: 'var(--marino-deep)', padding: '11px 20px', fontSize: 13,
          fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', borderRadius: 2, fontWeight: 700,
        }}>SOLICITAR_PROPUESTA →</button>
      </nav>
    </div>
  </header>
);

const HeroF = () => (
  <section style={{
    position: 'relative', minHeight: 920, color: '#fff',
    background: '#0A1454', overflow: 'hidden', paddingTop: 120,
  }}>
    {/* Multi-layer color blobs */}
    <div style={{
      position: 'absolute', top: '-200px', right: '-100px', width: 800, height: 800,
      background: 'radial-gradient(circle, rgba(143,196,243,0.55) 0%, transparent 60%)',
      pointerEvents: 'none',
    }}/>
    <div style={{
      position: 'absolute', bottom: '-300px', left: '-200px', width: 900, height: 900,
      background: 'radial-gradient(circle, rgba(74,135,255,0.4) 0%, transparent 65%)',
      pointerEvents: 'none',
    }}/>
    <div style={{
      position: 'absolute', top: '20%', left: '40%', width: 500, height: 500,
      background: 'radial-gradient(circle, rgba(20,180,255,0.25) 0%, transparent 70%)',
      pointerEvents: 'none',
    }}/>

    {/* Grid lines */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} aria-hidden>
      <defs>
        <pattern id="gridF" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#8FC4F3" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridF)"/>
    </svg>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32,
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em',
            padding: '8px 14px',
            background: 'linear-gradient(90deg, rgba(143,196,243,0.18), rgba(143,196,243,0.04))',
            border: '1px solid rgba(143,196,243,0.3)', borderRadius: 999,
          }}>
            <span style={{ width: 8, height: 8, background: '#3FE07A', borderRadius: '50%', boxShadow: '0 0 12px #3FE07A' }}/>
            <span style={{ color: 'var(--cielo)' }}>OPERATING_</span>
            <span style={{ opacity: 0.7 }}>· TASTIOTA · 27.9°N · 110.9°W</span>
          </div>
          <h1 style={{
            fontSize: 96, lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.035em',
            marginBottom: 32, textWrap: 'balance',
          }}>
            Mantenemos<br/>
            en línea cada<br/>
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #8FC4F3 0%, #4A87FF 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              fontStyle: 'italic',
            }}>watt</span> de tu parque.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580, opacity: 0.88, marginBottom: 40 }}>
            Limpieza, vegetación y drones para parques solares a gran escala.
            Operación medible — performance ratio, soiling, tiempos de respuesta —
            reportada al asset manager cada semana.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn" style={{
              background: 'var(--cielo)', color: 'var(--marino-deep)', padding: '20px 32px',
              fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em',
              borderRadius: 2, fontWeight: 700,
              boxShadow: '0 12px 32px -8px rgba(143,196,243,0.5)',
            }}>SOLICITAR_PROPUESTA →</button>
            <button className="btn" style={{
              color: '#fff', border: '1px solid rgba(143,196,243,0.4)', padding: '20px 32px',
              fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em', borderRadius: 2,
              background: 'rgba(143,196,243,0.05)',
            }}>VER_TASTIOTA.MD</button>
          </div>
        </div>

        {/* Right: stacked photo cards with color frames */}
        <div style={{ position: 'relative', height: 580 }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '78%', aspectRatio: '4/5',
            borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 32px 80px -16px rgba(0,0,0,0.5)',
            border: '2px solid var(--cielo)',
          }}>
            <img src={PHOTOS_F.tracker} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, rgba(10,20,84,0.6))',
            }}/>
            <div style={{
              position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)',
              fontSize: 10, letterSpacing: '0.14em', textShadow: '0 1px 2px rgba(0,0,0,0.6)',
            }}>IMG_001 · TRACKER_SINGLE_AXIS</div>
          </div>
          <div style={{
            position: 'absolute', bottom: 24, left: 0, width: '52%', aspectRatio: '4/3',
            borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 24px 48px -16px rgba(0,0,0,0.6)',
            border: '2px solid #4A87FF',
          }}>
            <img src={PHOTOS_F.workerTrimmer} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{
              position: 'absolute', top: 8, left: 8, fontFamily: 'var(--font-mono)',
              fontSize: 9, letterSpacing: '0.14em', textShadow: '0 1px 2px rgba(0,0,0,0.6)',
            }}>IMG_002 · DESHIERBE_OPERATIVO</div>
          </div>
          {/* Floating data card */}
          <div style={{
            position: 'absolute', top: '38%', right: '-8%',
            background: 'linear-gradient(135deg, #4A87FF 0%, #1F4FCC 100%)',
            color: '#fff', padding: '20px 26px', borderRadius: 4,
            boxShadow: '0 24px 48px -8px rgba(74,135,255,0.5)',
            minWidth: 220,
          }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', opacity: 0.9, marginBottom: 8 }}>MODULES_BAJO_LIMPIEZA</div>
            <div className="tabular" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>288,580</div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.85, marginTop: 8 }}>Canadian Solar BiHiKu7</div>
          </div>
        </div>
      </div>

      {/* Bottom telemetry — colored bands */}
      <div style={{
        marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
      }}>
        {[
          { label: 'PANELES', value: '288,580', unit: 'u', delta: '+100%', tone: 'rgba(143,196,243,0.18)', accent: 'var(--cielo)' },
          { label: 'SUPERFICIE', value: '646,750', unit: 'm²', delta: '215 ha', tone: 'rgba(74,135,255,0.2)', accent: '#7AA8FF' },
          { label: 'SLA', value: '100', unit: '%', delta: 'Q4·26', tone: 'rgba(31,155,90,0.2)', accent: '#3FE07A' },
          { label: 'EQUIPO_PROPIO', value: '0', unit: 'subs', delta: 'in_house', tone: 'rgba(245,184,0,0.2)', accent: '#FFD466' },
        ].map((k, i) => (
          <div key={i} style={{
            padding: '24px 24px',
            background: k.tone,
            borderTop: `2px solid ${k.accent}`,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: k.accent, letterSpacing: '0.14em' }}>{k.label}</div>
            <div className="tabular" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: 6 }}>
              {k.value}<span style={{ fontSize: 14, opacity: 0.65, fontWeight: 400 }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: k.accent, opacity: 0.95 }}>↑ {k.delta}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesF = () => (
  <section style={{
    padding: 'var(--d-section) 0',
    background: 'linear-gradient(180deg, #0A1454 0%, #122270 100%)',
    color: '#fff', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '20%', right: '-200px', width: 600, height: 600,
      background: 'radial-gradient(circle, rgba(143,196,243,0.18) 0%, transparent 65%)',
    }}/>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 16 }}>// SERVICES.json</div>
          <h2 style={{ fontSize: 72, lineHeight: 0.92, fontWeight: 800, letterSpacing: '-0.03em', maxWidth: 800 }}>
            Tres servicios.<br/>
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #8FC4F3, #4A87FF)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>Un solo SLA.</span>
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cielo)', letterSpacing: '0.08em' }}>
          [03 / 03 ACTIVE]
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          const realPhoto = i === 0 ? PHOTOS_F.panelAngle
                         : i === 1 ? PHOTOS_F.workerRow
                         : PHOTOS_F.tracker;
          const accentColor = i === 0 ? 'var(--cielo)' : i === 1 ? '#7AA8FF' : '#A5C9FF';
          return (
            <article key={i} style={{
              background: 'linear-gradient(180deg, rgba(143,196,243,0.08) 0%, rgba(143,196,243,0.02) 100%)',
              border: '1px solid rgba(143,196,243,0.2)',
              borderTop: `3px solid ${accentColor}`,
              display: 'flex', flexDirection: 'column',
              transition: 'transform .2s ease, border-color .2s ease',
            }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img src={realPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, rgba(10,20,84,0.55), transparent 60%)`,
                }}/>
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
                  background: accentColor, color: 'var(--marino-deep)',
                  padding: '4px 10px', fontWeight: 700,
                }}>SVC_0{i+1}</div>
              </div>
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <div style={{ color: accentColor }}><I/></div>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <div style={{ fontSize: 12, color: accentColor, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginTop: 4 }}>{s.sub.toUpperCase()}</div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.78 }}>{s.body}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(143,196,243,0.15)' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 10, padding: '4px 10px', border: `1px solid ${accentColor}55`,
                      fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', color: accentColor,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const TastiotaF = () => (
  <section style={{
    padding: 'var(--d-section) 0', position: 'relative', overflow: 'hidden',
    background: '#0A1454', color: '#fff',
  }}>
    {/* Color photo strip behind */}
    <div style={{
      position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
      backgroundImage: `url(${PHOTOS_F.tracker})`,
      backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25,
    }}/>
    <div style={{
      position: 'absolute', top: 0, right: 0, width: '60%', height: '100%',
      background: 'linear-gradient(90deg, #0A1454 30%, transparent 100%)',
    }}/>
    <div style={{
      position: 'absolute', bottom: '-20%', left: '-10%', width: 700, height: 700,
      background: 'radial-gradient(circle, rgba(74,135,255,0.3) 0%, transparent 65%)',
    }}/>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 12 }}>// CASE_STUDY.live</div>
          <h2 style={{ fontSize: 104, lineHeight: 0.88, fontWeight: 800, letterSpacing: '-0.04em' }}>
            TASTIOTA<span style={{
              backgroundImage: 'linear-gradient(90deg, #8FC4F3, #4A87FF)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>.</span>
          </h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 6 }}>STATUS</div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end',
            padding: '8px 16px', background: 'rgba(63,224,122,0.15)',
            border: '1px solid rgba(63,224,122,0.4)', borderRadius: 999,
          }}>
            <span style={{ width: 8, height: 8, background: '#3FE07A', borderRadius: '50%', boxShadow: '0 0 10px #3FE07A' }}/>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em' }}>EN_EJECUCIÓN</span>
          </div>
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(143,196,243,0.06), rgba(74,135,255,0.04))',
        border: '1px solid rgba(143,196,243,0.25)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
          <div style={{ padding: 40, borderRight: '1px solid rgba(143,196,243,0.2)' }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.015em' }}>Parque Solar Caracolí</h3>
            <p style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.08em', marginBottom: 24 }}>
              CLIENT: REVERAU · REVERGY GROUP
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.88, marginBottom: 28 }}>
              Limpieza one-time de 288,580 paneles bifaciales sobre 215 ha útiles, con cumplimiento
              de las especificaciones técnicas de Canadian Solar para preservar garantía.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={PHOTOS_F.tallGrass} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{ position: 'absolute', top: 8, left: 8, padding: '3px 8px', background: '#FFD466', color: 'var(--marino-deep)', fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em' }}>BASELINE</div>
              </div>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={PHOTOS_F.rowClean} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{ position: 'absolute', top: 8, left: 8, padding: '3px 8px', background: '#3FE07A', color: 'var(--marino-deep)', fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em' }}>POST</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {[
              ['MÓDULOS', '288,580', 'unidades', 'var(--cielo)'],
              ['MODELO', 'BiHiKu7', 'CS7N-MB-AG', '#7AA8FF'],
              ['POTENCIA', '640–665', 'W bifaciales', '#A5C9FF'],
              ['SUPERFICIE', '646,750', 'm² · 215 ha', 'var(--cielo)'],
              ['ESTRUCTURA', 'Tracker', 'single-axis', '#7AA8FF'],
              ['PLAZO', '6', 'semanas', '#3FE07A'],
              ['CONTRATISTA', 'RODARDOS', 'Guaymas, Sonora', 'var(--cielo)'],
              ['ALCANCE', '3 SVC', 'limp+veg+caminos', '#FFD466'],
            ].map(([k, v, sub, accent], i) => (
              <div key={i} style={{
                padding: '28px 28px',
                borderBottom: i < 6 ? '1px solid rgba(143,196,243,0.15)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid rgba(143,196,243,0.15)' : 'none',
              }}>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: accent, letterSpacing: '0.14em', marginBottom: 10 }}>{k}</div>
                <div className="tabular" style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.55, marginTop: 8, letterSpacing: '0.04em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DifferentiatorsF = () => (
  <section style={{
    padding: 'var(--d-section) 0',
    background: 'linear-gradient(180deg, #0A1454, #1F4FCC 100%, #122270 100%)',
    color: '#fff', position: 'relative', overflow: 'hidden',
  }}>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 16 }}>// EDGE.compute</div>
      <h2 style={{ fontSize: 64, lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 56, maxWidth: 1000 }}>
        Tres compromisos que firmamos,<br/>
        <span style={{
          backgroundImage: 'linear-gradient(90deg, #8FC4F3, #4A87FF, #8FC4F3)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>ejecutamos y reportamos.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {DIFERENCIADORES.map((d, i) => {
          const I = d.icon;
          const grad = i === 0
            ? 'linear-gradient(135deg, rgba(143,196,243,0.22), rgba(143,196,243,0.04))'
            : i === 1
            ? 'linear-gradient(135deg, rgba(74,135,255,0.25), rgba(74,135,255,0.04))'
            : 'linear-gradient(135deg, rgba(31,155,90,0.22), rgba(31,155,90,0.04))';
          const accent = i === 0 ? 'var(--cielo)' : i === 1 ? '#7AA8FF' : '#3FE07A';
          return (
            <div key={i} style={{
              padding: 36, background: grad,
              border: `1px solid ${accent}40`,
              borderTop: `3px solid ${accent}`,
              minHeight: 280, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ color: accent }}><I/></div>
                <div className="tabular" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: accent, letterSpacing: '0.08em' }}>EDGE_0{i+1}</div>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.01em' }}>{d.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.82 }}>{d.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const FormF = () => (
  <section style={{
    padding: 'var(--d-section) 0',
    background: 'linear-gradient(180deg, #0A1454 0%, #050A2E 100%)',
    color: '#fff', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '10%', right: '-15%', width: 700, height: 700,
      background: 'radial-gradient(circle, rgba(143,196,243,0.2) 0%, transparent 65%)',
    }}/>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 16 }}>// REQUEST_QUOTE.form</div>
          <h2 style={{ fontSize: 60, lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Cotiza<br/>
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #8FC4F3, #4A87FF)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>tu parque.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.85, marginBottom: 32 }}>
            Respondemos en menos de 48 horas con propuesta técnico-económica:
            alcance, plazo, equipo asignado, SLA y reporte semanal.
          </p>
          <div style={{
            padding: 24, background: 'linear-gradient(135deg, rgba(143,196,243,0.12), rgba(143,196,243,0.02))',
            border: '1px solid rgba(143,196,243,0.3)',
            borderTop: '3px solid var(--cielo)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cielo)', letterSpacing: '0.1em', marginBottom: 12 }}>
              CONTACT.direct
            </div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>solar@rodardos.com</div>
            <div style={{ fontSize: 14, opacity: 0.8, marginTop: 4 }}>+52 622 000 0000 · Guaymas, Sonora</div>
          </div>
        </div>
        <form style={{
          background: 'linear-gradient(135deg, rgba(143,196,243,0.08), rgba(74,135,255,0.04))',
          border: '1px solid rgba(143,196,243,0.25)',
          padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
          backdropFilter: 'blur(8px)',
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
              <label style={{ fontFamily: 'var(--font-mono)', color: 'var(--cielo)', fontSize: 11 }}>{label}</label>
              <input placeholder={ph} type={id === 'fecha' ? 'date' : 'text'}
                style={{ background: 'rgba(10,20,84,0.5)', border: '1px solid rgba(143,196,243,0.3)', color: '#fff', borderRadius: 0, padding: '14px 16px' }}/>
            </div>
          ))}
          <button type="submit" style={{
            gridColumn: 'span 2', padding: 20,
            background: 'linear-gradient(90deg, #8FC4F3 0%, #4A87FF 100%)',
            color: 'var(--marino-deep)',
            fontFamily: 'var(--font-mono)', fontWeight: 800, letterSpacing: '0.08em', fontSize: 14,
            border: 'none', cursor: 'pointer', borderRadius: 0,
            boxShadow: '0 12px 32px -8px rgba(143,196,243,0.4)',
          }}>SUBMIT_REQUEST →</button>
        </form>
      </div>
    </div>
  </section>
);

const FooterF = () => (
  <footer style={{ background: '#050A2E', color: '#fff', padding: '48px 0', borderTop: '1px solid rgba(143,196,243,0.25)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
      <RodardosWordmark color="#fff" arc="var(--cielo)"/>
      <div style={{ display: 'flex', gap: 40, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', opacity: 0.7 }}>
        <span>© 2026 RODARDOS S.A. DE C.V.</span>
        <span style={{ color: 'var(--cielo)' }}>SOLAR_DIVISION</span>
        <span>GUAYMAS · MX</span>
      </div>
    </div>
  </footer>
);

const VariantColor = () => (
  <div className="artboard-page artboard-page--dark" data-screen-label="Variante F · Industrial Color">
    <HeaderF/>
    <HeroF/>
    <ServicesF/>
    <TastiotaF/>
    <DifferentiatorsF/>
    <FormF/>
    <FooterF/>
  </div>
);

window.VariantColor = VariantColor;
