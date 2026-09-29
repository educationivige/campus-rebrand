# Migración de paneles — IVI Institute Education

Copia simple de la pantalla **Administración del sitio › Navegación › Paneles de
control** (captura `Paneles-Control-Rebranding.png`), en el mismo orden, para
llevar el control de la migración.

**Leyenda — Migrado:** `✅` sí · `☐` no.

- La columna **Migrado** viene prellenada según el check verde de la captura.
- **Realizado por** prellenado con «Bea» donde está migrado (ajústalo si lo hizo
  otra persona).
- **Dashboard** = id del panel (`.../totara/dashboard/index.php?id=N`). Los ids
  son de **PRE** y pueden cambiar en PRO; «(confirmar)» = pendiente de verificar.
- **Observaciones** = lo que falta por hacer / a confirmar en cada panel.

| # | Panel | Dashboard | Tenant / Disponibilidad | Migrado | Realizado por | Observaciones |
|---|---|---|---|---|---|---|
| 1 | Formación General con LFE | dashboard-9 | Audiencias (3) | ✅ | Bea | Falta aplicar en PRO. |
| 2 | Externos | dashboard-6 | Externos | ✅ | Bea | Falta aplicar en PRO. |
| 3 | Formación Learning for Excellence | dashboard-10 | Audiencias (9) | ✅ | Bea | Falta aplicar en PRO. |
| 4 | Visor de Puntos LFE | (confirmar) | Audiencias (10) | ✅ | Bea | Falta aplicar en PRO. |
| 5 | Monthly Seminars | dashboard-11 | Audiencias (10) | ✅ | Bea | Falta aplicar en PRO. |
| 6 | Must Read Papers | (confirmar) | Audiencias (10) | ✅ | Bea | Confirmar detalle específico. Falta PRO. |
| 7 | Expediente | dashboard-16 | Todos los usuarios logueados | ✅ | Bea | Falta aplicar en PRO. |
| 8 | Panel Admin_North Europe | dashboard-4 | North Europe | ✅ | Bea | Resubir imágenes teal (hero/tiles). Falta PRO. |
| 9 | Panel Admin_North America | dashboard-2 | North America | ✅ | Bea | Resubir imágenes teal (hero/tiles). Falta PRO. |
| 10 | Panel Admin_Italy | dashboard-3 | Italy | ✅ | Bea | Resubir imágenes teal (hero/tiles). Falta PRO. |
| 11 | Iberia-latam *(redactado)* | (confirmar) | Iberia-latam-cz | ☐ | — | «Disponible para ningún usuario» → confirmar si se usa. |
| 12 | IMR | (confirmar) | IMR | ✅ | Bea | Confirmar detalle del tenant IMR. Falta PRO. |
| 13 | Juno Academy *(redactado)* | (confirmar) | Juno Academy | ☐ | — | Confirmar si aplica al rebranding. |
| 14 | Mi panel como Manager | dashboard-15 | Audiencias (1) | ☐ | — | Fondo + alturas + recolor de gráficas hechos; pendiente purga jsDelivr y validar. |
| 15 | …Status *(redactado)* | (confirmar) | Audiencias (1) | ☐ | — | Nombre redactado → confirmar cuál es y si aplica. |
| 16 | Panel Admin _Latam | dashboard-22 | Iberia-latam-cz | ✅ | Bea | Resubir imágenes teal (hero/tiles). Falta PRO. |
| 17 | Panel admin global *(redactado)* | dashboard-23 (¿?) | Audiencias (1) | ☐ | — | ¿Duplicado del dashboard-23? Confirmar. |
| 18 | Panel admin_meast | dashboard-26 | Middle East | ✅ | Bea | Resubir imágenes teal (hero/tiles). Falta PRO. |
| 19 | Visor de Puntos LFE 2025 | (confirmar) | Audiencias (10) | ✅ | Bea | Falta aplicar en PRO. |
| 20 | OneTech Training | (confirmar) | Audiencias (3) | ✅ | Bea | Confirmar cambios exactos. Falta PRO. |
| 21 | Expediente IMR | (confirmar) | Audiencias (1) | ☐ | — | Confirmar si aplica / cambios. |
| 22 | [Admin tenant] IMR | (confirmar) | IMR | ☐ | — | Confirmar si aplica / cambios. |
| 23 | PNTs | dashboard-33 | Audiencias (1) | ✅ | Bea | Pendiente purga jsDelivr. Falta PRO. |

---

## Observaciones generales (lo que falta)

- **Paneles de administración regionales** (North America, Italy, North Europe,
  Latam, Middle East, Global): el CSS está migrado, pero falta **resubir a Totara
  las imágenes teal** con la paleta nueva (hero `bg-admin` + tiles de informes
  destacados) — ver `bloques/4-codigo-nuevo/panel-admin--imagenes-a-resubir.md`.
- **Panel Admin Global** (dashboard-23): además incluye el rediseño del
  *Administrador de reportes* (vistas cuadrícula/lista con toggle).
- **Purga de jsDelivr**: los cambios servidos por CDN (CSS y footer.js) no llegan
  al campus hasta purgar. Pendiente en varios paneles.
- **PRO**: todo lo marcado como migrado está en **PRE**; falta replicarlo en
  producción (`ivirmacampus.com`), que además apunta a otro repositorio de assets.
- **Filas redactadas en la captura** (11, 13, 15, 17, 22): confirmar el nombre y
  si entran o no en el rebranding.

> Para el detalle por panel (archivos, CSS, estado PRE/PRO), ver
> `SEGUIMIENTO-PANELES.md`.

_Última actualización: 2026-09-21._
