/* variant-data.jsx — Variation B: Industrial Data-Driven
   Dark navy base, monospace numbers, telemetry/dashboard feel. NextEra/Array vibe. */

const HeaderB = () => (
  <header style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    padding: '20px 0',
    borderBottom: '1px solid rgba(143,196,243,0.15)',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <RodardosWordmark color="#fff" arc="var(--cielo)" />
        <span style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--cielo)',
          padding: '4px 8px', border: '1px solid rgba(143,196,243,0.3)', borderRadius: 2,
          letterSpacing: '0.1em',
        }}>SOLAR · DIVISION_</span>
      </div>
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Servicios', 'Capacidades', 'Caso · Tastiota', 'Cotización'].map(l => (
          <a key={l} style={{ color: '#fff', fontSize: 13, fontFamily: 'var(--font-mono)', opacity: 0.85, letterSpacing: '0.04em' }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--cielo)', color: 'var(--marino-deep)', padding: '10px 18px', fontSize: 13,
          fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', borderRadius: 2,
        }}>SOLICITAR_PROPUESTA →</button>
      </nav>
    </div>
  </header>
);

const HeroB = () => (
  <section style={{
    position: 'relative', minHeight: 820, color: '#fff',
    background: 'linear-gradient(180deg, #0C1654 0%, #14247E 100%)',
    overflow: 'hidden',
  }}>
    {/* Grid lines */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }} aria-hidden>
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#8FC4F3" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
    {/* Aerial photo on right */}
    <div style={{
      position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%',
      backgroundImage: `url(${PHOTOS.desert})`, backgroundSize: 'cover', backgroundPosition: 'center',
      maskImage: 'linear-gradient(90deg, transparent 0%, black 30%, black 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 30%, black 100%)',
      opacity: 0.55,
    }}/>
    <div style={{
      position: 'absolute', right: 0, top: 0, bottom: 0, width: '60%',
      background: 'linear-gradient(90deg, #0C1654 10%, transparent 60%)',
    }}/>

    <div className="container" style={{ position: 'relative', paddingTop: 160, paddingBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em' }}>
        <span style={{ width: 8, height: 8, background: '#3FE07A', borderRadius: '50%', boxShadow: '0 0 12px #3FE07A' }}/>
        <span style={{ color: 'var(--cielo)' }}>OPERATING_</span>
        <span style={{ opacity: 0.5 }}>· 27.9°N 110.9°W · TASTIOTA, SON</span>
      </div>
      <h1 style={{
        fontSize: 92, lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.03em',
        maxWidth: 1100, marginBottom: 32, textWrap: 'balance',
      }}>
        Mantenemos en línea<br/>
        <span style={{ color: 'var(--cielo)' }}>cada watt</span> de tu parque.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580, opacity: 0.85, marginBottom: 40 }}>
        Limpieza, vegetación, drones. Operación medible — performance ratio,
        soiling, tiempos de respuesta — reportada al asset manager cada semana.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button className="btn" style={{
          background: 'var(--cielo)', color: 'var(--marino-deep)', padding: '18px 28px',
          fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em', borderRadius: 2,
        }}>SOLICITAR_PROPUESTA →</button>
        <button className="btn" style={{
          color: '#fff', border: '1px solid rgba(143,196,243,0.4)', padding: '18px 28px',
          fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em', borderRadius: 2,
        }}>VER_TASTIOTA.MD</button>
      </div>
    </div>

    {/* Telemetry strip */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      borderTop: '1px solid rgba(143,196,243,0.2)',
      background: 'rgba(12,22,84,0.6)', backdropFilter: 'blur(8px)',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {[
          { label: 'PANELES_BAJO_LIMPIEZA', value: '288,580', unit: 'u', delta: '+100%' },
          { label: 'SUPERFICIE', value: '646,750', unit: 'm²', delta: '215 ha' },
          { label: 'SLA_CUMPLIMIENTO', value: '100', unit: '%', delta: 'Q4·26' },
          { label: 'EQUIPO_PROPIO', value: '0', unit: 'subs', delta: 'in_house' },
        ].map((k, i) => (
          <div key={i} style={{
            padding: '24px 28px',
            borderLeft: i > 0 ? '1px solid rgba(143,196,243,0.15)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em' }}>{k.label}</div>
            <div className="tabular" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: 8 }}>
              {k.value}<span style={{ fontSize: 14, opacity: 0.6, fontWeight: 400 }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#3FE07A' }}>↑ {k.delta}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesB = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#0E1840', color: '#fff' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 12 }}>// SERVICES.json</div>
          <h2 style={{ fontSize: 64, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', maxWidth: 800 }}>
            Tres servicios.<br/>Un solo SLA.
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cielo)', opacity: 0.6, letterSpacing: '0.08em' }}>
          [03 / 03 ACTIVE]
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          return (
            <article key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr 200px',
              gap: 32, padding: 32, alignItems: 'center',
              background: 'rgba(143,196,243,0.04)',
              border: '1px solid rgba(143,196,243,0.12)',
              transition: 'background .2s ease',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cielo)' }}>
                <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1 }}>0{i+1}</div>
                <div style={{ marginTop: 8, opacity: 0.6, letterSpacing: '0.1em' }}>SVC_0{i+1}</div>
              </div>
              <div>
                <div style={{ color: 'var(--cielo)', marginBottom: 16 }}><I/></div>
                <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 8 }}>{s.title}</h3>
                <div style={{ fontSize: 13, color: 'var(--cielo)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{s.sub.toUpperCase()}</div>
              </div>
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.78, marginBottom: 16 }}>{s.body}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, padding: '4px 10px', border: '1px solid rgba(143,196,243,0.3)',
                      fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', color: 'var(--cielo)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', height: 120, overflow: 'hidden' }}>
                <img src={s.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.8) contrast(1.1)' }}/>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(20,36,126,0.4), transparent)' }}/>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const TastiotaB = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#0C1654', color: '#fff', position: 'relative' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 12 }}>// CASE_STUDY.live</div>
          <h2 style={{ fontSize: 88, lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.03em' }}>
            TASTIOTA<span style={{ color: 'var(--cielo)' }}>.</span>
          </h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cielo)', letterSpacing: '0.1em', marginBottom: 4 }}>STATUS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
            <span style={{ width: 10, height: 10, background: '#3FE07A', borderRadius: '50%', boxShadow: '0 0 10px #3FE07A' }}/>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em' }}>EN_EJECUCIÓN</span>
          </div>
        </div>
      </div>

      {/* Big spec table */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, border: '1px solid rgba(143,196,243,0.2)' }}>
        <div style={{ padding: 40, background: 'rgba(143,196,243,0.04)', borderRight: '1px solid rgba(143,196,243,0.2)' }}>
          <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.015em' }}>Parque Solar Caracolí</h3>
          <p style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.06em', marginBottom: 24 }}>
            CLIENT: REVERAU · REVERGY GROUP
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.85, marginBottom: 32 }}>
            Limpieza one-time de 288,580 paneles bifaciales sobre 215 ha útiles, con cumplimiento
            de las especificaciones técnicas de Canadian Solar para preservar garantía. Ejecución
            en 6 semanas con cuadrilla y maquinaria propia desde Guaymas.
          </p>
          <div style={{ position: 'relative', height: 280, overflow: 'hidden', borderRadius: 4 }}>
            <img src={PHOTOS.panelsRow} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(12,22,84,0.6))' }}/>
            <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', display: 'flex', justifyContent: 'space-between' }}>
              <span>IMG_001 · PANELS_BIFACIAL_TRACKER</span>
              <span style={{ color: 'var(--cielo)' }}>27.9°N · 110.9°W</span>
            </div>
          </div>
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
            ['ALCANCE', '3 SVC', 'limpieza+veg+caminos'],
          ].map(([k, v, sub], i) => (
            <div key={i} style={{
              padding: '32px 28px',
              borderBottom: i < 6 ? '1px solid rgba(143,196,243,0.15)' : 'none',
              borderRight: i % 2 === 0 ? '1px solid rgba(143,196,243,0.15)' : 'none',
            }}>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.14em', marginBottom: 12 }}>{k}</div>
              <div className="tabular" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', opacity: 0.55, marginTop: 8, letterSpacing: '0.04em' }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DifferentiatorsB = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#0E1840', color: '#fff' }}>
    <div className="container">
      <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 16 }}>// EDGE.compute</div>
      <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 56, maxWidth: 900 }}>
        Tres compromisos que firmamos, ejecutamos y reportamos.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {DIFERENCIADORES.map((d, i) => {
          const I = d.icon;
          return (
            <div key={i} style={{
              padding: 40, background: 'linear-gradient(180deg, rgba(143,196,243,0.06), transparent)',
              border: '1px solid rgba(143,196,243,0.15)',
              minHeight: 280, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <div style={{ color: 'var(--cielo)' }}><I/></div>
                <div className="tabular" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cielo)', letterSpacing: '0.06em' }}>EDGE_0{i+1}</div>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.01em' }}>{d.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.78 }}>{d.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const FormB = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#0C1654', color: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.12em', marginBottom: 16 }}>// REQUEST_QUOTE.form</div>
          <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 24 }}>
            Cotiza tu parque.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.8, marginBottom: 40 }}>
            Respondemos en menos de 48 horas con propuesta técnico-económica:
            alcance, plazo, equipo asignado, SLA y reporte semanal.
          </p>
          <div style={{
            padding: 24, border: '1px solid rgba(143,196,243,0.25)',
            background: 'rgba(143,196,243,0.05)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cielo)', letterSpacing: '0.06em', marginBottom: 12 }}>
              CONTACT.direct
            </div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>solar@rodardos.com</div>
            <div style={{ fontSize: 14, opacity: 0.7, marginTop: 4 }}>+52 622 000 0000 · Guaymas, Sonora</div>
          </div>
        </div>
        <form style={{
          background: 'rgba(143,196,243,0.04)', border: '1px solid rgba(143,196,243,0.2)',
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
              <label style={{ fontFamily: 'var(--font-mono)', color: 'var(--cielo)', fontSize: 11 }}>{label}</label>
              <input placeholder={ph} type={id === 'fecha' ? 'date' : 'text'}
                style={{ background: 'transparent', border: '1px solid rgba(143,196,243,0.3)', color: '#fff', borderRadius: 0, padding: '14px 16px' }}/>
            </div>
          ))}
          <button type="submit" style={{
            gridColumn: 'span 2', padding: 20, background: 'var(--cielo)', color: 'var(--marino-deep)',
            fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', fontSize: 14,
            border: 'none', cursor: 'pointer', borderRadius: 0,
          }}>SUBMIT_REQUEST →</button>
        </form>
      </div>
    </div>
  </section>
);

const FooterB = () => (
  <footer style={{ background: '#080F3F', color: '#fff', padding: '48px 0', borderTop: '1px solid rgba(143,196,243,0.2)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
      <RodardosWordmark color="#fff" arc="var(--cielo)"/>
      <div style={{ display: 'flex', gap: 40, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', opacity: 0.7 }}>
        <span>© 2026 RODARDOS S.A. DE C.V.</span>
        <span>SOLAR_DIVISION</span>
        <span>GUAYMAS · MX</span>
      </div>
    </div>
  </footer>
);

const VariantData = () => (
  <div className="artboard-page artboard-page--dark" data-screen-label="Variante B · Industrial">
    <HeaderB/>
    <HeroB/>
    <ServicesB/>
    <TastiotaB/>
    <DifferentiatorsB/>
    <FormB/>
    <FooterB/>
  </div>
);

window.VariantData = VariantData;
