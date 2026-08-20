# Paneles de administración — imágenes a resubir con la paleta nueva

El teal que queda en los paneles NO es CSS: está dentro de imágenes subidas a
Totara (heros y tiles de featured-links) y en la config de color de las gráficas.
El CSS ya adopta la marca nueva (fondo warm-gray, sin cajas, títulos IVI Glance
navy, buscador/navs azules, administrador de reportes). Para terminar el
rebranding hay que **resubir estas imágenes** (lo hace Bea en Totara) y ajustar
los colores de las gráficas en cada informe.

## 1. Tiles teal de "Informes destacados / Featured Reports"

Reutilizan un set compartido: **solo hay que rediseñar 6 gráficos** (fondo teal +
icono → paleta nueva) y resubirlos en el bloque de cada región.

| Gráfico (archivo) | Representa | Aparece en |
|---|---|---|
| `seguimiento.png` | Informe de Seguimiento / Follow-up / Monitoraggio | todas |
| `usuarios.png` | Usuarios de mi región | todas |
| `audiencias.png` | Audiencias | todas |
| `audiencias-global.png` | Audiencias por usuario | Latam, Italy, NA, NE |
| `cursos_informe.png` | Informe de cursos / Course Details (y "Tiempo de conexión seminarios" en Latam) | todas |
| `encuesta.png` | Encuestas de satisfacción | solo Latam |

Bloques donde reemplazarlas (config del bloque → cada tile):

| Región | Dashboard | Bloque | InstID (PRE) |
|---|---|---|---|
| Latam | 22 | Informes destacados | inst9321 |
| Italy | 3 | Report in evidenza | inst9372 |
| North America | 2 | Featured Reports | inst9363 |
| North Europe | 4 | Featured Reports | inst9367 |
| Middle East | 26 | Featured Links | inst9453 |

## 2. Hero (banner superior)

Todas las regiones con hero usan la MISMA imagen teal: **`bg-admin.jpg`**
(bloque slickslider `.lfe_hero`). Resubir una versión con la paleta nueva.
Global (dashboard-23) no tiene hero.

## 3. Gráficas (ChartJS)

"Finalización vs Inscritos", "Accesos de usuarios por mes", etc.: los colores de
serie (barras/líneas/leyenda) salen de la **config del informe en Totara**
(Report builder → ajustes de gráfico), no del CSS. Cambiar ahí a la paleta nueva.

## NO tocar (ya están bien)

- Tiles de foto "Global Course Tracking / Seguimiento de Cursos Globales"
  (Compliance, IVI RMA Corporate Course, DEI) — son fotos, no teal.
- Tiles morados de "Informes LFE" — ya con la marca nueva.

> IDs de PRE; revisar en PRO.
