/* variant-corporate.jsx — Variation A: Corporativo Institucional
   White, generous, navy headlines, big aerial photography. ACS/Acciona vibe. */

const HeaderA = () => (
  <header style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    padding: '24px 0',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <RodardosWordmark color="#fff" arc="var(--cielo)" />
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {['Inicio', 'Servicios', 'Caso Tastiota', 'Nosotros', 'Contacto'].map((l, i) => (
          <a key={l} style={{
            color: '#fff', fontSize: 14, fontWeight: 500, opacity: i === 0 ? 1 : 0.8,
            borderBottom: i === 0 ? '2px solid var(--cielo)' : 'none', paddingBottom: 4,
          }}>{l}</a>
        ))}
        <button className="btn" style={{
          background: 'var(--accent)', color: 'var(--accent-ink)', padding: '12px 22px', fontSize: 14,
        }}>Cotizar parque</button>
      </nav>
    </div>
  </header>
);

const HeroA = () => (
  <section style={{ position: 'relative', height: 760, overflow: 'hidden', color: '#fff' }}>
    <img src={PHOTOS.heroAerial} alt=""
         style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, rgba(20,36,126,0.72) 0%, rgba(20,36,126,0.45) 50%, rgba(12,22,84,0.85) 100%)'
    }}/>
    <div className="container" style={{
      position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      paddingBottom: 96,
    }}>
      <div className="eyebrow" style={{ color: 'var(--cielo)', marginBottom: 24 }}>
        ◆ Nueva división · RODARDOS Solar
      </div>
      <h1 style={{
        fontSize: 84, lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.025em',
        maxWidth: 1100, marginBottom: 32, textWrap: 'balance',
      }}>
        Mantenimiento de<br/>
        <span style={{ color: 'var(--cielo)' }}>parques solares</span> a gran escala.
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 720, opacity: 0.92, marginBottom: 40, fontWeight: 400 }}>
        Limpieza certificada, control de vegetación e inspección con drones para operadores
        y asset managers exigentes. Equipo propio. SLA garantizado. Base Sonora.
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <button className="btn btn-primary" style={{ padding: '20px 32px', fontSize: 16 }}>
          Solicitar cotización <Icon.Arrow/>
        </button>
        <button className="btn btn-ghost" style={{ padding: '20px 32px', fontSize: 16 }}>
          Ver caso Tastiota
        </button>
      </div>
    </div>
    {/* Bottom strip with KPIs */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(255,255,255,0.15)',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {KPIS.map((k, i) => (
          <div key={i} style={{
            padding: '24px 24px',
            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
          }}>
            <div className="tabular" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {k.value}<span style={{ fontSize: 18, opacity: 0.7, marginLeft: 6 }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4, letterSpacing: '0.02em' }}>{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesA = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--marino)', marginBottom: 16 }}>Servicios especializados</div>
          <h2 style={{ fontSize: 56, lineHeight: 1.0, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)', maxWidth: 800 }}>
            Tres frentes para mantener tu PR donde debe estar.
          </h2>
        </div>
        <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 320, lineHeight: 1.55 }}>
          Operamos como una unidad técnica integrada. Sin handoffs entre proveedores: un contrato, un responsable, un reporte.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {SERVICES.map((s, i) => {
          const I = s.icon;
          return (
            <article key={i} style={{
              background: 'var(--paper)', borderRadius: 8, overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'transform .2s ease', cursor: 'pointer',
            }}>
              <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                <img src={s.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{
                  position: 'absolute', top: 16, left: 16, padding: '6px 12px',
                  background: 'rgba(255,255,255,0.95)', color: 'var(--marino)',
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                  borderRadius: 999,
                }}>{`0${i+1}`}</div>
              </div>
              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <div style={{ color: 'var(--marino)' }}><I/></div>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{s.title}</h3>
                  <div style={{ fontSize: 13, color: 'var(--marino)', fontWeight: 600, marginTop: 4 }}>{s.sub}</div>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--gris-soft)' }}>
                  {s.tags.map(t => (
                    <li key={t} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }}/>{t}
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

const DifferentiatorsA = () => (
  <section style={{ padding: 'var(--d-section) 0', background: 'var(--marino-deep)', color: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--cielo)', marginBottom: 16 }}>Por qué RODARDOS</div>
          <h2 style={{ fontSize: 48, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Tres compromisos que la competencia no firma.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {DIFERENCIADORES.map((d, i) => {
            const I = d.icon;
            return (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 32,
                padding: '32px 0',
                borderTop: '1px solid rgba(255,255,255,0.15)',
                borderBottom: i === DIFERENCIADORES.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{ color: 'var(--cielo)' }}><I/></div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{d.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.8, maxWidth: 520 }}>{d.body}</p>
                </div>
                <div className="tabular" style={{ fontSize: 14, opacity: 0.5, fontFamily: 'var(--font-mono)' }}>
                  {`/0${i+1}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

const TastiotaA = () => (
  <section style={{ padding: 'var(--d-section) 0', background: 'var(--paper)' }}>
    <div className="container">
      <div className="eyebrow" style={{ color: 'var(--marino)', marginBottom: 12 }}>◉ Caso flagship en ejecución</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'flex-start', marginTop: 24 }}>
        <div>
          <h2 style={{ fontSize: 56, lineHeight: 1.0, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12 }}>
            Tastiota.
          </h2>
          <h3 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 500, color: 'var(--ink-soft)', marginBottom: 32 }}>
            Parque Solar Caracolí, Sonora.
          </h3>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink)', marginBottom: 32, maxWidth: 600 }}>
            288,580 paneles bifaciales Canadian Solar sobre 215 hectáreas útiles con estructura
            single-axis tracker. Limpieza certificada en 6 semanas para Reverau, sin invalidar la
            garantía del fabricante.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
            border: '1px solid var(--gris-soft)', background: '#fff', borderRadius: 6,
          }}>
            {[
              ['Cliente', TASTIOTA.cliente],
              ['Ubicación', TASTIOTA.ubicacion],
              ['Paneles', `${TASTIOTA.paneles} u.`],
              ['Modelo', 'Canadian Solar BiHiKu7'],
              ['Superficie', `${TASTIOTA.superficie} (${TASTIOTA.hectareas})`],
              ['Estructura', TASTIOTA.estructura],
              ['Plazo', TASTIOTA.plazo],
              ['Base operativa', TASTIOTA.base],
            ].map(([k, v], i) => (
              <div key={i} style={{
                padding: '18px 20px',
                borderRight: i % 2 === 0 ? '1px solid var(--gris-soft)' : 'none',
                borderTop: i >= 2 ? '1px solid var(--gris-soft)' : 'none',
              }}>
                <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4 }}>{k}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{v}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" style={{ marginTop: 32 }}>
            Ver memoria técnica del proyecto <Icon.Arrow/>
          </button>
        </div>
        <div style={{ position: 'sticky', top: 24 }}>
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', height: 460 }}>
            <img src={PHOTOS.desert} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{
              position: 'absolute', bottom: 16, left: 16, right: 16,
              background: 'rgba(255,255,255,0.95)', padding: '20px 24px', borderRadius: 4,
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <Icon.Pin/>
              <div>
                <div style={{ fontSize: 12, color: 'var(--ink-soft)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>27.9°N · 110.9°W</div>
                <div style={{ fontWeight: 700, color: 'var(--marino)' }}>Tastiota, Sonora · México</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 16, padding: 24, background: 'var(--marino)', color: '#fff', borderRadius: 8 }}>
            <div className="eyebrow" style={{ color: 'var(--cielo)', marginBottom: 8 }}>Sobre el cliente</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.92 }}>
              <strong>Reverau</strong> es la operadora de O&M de Revergy Group, asset manager con
              parques fotovoltaicos en operación a lo largo del territorio mexicano.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FormA = () => (
  <section style={{ padding: 'var(--d-section) 0', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--marino)', marginBottom: 16 }}>Cotización</div>
          <h2 style={{ fontSize: 48, lineHeight: 1.0, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 24 }}>
            Cuéntanos del parque.<br/>Te respondemos en 48 hrs.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)', marginBottom: 40 }}>
            Te enviamos una propuesta técnico-económica con alcance, plazo, equipo asignado
            y SLA por contrato. Tu información se trata con confidencialidad.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['Operadores O&M', 'Asset managers de portafolios fotovoltaicos'],
              ['Desarrolladores EPC', 'Cierres de obra y handover a operación'],
              ['Industriales', 'Autoabasto y plantas de generación distribuida'],
            ].map(([t, s], i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, background: 'var(--marino)', color: '#fff', borderRadius: 4, display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--ink)' }}>{t}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form style={{
          background: 'var(--paper)', padding: 40, borderRadius: 8,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }} onSubmit={(e) => { e.preventDefault(); alert('Cotización enviada (demo)'); }}>
          <div className="field" style={{ gridColumn: 'span 2' }}>
            <label>Nombre del proyecto / parque</label>
            <input placeholder="Ej. Parque Solar Caracolí" />
          </div>
          <div className="field"><label>Empresa</label><input placeholder="Reverau" /></div>
          <div className="field"><label>Tu rol</label>
            <select defaultValue=""><option value="" disabled>Selecciona…</option><option>Asset manager</option><option>O&M lead</option><option>Director técnico</option><option>Procurement</option></select>
          </div>
          <div className="field"><label>Capacidad instalada (MW)</label><input placeholder="180" type="number"/></div>
          <div className="field"><label>N° de módulos</label><input placeholder="288,580" /></div>
          <div className="field"><label>Estado</label><input placeholder="Sonora" /></div>
          <div className="field"><label>Fecha objetivo</label><input type="date" /></div>
          <div className="field" style={{ gridColumn: 'span 2' }}>
            <label>Servicios requeridos</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
              {['Limpieza módulos', 'Control de vegetación', 'Caminos', 'Termografía drone', 'Inspección IV', 'Plan integral O&M'].map(s => (
                <label key={s} style={{
                  padding: '8px 14px', background: '#fff', border: '1px solid var(--gris-soft)', borderRadius: 999,
                  fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <input type="checkbox" style={{ accentColor: 'var(--marino)' }}/>{s}
                </label>
              ))}
            </div>
          </div>
          <div className="field" style={{ gridColumn: 'span 2' }}>
            <label>Email de contacto</label><input type="email" placeholder="contacto@empresa.com" />
          </div>
          <button type="submit" className="btn btn-primary" style={{
            gridColumn: 'span 2', justifyContent: 'center', padding: '20px',
            background: 'var(--marino)', color: '#fff', fontSize: 16,
          }}>Enviar solicitud de cotización <Icon.Arrow/></button>
        </form>
      </div>
    </div>
  </section>
);

const FooterA = () => (
  <footer style={{ background: 'var(--asfalto)', color: '#fff', padding: '64px 0 32px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <RodardosWordmark color="#fff" arc="var(--cielo)"/>
          <p style={{ marginTop: 16, fontSize: 14, opacity: 0.7, lineHeight: 1.55, maxWidth: 320 }}>
            División solar de RODARDOS. Mantenimiento de infraestructura de generación fotovoltaica
            a gran escala. Base Guaymas · Cobertura nacional.
          </p>
        </div>
        {[
          ['Servicios', ['Limpieza de paneles', 'Control vegetal y caminos', 'Drones y termografía', 'Plan integral O&M']],
          ['Empresa', ['Sobre RODARDOS', 'Caso Tastiota', 'Certificaciones', 'Trabaja con nosotros']],
          ['Contacto', ['+52 622 000 0000', 'solar@rodardos.com', 'Guaymas, Sonora', 'México']],
        ].map(([t, items]) => (
          <div key={t}>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cielo)', marginBottom: 16, fontWeight: 600 }}>{t}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(i => <li key={i} style={{ fontSize: 14, opacity: 0.8 }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.6 }}>
        <span>© 2026 RODARDOS S.A. de C.V. · Todos los derechos reservados</span>
        <span>Aviso de privacidad · Términos</span>
      </div>
    </div>
  </footer>
);

const VariantCorporate = () => (
  <div className="artboard-page" data-screen-label="Variante A · Corporativo">
    <HeaderA/>
    <HeroA/>
    <ServicesA/>
    <DifferentiatorsA/>
    <TastiotaA/>
    <FormA/>
    <FooterA/>
  </div>
);

window.VariantCorporate = VariantCorporate;
