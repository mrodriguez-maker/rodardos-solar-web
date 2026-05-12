/* variant-editorial.jsx — Variation C: Editorial Premium
   Big editorial type, asymmetric, magazine feel, big imagery, storytelling. */

const HeaderC = () => (
  <header style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    padding: '32px 0',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <RodardosWordmark color="var(--marino)" arc="var(--cielo)"/>
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center', fontFamily: 'var(--font-serif)', fontSize: 16 }}>
        {['Manifiesto', 'Servicios', 'Tastiota', 'Contacto'].map(l => (
          <a key={l} style={{ color: 'var(--marino)', fontStyle: 'italic' }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--marino)', color: '#fff', padding: '14px 28px',
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', borderRadius: 999,
        }}>Cotizar</button>
      </nav>
    </div>
  </header>
);

const HeroC = () => (
  <section style={{ position: 'relative', minHeight: 920, paddingTop: 140, background: '#FBFAF7', overflow: 'hidden' }}>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--marino)',
            marginBottom: 32,
          }}>— Una nueva división de RODARDOS</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 116, lineHeight: 0.92, letterSpacing: '-0.035em', color: 'var(--marino)',
            marginBottom: 32, textWrap: 'balance',
          }}>
            Cuidamos<br/>
            cada panel<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--cielo)' }}>como si fuera</em><br/>
            nuestro.
          </h1>
          <p style={{
            fontSize: 20, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 540,
            marginBottom: 40, fontWeight: 400,
          }}>
            Mantenimiento de parques solares a gran escala para operadores y asset managers.
            Limpieza, vegetación, drones. Equipo propio, base Sonora, SLA por contrato.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <button className="btn" style={{
              background: 'var(--marino)', color: '#fff', padding: '20px 36px',
              fontSize: 15, fontWeight: 600, borderRadius: 999,
            }}>Solicitar cotización <Icon.Arrow/></button>
            <a style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--marino)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Lee el caso Tastiota →
            </a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative', borderRadius: '50% / 45%', overflow: 'hidden',
            aspectRatio: '0.85', background: '#000',
          }}>
            <img src={PHOTOS.heroAerial} alt=""
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
          {/* Decorative */}
          <div style={{
            position: 'absolute', top: -32, right: -32,
            width: 140, height: 140, borderRadius: '50%',
            background: 'var(--cielo)', opacity: 0.7, zIndex: -1,
          }}/>
          <div style={{
            position: 'absolute', bottom: 24, left: -48,
            background: '#fff', padding: '20px 28px', borderRadius: 999,
            boxShadow: '0 12px 40px rgba(20,36,126,0.15)',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{ width: 12, height: 12, background: '#3FE07A', borderRadius: '50%' }}/>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Ahora mismo</div>
              <div style={{ fontWeight: 700, color: 'var(--marino)', fontSize: 15 }}>Tastiota · 6 semanas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee number-band */}
      <div style={{
        marginTop: 100, padding: '32px 0',
        borderTop: '1px solid rgba(20,36,126,0.15)',
        borderBottom: '1px solid rgba(20,36,126,0.15)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {KPIS.map((k, i) => (
          <div key={i} style={{
            padding: '8px 24px',
            borderLeft: i > 0 ? '1px solid rgba(20,36,126,0.15)' : 'none',
          }}>
            <div className="tabular" style={{
              fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 400, color: 'var(--marino)',
              letterSpacing: '-0.025em', lineHeight: 1,
            }}>
              {k.value}
              <span style={{ fontSize: 22, fontStyle: 'italic', marginLeft: 4, color: 'var(--cielo)' }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 12, lineHeight: 1.4 }}>{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ManifestoC = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#FBFAF7' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
        <div className="eyebrow" style={{ color: 'var(--marino)', paddingTop: 12 }}>· Manifiesto</div>
        <div>
          <p style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 48, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--marino)',
            textWrap: 'balance', maxWidth: 1100,
          }}>
            Un parque solar no se mantiene <em style={{ color: 'var(--cielo)' }}>solo</em> —
            se mantiene en <em style={{ color: 'var(--cielo)' }}>relación</em>. Entre el módulo
            y la cuadrilla, entre el operador y el asset. Nuestro trabajo es que esa
            relación produzca <em style={{ color: 'var(--cielo)' }}>watts</em>, no excusas.
          </p>
          <div style={{ marginTop: 56, display: 'flex', gap: 32, alignItems: 'center' }}>
            <div style={{ width: 80, height: 1, background: 'var(--marino)' }}/>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--marino)' }}>Dirección RODARDOS Solar</div>
              <div style={{ fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Guaymas, Sonora · 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesC = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 80 }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 88,
          lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--marino)', maxWidth: 800,
        }}>
          <em style={{ color: 'var(--cielo)' }}>Tres</em> servicios.<br/>
          Una <em>operación</em> integrada.
        </h2>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-soft)', maxWidth: 280, textAlign: 'right' }}>
          Cada uno con cuadrilla y maquinaria propia. Sin handoffs. Sin sorpresas.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          const flip = i % 2 === 1;
          return (
            <article key={i} style={{
              display: 'grid', gridTemplateColumns: flip ? '1fr 1fr' : '1fr 1fr',
              gap: 64, alignItems: 'center',
            }}>
              <div style={{ order: flip ? 2 : 1 }}>
                <div className="eyebrow" style={{ color: 'var(--marino)', marginBottom: 16 }}>
                  · 0{i+1} / 03 — {s.sub}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontWeight: 400,
                  fontSize: 64, lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--marino)',
                  marginBottom: 24,
                }}>{s.title}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 32, maxWidth: 520 }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 24, borderTop: '1px solid var(--gris-soft)' }}>
                  {s.tags.map(t => (
                    <li key={t} style={{
                      fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--marino)',
                      display: 'flex', alignItems: 'center', gap: 12,
                    }}>
                      <span style={{ width: 24, height: 1, background: 'var(--cielo)' }}/>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ order: flip ? 1 : 2, position: 'relative' }}>
                <div style={{
                  position: 'relative', overflow: 'hidden',
                  borderRadius: i === 1 ? '50% / 45%' : 12,
                  aspectRatio: '4/3',
                }}>
                  <img src={s.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <div style={{
                  position: 'absolute', [flip ? 'right' : 'left']: -32, top: -32,
                  width: 100, height: 100, borderRadius: '50%',
                  background: 'var(--cielo-soft)', opacity: 0.8, zIndex: -1,
                }}/>
                <div style={{
                  position: 'absolute', bottom: -24, [flip ? 'left' : 'right']: 24,
                  background: 'var(--marino)', color: '#fff',
                  width: 80, height: 80, borderRadius: '50%',
                  display: 'grid', placeItems: 'center',
                }}>
                  <I/>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const TastiotaC = () => (
  <section style={{ padding: 'var(--d-section) 0', background: 'var(--marino)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle background photo */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.18,
      backgroundImage: `url(${PHOTOS.desertRoad})`, backgroundSize: 'cover', backgroundPosition: 'center',
    }}/>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,36,126,0.85), rgba(12,22,84,0.95))' }}/>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--cielo)', marginBottom: 24 }}>
            — Caso flagship en ejecución
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 156, lineHeight: 0.85,
            letterSpacing: '-0.04em', marginBottom: 0,
          }}>Tastiota<span style={{ color: 'var(--cielo)' }}>.</span></h2>
        </div>
        <div>
          <p style={{ fontSize: 22, lineHeight: 1.55, opacity: 0.9, marginBottom: 24, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>
            “Limpieza one-time de 288,580 paneles bifaciales sobre 215 hectáreas, en seis semanas,
            sin invalidar la garantía de Canadian Solar.”
          </p>
          <div style={{ fontSize: 14, opacity: 0.7, fontFamily: 'var(--font-sans)' }}>
            Cliente: <strong>Reverau</strong> — operadora O&M de Revergy Group<br/>
            Parque: <strong>Caracolí</strong> · Tastiota, Sonora · México
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(143,196,243,0.2)',
        borderRadius: 8, overflow: 'hidden',
      }}>
        {[
          ['Paneles', '288,580', 'bifaciales mono PERC'],
          ['Modelo', 'BiHiKu7', 'Canadian Solar 640–665W'],
          ['Superficie', '215 ha', '646,750 m² útiles'],
          ['Estructura', 'Tracker', 'single-axis'],
        ].map(([k, v, sub], i) => (
          <div key={i} style={{
            padding: '32px 28px',
            borderRight: i < 3 ? '1px solid rgba(143,196,243,0.2)' : 'none',
          }}>
            <div className="eyebrow" style={{ color: 'var(--cielo)', marginBottom: 12, opacity: 0.8 }}>{k}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: '-0.025em' }}>{v}</div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, opacity: 0.85, maxWidth: 600 }}>
          Alcance: limpieza robótica y manual con equipos certificados, control de vegetación
          en áreas internas y mantenimiento de terracerías y caminos. Plazo: <strong>6 semanas</strong>.
        </div>
        <button className="btn" style={{
          background: 'var(--cielo)', color: 'var(--marino-deep)', padding: '18px 32px',
          fontSize: 15, fontWeight: 600, borderRadius: 999,
        }}>Memoria técnica completa <Icon.Arrow/></button>
      </div>
    </div>
  </section>
);

