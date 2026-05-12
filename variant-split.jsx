/* variant-split.jsx — Variation E: Industrial Document
   Split white/navy panels alternating like a technical document.
   White-dominant overall, navy used as accent panels. Real Tastiota photos. */

const HeaderE = () => (
  <header style={{
    position: 'sticky', top: 0, zIndex: 10, background: '#fff',
    borderBottom: '1px solid rgba(20,36,126,0.1)',
  }}>
    <div className="container" style={{
      padding: '18px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <RodardosWordmark color="var(--marino)" arc="var(--cielo)" />
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)', letterSpacing: '0.1em', opacity: 0.7 }}>
        DOC_RDS-SOL-2026 · CONFIDENCIAL
      </div>
      <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {['Servicios', 'Capacidades', 'Tastiota'].map(l => (
          <a key={l} style={{ color: 'var(--marino)', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--marino)', color: '#fff', padding: '10px 18px', fontSize: 12,
          fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', borderRadius: 2,
        }}>COTIZAR →</button>
      </nav>
    </div>
  </header>
);

const HeroE = () => (
  <section style={{ background: '#fff', padding: '80px 0 0', position: 'relative' }}>
    <div className="container">
      {/* Document header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '180px 1fr 180px',
        gap: 32, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)',
        letterSpacing: '0.1em', opacity: 0.65, marginBottom: 64,
        paddingBottom: 16, borderBottom: '1px solid rgba(20,36,126,0.15)',
      }}>
        <span>SECC. 01 · INTRO</span>
        <span style={{ textAlign: 'center' }}>RODARDOS_SOLAR · MANTENIMIENTO O&M</span>
        <span style={{ textAlign: 'right' }}>PG. 01 / 12</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
        <div className="eyebrow" style={{ color: 'var(--marino)', paddingTop: 12 }}>· Sección 01</div>
        <div>
          <h1 style={{
            fontSize: 96, lineHeight: 0.92, fontWeight: 800, letterSpacing: '-0.035em',
            color: 'var(--marino)', marginBottom: 32, textWrap: 'balance', maxWidth: 1100,
          }}>
            Mantenimiento de parques solares,<br/>
            documentado <span style={{ color: 'var(--cielo)' }}>al watt</span>.
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'flex-start' }}>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 640 }}>
              Limpieza, vegetación, drones y caminos para asset managers exigentes.
              Equipo propio, base Sonora, SLA por contrato. Cada intervención queda
              en bitácora — con fotos, lecturas y firmas.
            </p>
            <div style={{ borderLeft: '2px solid var(--cielo)', paddingLeft: 20 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--marino)', opacity: 0.7, marginBottom: 8 }}>RESUMEN_EJECUTIVO</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
                288,580 paneles. 215 ha. Reverau, Tastiota.
                Sin invalidar garantía Canadian Solar. 6 sem.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <button className="btn" style={{
              background: 'var(--marino)', color: '#fff', padding: '18px 28px',
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em', borderRadius: 2,
            }}>SOLICITAR_PROPUESTA →</button>
            <button className="btn" style={{
              color: 'var(--marino)', border: '1px solid rgba(20,36,126,0.25)', padding: '18px 28px',
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em', borderRadius: 2,
            }}>DESCARGAR_BROCHURE.PDF</button>
          </div>
        </div>
      </div>
    </div>

    {/* Photo strip — full width, low height */}
    <div style={{
      marginTop: 80, display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 0,
    }}>
      {[
        { src: PHOTOS_REAL.tracker, label: 'IMG_001 · TRACKER_SINGLE_AXIS' },
        { src: PHOTOS_REAL.workerTrimmer, label: 'IMG_002 · DESHIERBE_OPERATIVO' },
        { src: PHOTOS_REAL.tallGrass, label: 'IMG_003 · BASELINE_VEGETACIÓN' },
        { src: PHOTOS_REAL.rowClean, label: 'IMG_004 · POST_INTERVENCIÓN' },
      ].map((p, i) => (
        <div key={i} style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
          <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div style={{
            position: 'absolute', bottom: 12, left: 12, color: '#fff',
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
            textShadow: '0 1px 2px rgba(0,0,0,0.6)',
          }}>{p.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const StatsE = () => (
  <section style={{ background: 'var(--marino)', color: '#fff', padding: '80px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '180px 1fr',
        gap: 64, marginBottom: 48,
      }}>
        <div className="eyebrow" style={{ color: 'var(--cielo)', paddingTop: 8 }}>· Sección 02</div>
        <h2 style={{ fontSize: 48, lineHeight: 1.0, fontWeight: 700, letterSpacing: '-0.02em', maxWidth: 800 }}>
          Capacidades en cifras — Tastiota Q4·26.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          { label: 'PANELES', value: '288,580', sub: 'Canadian Solar BiHiKu7' },
          { label: 'SUPERFICIE', value: '215 ha', sub: '646,750 m² útiles' },
          { label: 'PLAZO', value: '6 sem', sub: 'Single-axis tracker' },
          { label: 'EQUIPO', value: '100%', sub: 'In-house · 0 subs' },
        ].map((k, i) => (
          <div key={i} style={{
            padding: '32px 28px',
            borderLeft: i > 0 ? '1px solid rgba(143,196,243,0.2)' : 'none',
          }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--cielo)', letterSpacing: '0.14em', marginBottom: 12 }}>{k.label}</div>
            <div className="tabular" style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', opacity: 0.7, marginTop: 10, letterSpacing: '0.04em' }}>{k.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesE = () => (
  <section style={{ background: '#fff', padding: 'var(--d-section) 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 56 }}>
        <div className="eyebrow" style={{ color: 'var(--marino)', paddingTop: 8 }}>· Sección 03</div>
        <div>
          <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--marino)', marginBottom: 16 }}>
            Tres servicios. Un solo SLA.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 640, lineHeight: 1.55 }}>
            Cada servicio se entrega con cuadrilla, supervisión y reportería propias.
            Sin handoffs. Sin sorpresas en factura.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          const realPhoto = i === 0 ? PHOTOS_REAL.panelAngle
                         : i === 1 ? PHOTOS_REAL.workerRow
                         : PHOTOS_REAL.tracker;
          return (
            <article key={i} style={{
              border: '1px solid rgba(20,36,126,0.12)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img src={realPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
                  background: '#fff', color: 'var(--marino)', padding: '4px 8px',
                }}>SVC_0{i+1}</div>
              </div>
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <div style={{ color: 'var(--marino)' }}><I/></div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--marino)', letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--marino)', marginTop: 4, letterSpacing: '0.08em' }}>{s.sub.toUpperCase()}</div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(20,36,126,0.1)' }}>
                  {s.tags.map(t => (
                    <li key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 6, height: 6, background: 'var(--cielo)' }}/>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const TastiotaE = () => (
  <section style={{ background: 'var(--paper)', padding: 'var(--d-section) 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 48 }}>
        <div className="eyebrow" style={{ color: 'var(--marino)', paddingTop: 8 }}>· Sección 04</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: 88, lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.035em', color: 'var(--marino)' }}>
            Caso · Tastiota<span style={{ color: 'var(--cielo)' }}>.</span>
          </h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--marino)', letterSpacing: '0.1em', opacity: 0.7 }}>
            CARACOLÍ · SONORA · MX
          </div>
        </div>
      </div>

      {/* Document table on white */}
      <div style={{ background: '#fff', border: '1px solid rgba(20,36,126,0.12)' }}>
        <div style={{ padding: '20px 32px', borderBottom: '1px solid rgba(20,36,126,0.1)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--marino)' }}>
          <span>FICHA_TÉCNICA · TASTIOTA-001</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, background: '#1F9B5A', borderRadius: '50%' }}/>
            EN_EJECUCIÓN
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            ['CLIENTE', 'Reverau', 'Revergy Group · O&M'],
            ['PARQUE', 'Caracolí', 'Tastiota, Sonora'],
            ['MÓDULOS', '288,580', 'Canadian Solar BiHiKu7'],
            ['POTENCIA', '640–665W', 'Bifaciales mono PERC'],
            ['SUPERFICIE', '215 ha', '646,750 m² útiles'],
            ['ESTRUCTURA', 'Tracker', 'Single-axis'],
            ['PLAZO', '6 sem', 'Limpieza one-time'],
            ['ALCANCE', '3 SVC', 'Limp+Veg+Caminos'],
          ].map(([k, v, sub], i) => (
            <div key={i} style={{
              padding: '24px 28px',
              borderTop: '1px solid rgba(20,36,126,0.08)',
              borderRight: (i + 1) % 4 !== 0 ? '1px solid rgba(20,36,126,0.08)' : 'none',
            }}>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--marino)', letterSpacing: '0.14em', marginBottom: 8, opacity: 0.65 }}>{k}</div>
              <div className="tabular" style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--marino)' }}>{v}</div>
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--ink-soft)', marginTop: 4, letterSpacing: '0.04em' }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two photo bands: before / during */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
        {[
          { src: PHOTOS_REAL.tallGrass, tag: 'BASELINE', title: 'Antes — vegetación a contención', sub: 'Riesgo de sombra parásita y biomasa seca bajo módulos.' },
          { src: PHOTOS_REAL.rowClean, tag: 'POST', title: 'Después — caminería habilitada', sub: 'Ejecución de cuadrilla RODARDOS, jornada operativa estándar.' },
        ].map((p, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid rgba(20,36,126,0.12)' }}>
            <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
              <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{
                position: 'absolute', top: 12, left: 12,
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em',
                background: 'var(--marino)', color: '#fff', padding: '4px 10px',
              }}>{p.tag}</div>
            </div>
            <div style={{ padding: 24 }}>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: 'var(--marino)', marginBottom: 6 }}>{p.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{p.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FormE = () => (
  <section style={{ background: '#fff', padding: 'var(--d-section) 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
        <div className="eyebrow" style={{ color: 'var(--marino)', paddingTop: 8 }}>· Sección 05</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <h2 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--marino)', marginBottom: 24 }}>
              Cotiza tu parque.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 32 }}>
              Respondemos en menos de 48 horas con propuesta técnico-económica.
            </p>
            <div style={{
              padding: 20, background: 'var(--cielo-pale)',
              fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--marino)', letterSpacing: '0.04em',
            }}>
              solar@rodardos.com<br/>
              +52 622 000 0000<br/>
              Guaymas, Sonora · MX
            </div>
          </div>
          <form style={{
            border: '1px solid rgba(20,36,126,0.12)',
            padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
          }} onSubmit={(e) => { e.preventDefault(); alert('Cotización enviada (demo)'); }}>
            {[
              ['NOMBRE_PROYECTO', 'Ej. Caracolí', 'span 2'],
              ['EMPRESA', 'Reverau', null],
              ['ROL', 'Asset manager', null],
              ['CAPACIDAD_MW', '180', null],
              ['N_MODULOS', '288580', null],
              ['EMAIL', 'contacto@empresa.com', 'span 2'],
            ].map(([label, ph, span], i) => (
              <div key={i} className="field" style={{ gridColumn: span || 'auto' }}>
                <label style={{ fontFamily: 'var(--font-mono)', color: 'var(--marino)', fontSize: 10 }}>{label}</label>
                <input placeholder={ph} style={{ border: '1px solid rgba(20,36,126,0.2)', borderRadius: 0, padding: '14px 16px' }}/>
              </div>
            ))}
            <button type="submit" style={{
              gridColumn: 'span 2', padding: 16, background: 'var(--marino)', color: '#fff',
              fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', fontSize: 13,
              border: 'none', cursor: 'pointer', borderRadius: 0,
            }}>SUBMIT_REQUEST →</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const FooterE = () => (
  <footer style={{ background: 'var(--marino-deep)', color: '#fff', padding: '40px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
      <RodardosWordmark color="#fff" arc="var(--cielo)"/>
      <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.7 }}>
        <span>© 2026 RODARDOS S.A. DE C.V.</span>
        <span>SOLAR_DIVISION</span>
        <span>DOC_RDS-SOL-2026</span>
      </div>
    </div>
  </footer>
);

const VariantSplit = () => (
  <div className="artboard-page" data-screen-label="Variante E · Industrial Document">
    <HeaderE/>
    <HeroE/>
    <StatsE/>
    <ServicesE/>
    <TastiotaE/>
    <FormE/>
    <FooterE/>
  </div>
);

window.VariantSplit = VariantSplit;
