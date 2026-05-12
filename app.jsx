/* app.jsx — Mounts the design canvas with the 3 variants + Tweaks panel */

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "strict",
  "density": "spacious"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to body
  useEffect(() => {
    document.body.dataset.accent = t.accent;
    document.body.dataset.density = t.density;
  }, [t]);

  return (
    <React.Fragment>
      <DesignCanvas
        title="Rodardos Solar — Home (3 direcciones)"
        subtitle="Mantenimiento de parques solares a gran escala · Mockup hi-fi"
      >
        <DCSection id="industrial-color" title="Industrial + más color (azul es la dirección)">
          <DCArtboard id="F" label="F · Industrial Color · navy + cielo + azul saturado" width={1440} height={3900}>
            <VariantColor/>
          </DCArtboard>
          <DCArtboard id="B" label="B · Industrial original (referencia)" width={1440} height={3700}>
            <VariantData/>
          </DCArtboard>
        </DCSection>
        <DCSection id="hi-fi" title="Otras direcciones (referencia)">
          <DCArtboard id="A" label="A · Corporativo Institucional" width={1440} height={3600}>
            <VariantCorporate/>
          </DCArtboard>
          <DCArtboard id="C" label="C · Editorial Premium" width={1440} height={4200}>
            <VariantEditorial/>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color de acento">
          <TweakRadio
            label="Acento de marca"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={[
              { value: 'strict', label: 'Navy' },
              { value: 'solar', label: 'Solar' },
              { value: 'verde', label: 'Verde' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Densidad">
          <TweakRadio
            label="Espaciado"
            value={t.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'spacious', label: 'Espacioso' },
              { value: 'compact', label: 'Compacto' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Plan de acción">
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
            <strong style={{ color: 'var(--cielo)' }}>1.</strong> Elige dirección visual (A/B/C)<br/>
            <strong style={{ color: 'var(--cielo)' }}>2.</strong> Confirma acento + densidad<br/>
            <strong style={{ color: 'var(--cielo)' }}>3.</strong> Subimos fotos reales de Tastiota<br/>
            <strong style={{ color: 'var(--cielo)' }}>4.</strong> Iteramos copy + datos finales<br/>
            <strong style={{ color: 'var(--cielo)' }}>5.</strong> Entrega responsive + handoff dev
          </div>
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
