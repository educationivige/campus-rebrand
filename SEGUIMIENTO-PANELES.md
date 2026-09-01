# Seguimiento de paneles — Rebranding IVI Institute Education

Estado de cada panel (dashboard) del campus: qué cambios se han hecho, archivos
relacionados y si está aplicado en cada entorno.

- **PRE** = `https://ivirma.actuatxp.com/` (entorno de previos, donde se prueba).
- **PRO** = `https://ivirmacampus.com/` (producción, donde hay que aplicarlo).

Leyenda de check: `✅` hecho · `☐` pendiente · `⏳` en curso / pendiente de purgar.
La columna **PRE** está prellenada según los ✅ verdes de la captura
`Paneles-Control-Rebranding.png`; revísala y actualízala.

> **Recordatorio de despliegue** (qué implica "hecho"):
> - **CSS** (`css-totara-organizado.css`): se sirve por jsDelivr → requiere push + **purga**. En **PRO** la producción apunta a otro repo/tag (`campusneo-assets`), así que hay que **publicarlo/copiarlo allí también**.
> - **`additional-html-footer.js`**: va por CDN (jsDelivr) → push + purga; no se re-pega.
> - **`additional-html-head.html` y scripts de `expediente/`**: se pegan a mano en los campos "Additional HTML" de Totara.
> - **Bloques HTML / JS de página** (home, LFE, catálogo, certificados…): se pegan en cada bloque/página de Totara, en cada entorno.

---

## Home / Formación

| Panel | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **Formación General con LFE** (Home interna, dashboard-9) | Home rebrandeada: hero, banner LFE, CTA catálogo, OneTech, Mis PNTs, repositorio de documentos, informe de finalización, cursos que imparto/tutorizo, Mis certificados. | `bloques/4-codigo-nuevo/Formacion-General-con-LFE_HOME/` (00–09) · `css-totara-organizado.css` §28 (HOME) | ✅ | ☐ |
| **Externos** (Home externos, tenant *Externos*) | Carrusel "cursos que te pueden interesar", certificados e insignias, Mis certificados (4 columnas, Ver/Descargar). | `bloques/4-codigo-nuevo/home-externos--cursos-interesar.html`, `home-internos.html`, `home-externos--js-ultimas-insignias.html` · CSS §MIS CERTIFICADOS | ✅ | ☐ |
| **OneTech Training** | *(Por confirmar los cambios exactos.)* | *(Por confirmar.)* | ✅ | ☐ |

## LFE (Learning for Excellence)

| Panel | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **Formación Learning for Excellence** (dashboard-10) | Hero, presentación, visor, avisos de puntos, formación obligatoria y de excelencia, CTA catálogo. | `bloques/4-codigo-nuevo/lfe--*.html` · CSS §4 (DASHBOARD LFE) y §19 (INFORMES LFE) | ✅ | ☐ |
| **Visor de Puntos LFE** | Visor con tabla original + badges/iconos por bloque (obligatoria en azul, excelencia por color de bloque). | `bloques/4-codigo-nuevo/lfe--visor-puntos.html`, `visor-puntos--badges-puntos.html` · JS en `additional-html-footer.js` | ✅ | ☐ |
| **Visor de Puntos LFE 2025** | Visor edición 2025 (título con año). | `bloques/3-codigo-actual/lfe--2025.html` · (base LFE) | ✅ | ☐ |
| **Monthly Seminars** (dashboard-11) | Hero, cards de curso, visor, avisos, "Monthly Seminars Completados" (cards estilo Expediente). | `bloques/4-codigo-nuevo/monthly-seminars--*.html` · CSS §4/§26 | ✅ | ☐ |
| **Must Read Papers** | *(Parte de LFE; por confirmar el detalle específico.)* | *(Base LFE; por confirmar.)* | ✅ | ☐ |

## Expediente

| Panel | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **Expediente** (dashboard-16) | Cards de cursos, tabs de filtro, donut de estado, Mis certificados, Añadir/Listado de certificados. | `expediente/*.html` · `bloques/4-codigo-nuevo/anadir-certificados--*.html`, `plantilla-*--certificados.*` · CSS §22 + §MIS CERTIFICADOS | ✅ | ☐ |

## Paneles de administración (sección 29 del CSS)

