/* shared.jsx — Logo, photos, icons, common UI primitives */

// ============ BRAND LOGO (RODARDOS Solar isotype) ============
// SVG recreation of the R+arc isotype so we can color it via CSS
const RodardosIso = ({ size = 40, fill = 'var(--marino)', arcFill = 'var(--cielo)' }) => (
  <svg viewBox="0 0 120 90" width={size} height={size * 0.75} aria-hidden="true">
    {/* The R block */}
    <path d="M62 8 L94 8 Q108 8 108 26 Q108 40 96 44 L108 82 L92 82 L82 48 L74 48 L74 82 L62 82 Z M74 22 L74 36 L92 36 Q96 36 96 29 Q96 22 92 22 Z"
          fill={fill}/>
    {/* Sweeping arc */}
    <path d="M8 56 Q40 36 78 50 Q102 58 110 70 L106 76 Q90 60 70 58 Q40 56 12 64 Z"
          fill={arcFill} opacity="0.85"/>
  </svg>
);

const RodardosWordmark = ({ color = 'var(--marino)', arc = 'var(--cielo)' }) => (
  <span className="logo-mark" style={{ gap: 0 }}>
    <RodardosIso size={36} fill={color} arcFill={arc}/>
    <span style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '0.02em',
      color: color,
      marginLeft: 10,
    }}>RODARDOS<sup style={{
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '0.1em',
      marginLeft: 4,
      color: arc,
      verticalAlign: 'top'
    }}>SOLAR</sup></span>
  </span>
);

// ============ STOCK PHOTO URLS (Unsplash) ============
const PHOTOS = {
  heroAerial: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=2000&q=80&auto=format&fit=crop',
  panelsRow: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop',
  panelClose: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80&auto=format&fit=crop',
  worker: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1600&q=80&auto=format&fit=crop',
  drone: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80&auto=format&fit=crop',
  cleaning: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80&auto=format&fit=crop',
  desert: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=2000&q=80&auto=format&fit=crop',
  field: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=1600&q=80&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80&auto=format&fit=crop',
  inspection: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80&auto=format&fit=crop',
  desertRoad: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&q=80&auto=format&fit=crop',
};

// ============ ICON SET (line, 24px) ============
const Icon = {
  Sparkle: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M16 4 L18 14 L28 16 L18 18 L16 28 L14 18 L4 16 L14 14 Z"/>
    </svg>
  ),
  Drone: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="6" cy="6" r="3"/><circle cx="26" cy="6" r="3"/><circle cx="6" cy="26" r="3"/><circle cx="26" cy="26" r="3"/>
      <path d="M9 6 L13 12 M23 6 L19 12 M9 26 L13 20 M23 26 L19 20"/>
      <rect x="13" y="12" width="6" height="8" rx="1"/>
    </svg>
  ),
  Leaf: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M6 26 C6 14 14 6 26 6 C26 18 18 26 6 26 Z"/>
      <path d="M6 26 L18 14"/>
    </svg>
  ),
  Panel: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 24 L8 8 L28 8 L24 24 Z"/>
      <path d="M11 8 L9 24 M18 8 L17 24 M25 8 L25 24 M6.5 16 L25.5 16"/>
    </svg>
  ),
  Shield: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M16 4 L26 8 V16 C26 22 22 26 16 28 C10 26 6 22 6 16 V8 Z"/>
      <path d="M11 16 L15 20 L21 13"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M18 4 L8 18 L15 18 L13 28 L24 14 L17 14 Z"/>
    </svg>
  ),
  Pin: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M16 4 C10 4 6 8 6 14 C6 22 16 28 16 28 C16 28 26 22 26 14 C26 8 22 4 16 4 Z"/>
      <circle cx="16" cy="14" r="3"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 10 L16 10 M11 5 L16 10 L11 15"/>
    </svg>
  ),
  Cpu: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="8" y="8" width="16" height="16"/>
      <rect x="12" y="12" width="8" height="8"/>
      <path d="M8 12 L4 12 M8 16 L4 16 M8 20 L4 20 M24 12 L28 12 M24 16 L28 16 M24 20 L28 20 M12 8 L12 4 M16 8 L16 4 M20 8 L20 4 M12 24 L12 28 M16 24 L16 28 M20 24 L20 28"/>
    </svg>
  ),
  Clock: (p) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="16" cy="16" r="12"/><path d="M16 8 L16 16 L22 19"/>
    </svg>
  ),
};

// ============ SHARED DATA ============
const SERVICES = [
  {
    icon: Icon.Leaf,
    title: 'Control de vegetación y caminos',
    sub: 'Deshierbe especializado',
    body: 'Deshierbe selectivo mecanizado y manual, control perimetral e interno, mantenimiento de terracerías y caminos. Eliminamos sombras parásitas y riesgo de incendio con equipo propio.',
    tags: ['Deshierbe mecanizado', 'Control perimetral', 'Terracerías y caminos', 'Plan ambiental'],
    photo: PHOTOS.field,
  },
  {
    icon: Icon.Panel,
    title: 'Limpieza de paneles',
    sub: 'Certificada por fabricante',
    body: 'Limpieza con o sin agua según topografía y disponibilidad hídrica. Cumplimos especificaciones técnicas de Canadian Solar — no invalidamos garantías de módulo.',
    tags: ['Cepillado certificado', 'Recuperación de PR', 'Sin invalidar garantía'],
    photo: PHOTOS.cleaning,
  },
];

const TASTIOTA = {
  cliente: 'Reverau · Revergy Group',
  parque: 'Parque Solar Caracolí',
  ubicacion: 'Tastiota, Sonora',
  alcance: 'Limpieza one-time + control vegetal + caminos',
  paneles: '288,580',
  panelModel: 'Canadian Solar BiHiKu7 CS7N-MB-AG · 640–665W',
  superficie: '646,750 m²',
  hectareas: '215 ha útiles',
  estructura: 'Single-axis tracker',
  plazo: '6 semanas',
  base: 'Guaymas, Sonora',
};

const KPIS = [
  { value: '288,580', unit: 'paneles', label: 'En limpieza one-time, Tastiota' },
  { value: '215', unit: 'ha', label: 'Superficie útil bajo gestión' },
  { value: '6', unit: 'sem', label: 'Plazo de ejecución comprometido' },
  { value: '100%', unit: '', label: 'Equipo propio · cero subcontratación' },
];

const DIFERENCIADORES = [
  {
    icon: Icon.Shield,
    title: 'Equipo propio',
    body: 'Cuadrillas, supervisión y maquinaria de RODARDOS. No subcontratamos: tú firmas con nosotros, nosotros ejecutamos.',
  },
  {
    icon: Icon.Pin,
    title: 'Base Sonora · Cobertura nacional',
    body: 'Operación logística desde Guaymas. Movilización inmediata al noroeste; despliegue a cualquier estado del país.',
  },
  {
    icon: Icon.Clock,
    title: 'SLA garantizado',
    body: 'Compromisos de tiempo de respuesta y entrega por contrato. Reporte semanal de avance con KPIs de generación recuperada.',
  },
];

// Export to window so other Babel scripts can use these
Object.assign(window, {
  RodardosIso, RodardosWordmark,
  PHOTOS, Icon,
  SERVICES, TASTIOTA, KPIS, DIFERENCIADORES,
});