const FormC = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#FBFAF7' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--marino)', marginBottom: 16 }}>— ¿Empezamos?</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 88,
          lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--marino)',
          maxWidth: 1000, margin: '0 auto', textWrap: 'balance',
        }}>
          Cuéntanos del parque y te <em style={{ color: 'var(--cielo)' }}>respondemos</em> en 48 horas.
        </h2>
      </div>
      <form style={{
        maxWidth: 800, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
      }} onSubmit={(e) => { e.preventDefault(); alert('Cotización enviada (demo)'); }}>
        {[
          ['Nombre del parque', 'Ej. Caracolí', 'span 2'],
          ['Empresa', 'Reverau', null],
          ['Tu rol', 'Asset manager', null],
          ['Capacidad (MW)', '180', null],
          ['N° de módulos', '288,580', null],
          ['Email de contacto', 'contacto@empresa.com', 'span 2'],
        ].map(([label, ph, span], i) => (
          <div key={i} className="field" style={{ gridColumn: span || 'auto' }}>
            <label style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
              color: 'var(--marino)', textTransform: 'none', letterSpacing: 0,
            }}>{label}</label>
            <input placeholder={ph} style={{
              border: 'none', borderBottom: '1px solid var(--marino)',
              background: 'transparent', borderRadius: 0, padding: '12px 0', fontSize: 18,
            }}/>
          </div>
        ))}
        <button type="submit" className="btn" style={{
          gridColumn: 'span 2', justifyContent: 'center',
          background: 'var(--marino)', color: '#fff',
          padding: '24px', fontSize: 16, fontWeight: 600, borderRadius: 999, marginTop: 16,
        }}>Enviar solicitud de cotización <Icon.Arrow/></button>
      </form>
    </div>
  </section>
);

const FooterC = () => (
  <footer style={{ background: '#FBFAF7', borderTop: '1px solid var(--gris-soft)', padding: '48px 0 32px', color: 'var(--ink)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <RodardosWordmark color="var(--marino)" arc="var(--cielo)"/>
        <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-soft)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          División solar · Guaymas, Sonora · México
        </div>
      </div>
      <div style={{ display: 'flex', gap: 40, fontSize: 14, color: 'var(--ink-soft)' }}>
        <span>solar@rodardos.com</span>
        <span>+52 622 000 0000</span>
        <span>© 2026 RODARDOS</span>
      </div>
    </div>
  </footer>
);

const VariantEditorial = () => (
  <div className="artboard-page" data-screen-label="Variante C · Editorial">
    <HeaderC/>
    <HeroC/>
    <ManifestoC/>
    <ServicesC/>
    <TastiotaC/>
    <FormC/>
    <FooterC/>
  </div>
);

window.VariantEditorial = VariantEditorial;