Los 5 regionales comparten el mismo tratamiento: fondo warm-gray, **bloques en tarjeta blanca con sombra**, hero pill, buscador, navs, gráficas (recuadro + **recolor de barras** a la paleta de marca), sidebar. Archivos comunes: `bloques/3-codigo-actual/panel-admin_<region>.html`, `css-totara-organizado.css` §29, `additional-html-footer.js` (recolor ChartJS), `bloques/4-codigo-nuevo/panel-admin--imagenes-a-resubir.md` (imágenes teal a resubir).

| Panel | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **Panel Admin_North America** (dashboard-2) | §29 admin (ver arriba). | Comunes §29 · `panel-admin_North-America.html` | ✅ | ☐ |
| **Panel Admin_Italy** (dashboard-3) | §29 admin. | Comunes §29 · `panel-admin_Italy.html` | ✅ | ☐ |
| **Panel Admin_North Europe** (dashboard-4) | §29 admin. | Comunes §29 · `panel-admin_North-Europe.html` | ✅ | ☐ |
| **Panel Admin _Latam** (dashboard-22) | §29 admin. | Comunes §29 · `panel-admin_Latam.html` | ✅ | ☐ |
| **Panel admin_meast** (Middle East, dashboard-26) | §29 admin. | Comunes §29 · `panel-admin_middle-east.html` | ✅ | ☐ |
| **Panel Admin Global** (dashboard-23) | §29 admin **+ Informes (report_manager) rediseñado**: vistas cuadrícula/lista con toggle, fichas en tarjeta, icono en recuadro azul, sin líneas. | Comunes §29 · `panel-admin_global.html`, `finalizacion-vs-inscritos.html` · CSS "Administrador de reportes" | ✅ | ☐ |
| **Mi panel como Manager** (dashboard-15) | Fondo warm-gray + altura de gráficas (400/800px) + **recolor de barras** (colores `#52b4bb`→teal, `#e39182`→light-blue). | `mi-panel-como-manager.html` · CSS §29 (fondo/alturas) · `additional-html-footer.js` (recolor) | ⏳ | ☐ |

## Otros

| Panel | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **PNTs** (dashboard-33) | Bloques PNTs, tabla estilizada, iconos. | CSS §6 (DASHBOARD PNTs) y §20 (BLOQUES PNTs) | ✅ | ☐ |
| **IMR** (tenant IMR) | *(Tenant IMR; por confirmar el detalle.)* | `imr/css-tenant-imr.css` *(por confirmar)* | ✅ | ☐ |
| **Expediente IMR** | *(Por confirmar si aplica / cambios.)* | *(Por confirmar.)* | ☐ | ☐ |
| **[Admin tenant] IMR** | *(Por confirmar si aplica / cambios.)* | *(Por confirmar.)* | ☐ | ☐ |

## Páginas de perfil / sistema (no son dashboards)

| Página | Cambios realizados | Archivos relacionados | PRE (actuatxp) | PRO (ivirmacampus) |
|---|---|---|---|---|
| **Calificaciones** (`grade/report/overview`, `#page-grade-report-overview-index`) | Los listados nativos "Cursos a los que estoy inscrito" y "Cursos que estoy enseñando" se muestran como **tarjetas en 4 columnas con paginación** (oculta la tabla nativa). Títulos visibles con icono Material (`menu_book` / `co_present`) en light blue; hover de paginación con relleno light blue y texto blanco; sin badge "Sin calificación". | `additional-html-footer.js` (IIFE acotado a `/grade/report/overview/`, monta las tarjetas) · `css-totara-organizado.css` §30 (`ivi-cursos-*`), complementa §15 (CALIFICACIONES) | ✅ *(pendiente purga)* | ☐ |

---

## Paneles marcados/redactados en la captura (confirmar si aplican)

En `Paneles-Control-Rebranding.png` aparecen tachados o redactados (sin ✅) — parecen excluidos del rebranding o sin usar. Confirmar:

- **Iberia-latam** (tenant Iberia-latam-cz) — "Disponible para ningún usuario" → probablemente no se usa.
- **Juno Academy** (tenant Juno Academy).
- **…Status** (nombre redactado).
- Otro **Panel admin global** redactado (¿duplicado del dashboard-23?).

---

_Última actualización: 2026-09-01._
