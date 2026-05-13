# RODARDOS Web — Contexto del proyecto

## Objetivo
Diseñar la **home hi-fi** de la nueva división **RODARDOS Solar** — mantenimiento O&M para parques solares a gran escala. RODARDOS es una empresa de construcción/infraestructura en Guaymas, Sonora; el primer proyecto solar es el **Parque Solar Caracolí en Tastiota, Sonora** (cliente Reverau / Revergy Group).

## Audiencia
Asset managers, EPCs y O&M managers de parques solares. Tono: institucional, técnico, confiable. Lectura tipo NextEra / Acciona / Array Technologies — no estilo startup.

## Marca (extraída de logos en `/uploads`)
- **Marino** `#14247E` (color primario corporativo)
- **Cielo** `#8FC4F3` (acento)
- **Asfalto/ink** `#1A1F2E`
- **Acero** `#5A6478`
- **Paper/blanco hueso** `#F6F7FB`
- Logo: wordmark `RODARDOS` + arco. Isotipo: la "R" con arco.
- Tipografía: sans grotesca para titulares (Inter Tight como fallback), mono para datos técnicos (JetBrains Mono).

## Datos clave del proyecto Tastiota (úsalos como verdad)
- Cliente: **Reverau** (Revergy Group)
- Parque: **Caracolí**, Tastiota, Sonora · MX
- Módulos: **288,580** unidades · Canadian Solar **BiHiKu7** (CS7N-MB-AG)
- Potencia: 640–665W bifaciales mono PERC
- Superficie: **215 ha útiles** / 646,750 m²
- Estructura: Tracker single-axis
- Plazo: 4 semanas (limpieza one-time + deshierbe)
- Alcance RODARDOS: limpieza, vegetación, caminos

## Servicios (2 pilares, en `shared.jsx` → `SERVICES`)
1. **Limpieza de paneles** — sin invalidar garantía Canadian Solar. Adaptable a seco o húmedo. Operamos con equipos de cepillos y robots de limpieza automatizada.
2. **Control de vegetación / deshierbe** — contamos con tractores propios equipados con aditamentos especializados de deshierbe, lo que permite cubrir grandes superficies y cumplir plazos exigentes.

> **Nota:** RODARDOS Solar **no ofrece** inspección termográfica con drones (servicio retirado en commit `b9922dc`). Pueden usarse drones para tomas aéreas de marketing, pero no como servicio comercial. Iconos `IconDrone` y datos legados en `shared.jsx` se mantienen por compatibilidad histórica.

## Diferenciadores (en `shared.jsx` → `DIFERENCIADORES`)
- Equipo y maquinaria propios (0 subcontratos)
- Base Sonora (Guaymas) — respuesta rápida regional
- SLA por contrato + reporte semanal al asset manager

## Estructura del proyecto

```
Rodardos Solar - Home.html      # entry point. carga React + Babel + scripts
app.jsx                          # monta el design_canvas con todas las variantes
design-canvas.jsx                # starter component (pan/zoom, artboards reorderables)
tweaks-panel.jsx                 # starter component (panel de tweaks + hooks)
shared.jsx                       # tokens, SERVICES, DIFERENCIADORES, PHOTOS, iconos, wordmark
styles.css                       # CSS variables + utilities (container, btn, field, eyebrow)
variant-corporate.jsx            # A · Corporativo Institucional (fotos aéreas, blanco)
variant-data.jsx                 # B · Industrial Data-driven (navy oscuro, monoespaciada)
variant-editorial.jsx            # C · Editorial Premium (serif, asimetría)
variant-light.jsx                # D · Industrial Light (B en blanco, fotos reales)
variant-split.jsx                # E · Industrial Document (ficha técnica)
variant-color.jsx                # F · Industrial Color (B con más azul saturado) ← última iteración
assets/                          # logos + fotos reales del deshierbe en Tastiota (desh-01..13)
uploads/                         # originales sin tocar (logos y fotos crudas)
```

## Sistema visual común
- Token CSS en `styles.css`: `--marino`, `--cielo`, `--ink`, `--paper`, `--font-sans`, `--font-mono`, `--d-section` (padding vertical de sección — responde al tweak `density`).
- `shared.jsx` expone al window: `BRAND`, `SERVICES`, `DIFERENCIADORES`, `PHOTOS` (URLs Unsplash), `RodardosWordmark`, iconos `IconClean / IconLeaf / IconDrone / IconShield / IconMap / IconClock`.
- `variant-light.jsx` además expone `PHOTOS_REAL` con las fotos del proyecto real (deshierbe Tastiota).

## Tweaks activos
- **Acento**: Navy estricto / Solar (cielo) / Verde
- **Densidad**: Espacioso / Compacto
Persistencia via `__edit_mode_set_keys` + bloque `EDITMODE-BEGIN`/`EDITMODE-END` en `app.jsx`.

## Historial de iteraciones
1. **A/B/C** — primera ronda: corporativo / data-driven dark / editorial.
2. **D/E** — usuario pidió "industrial + más blanco" basado en B. Se integraron fotos reales del deshierbe Tastiota.
3. **F** — usuario pidió volver al rumbo de B con **más color azul** (no le gustó D/E). Variante actual recomendada: navy oscuro con gradientes radiales, bandas saturadas en KPIs, gradientes blue→cielo en titulares, cards con borde superior de color, formulario con CTA en gradiente.

## Próximos pasos sugeridos
- Confirmar variante final (sugerido: F)
- Sustituir fotos Unsplash por reales (tomas aéreas del parque, equipo, robots y tractores)
- Añadir: página Servicios (deep dive cada pilar), Proyectos, Nosotros, Contacto
- Versión mobile responsive
- Sumar testimoniales/firmas de cliente Reverau cuando sea posible

## Stack técnico
- HTML + React 18.3.1 (UMD) + Babel standalone — todo inline, sin build step.
- Cada variante es un componente JSX independiente que se expone a `window.VariantX` y se inyecta en un `<DCArtboard>` dentro del design canvas.
- **CRÍTICO**: cada archivo `<script type="text/babel">` tiene su propio scope. Comunicación entre archivos vía `window.X`. Nunca usar `const styles = {...}` global — colisiona.
- Para añadir una nueva variante: (1) crear `variant-newname.jsx` con `window.VariantNewname = ...`, (2) cargar en `Rodardos Solar - Home.html`, (3) añadir `<DCArtboard>` en `app.jsx`.

## Comandos útiles en Claude Code
- Para previsualizar: servir el folder con cualquier static server (`python -m http.server`, `npx serve`, etc.) y abrir `Rodardos Solar - Home.html`.
- No hay build, no hay npm. Es plano.
