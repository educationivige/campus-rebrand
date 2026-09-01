# Plan de migración del rebranding — de PRE a otro entorno (ensayo) y a PRO

> Objetivo doble:
> 1. **Ensayar** la migración de un entorno de pruebas (PRE, `actuatxp`) a **otro
>    entorno de pruebas** clon, para **cronometrar** cuánto se tarda y detectar fallos.
> 2. Con esos datos, estimar la **migración real a producción** (PRO, `ivirmacampus`):
>    cuánto tiempo total, **cuánto hay que parar el campus** y **cómo repartir el
>    trabajo** entre varias personas para tardar menos.

- **PRE** = `https://ivirma.actuatxp.com/` (donde se prueba).
- **PRE-2** = segundo entorno de pruebas / clon (donde se hace el ensayo cronometrado).
- **PRO** = `https://ivirmacampus.com/` (producción).

Estado de partida por panel: ver `SEGUIMIENTO-PANELES.md` y `Seguimiento-Paneles-Control.xlsx`.

---

## 1. Qué se migra y por qué canal (esto manda en el tiempo y el downtime)

No todo se migra igual. Hay **4 canales** y cada uno tiene un coste y un riesgo distinto:

| # | Canal | Qué incluye | Cómo se migra | ¿Downtime? | ¿Por panel? |
|---|---|---|---|---|---|
| A | **CSS global por CDN** (jsDelivr) | `css-totara-organizado.css`, `imr/css-tenant-imr.css` | Publicar en el repo/tag de PRO (tag inmutable `@vX.X`) + apuntar la URL + **purgar** | Casi nulo (posible “flash” de estilos) | **No, es global** |
| B | **JS global por CDN** (jsDelivr) | `additional-html-footer.js` (incluye recolor de gráficas ChartJS) | Igual que A: push al tag + purgar | Casi nulo | **No, es global** |
| C | **Additional HTML de Totara** | `additional-html-head.html` y scripts de `expediente/*.html` | Pegar a mano en los campos “Additional HTML head/footer” de la administración | Nulo (aplica al guardar) | Global (1 pegado) |
| D | **Bloques HTML/JS por página** | Home, LFE, Monthly, Expediente, PNTs, paneles admin, certificados… | Pegar el HTML/JS en **cada bloque/página** de Totara, en cada entorno | Nulo por bloque, pero deja estado mixto | **Sí, uno a uno** |
| D' | **Plantillas de BD (mod_data)** | Card de certificados: `PLANTILLA CSS` y `PLANTILLA JAVASCRIPT` de la actividad “Base de datos” | Pegar en las pestañas de plantilla de esa BD | Nulo (aplica al instante) | Por BD |

**Idea clave:** A, B y C son **operaciones globales** que se hacen **una sola vez** y benefician a todos los paneles a la vez. El grueso del tiempo se va en **D** (pegar bloques panel por panel). Por eso el reparto entre personas se hace sobre los paneles de D.

> Nota para que el ensayo sea representativo de PRO: si PRE-2 ya apunta al mismo
> `@main` que PRE, el CSS/JS “ya estaría” y no medirías el paso A/B real de PRO.
> Para simular PRO, **crea un tag de versión** (`@vX.X`) y **repunta** PRE-2 a ese
> tag, así cronometras también el repunte + purga que sí harás en producción.

---

## 2. Procedimiento de migración (orden recomendado)

El orden importa porque el CSS global (A) hace que los bloques (D) se vean bien.
Dos estrategias válidas:

- **Opción recomendada — “staging + cutover”:** pega antes todos los bloques (D) y
  plantillas (D') con el CSS todavía **sin** activar. Los usuarios siguen viendo el
  campus viejo. Al final, en una **ventana corta**, activas A/B/C y purgas → todo
  cambia a la vez, coherente. Minimiza el estado mixto y el downtime percibido.
- **Alternativa “CSS primero”:** activas A/B/C y luego vas pegando bloques. Más simple
  de coordinar, pero durante el pegado hay páginas a medio migrar visibles.

### Pasos

0. **Preparación (antes de tocar el entorno)**
   - Clonar/confirmar PRE-2 como copia de PRE.
   - Congelar cambios en el código (rama estable).
   - Crear el **tag de versión** de los assets (CSS + `footer.js`) para PRO.
   - Tener a mano el inventario de bloques por panel (columna “Páginas del repositorio” del Excel).

1. **Bloques por página (D)** — el grueso. Panel por panel, pegar el HTML/JS de
   `bloques/4-codigo-nuevo/…` (y los de `3-codigo-actual/` de admin) en su bloque de Totara.
2. **Plantillas de certificados (D')** — pegar `PLANTILLA CSS` y `PLANTILLA JAVASCRIPT`
   en la(s) BD de certificados.
3. **Additional HTML (C)** — pegar `additional-html-head.html` y los scripts de `expediente/`.
4. **CDN global (A + B)** — publicar/repuntar CSS y `footer.js` al tag y **purgar caché**.
   *(La purga la hace Bea manualmente.)*
5. **Verificación (smoke test)** — recorrer los 23 paneles: estilos, gráficas recoloreadas,
   visores, certificados, responsive. Checklist en §6.

---

## 3. Estimación de tiempos (1 persona)

Tiempos de **ejecución de la migración** (no de rediseño, que ya está hecho), incluyendo
pegar, guardar y comprobar cada elemento. Son estimaciones; el ensayo en PRE-2 sirve
para ajustarlas.

### 3.1. Pasos globales (una sola vez)

| Paso | Tarea | Tiempo est. |
|---|---|---|
| A | Publicar CSS en tag PRO + apuntar URL | 15–30 min |
| B | Publicar `footer.js` en tag + apuntar URL | 5–10 min |
| — | Purga de caché jsDelivr + esperar propagación | 10–15 min |
| C | Pegar `additional-html-head.html` + scripts de expediente | 10 min |
| D' | Plantillas CSS/JS de la BD de certificados | 15 min |
| **Subtotal global** | | **~55–80 min** |

### 3.2. Bloques por panel (canal D) — en orden de la captura

| Nº | Panel | Bloques aprox. | Tiempo est. |
|---|---|---|---|
| 1 | Formación General con LFE (Home) | ~10 | 40–50 min |
| 2 | Externos | ~3 | 15–20 min |
| 3 | Formación Learning for Excellence | ~5 | 30–35 min |
| 4 | Visor de Puntos LFE | 1–2 | 10–15 min |
| 5 | Monthly Seminars | ~4 | 25–30 min |
| 6 | Must Read Papers *(por confirmar)* | 1–2 | 10–15 min |
| 7 | Expediente (+ plantillas cert.) | varios | 30–40 min |
| 8 | Panel Admin_North Europe | 1 | 12–15 min |
| 9 | Panel Admin_North America | 1 | 12–15 min |
| 10 | Panel Admin_Italy | 1 | 12–15 min |
| 11 | Iberia-latam | — | **N/A** |
| 12 | IMR (tenant, CSS propio) *(por confirmar)* | varios | 25–30 min |
| 13 | Juno Academy | — | **Revisar** |
| 14 | Mi panel como Manager | 1 | 12–15 min |
| 15 | … Status | — | **Revisar** |
| 16 | Panel Admin _Latam | 1 | 12–15 min |
| 17 | Panel Admin Global (+ report_manager) | 1–2 | 20–25 min |
| 18 | Panel admin_meast | 1 | 12–15 min |
| 19 | Visor de Puntos LFE 2025 | 1 | 8–10 min |
| 20 | OneTech Training *(por confirmar)* | 1–2 | 12–15 min |
| 21 | Expediente IMR *(por confirmar)* | 1 | 10–15 min |
| 22 | [Admin tenant] IMR *(por confirmar)* | 1 | 10–15 min |
| 23 | PNTs | 1–2 | 12–15 min |
| — | **Reasubir imágenes teal** (paneles admin) | — | 15–20 min |
| **Subtotal bloques** | | | **~6–7 h** |

### 3.3. Total 1 persona

| Concepto | Tiempo |
|---|---|
| Pasos globales | ~1 h |
| Bloques por panel | ~6–7 h |
| Smoke test completo (23 paneles + responsive) | ~1–1,5 h |
| Margen por incidencias / repurgas / correcciones (~20 %) | ~1,5–2 h |
| **TOTAL estimado (1 persona)** | **~1,5–2 jornadas** (≈ 10–12 h efectivas) |

---

## 4. ¿Cuánto hay que parar el campus?

**Buena noticia: técnicamente, casi nada.** Por cómo está montado:

- **A/B (CDN):** cambiar el tag y purgar **no tira el sitio**. Como mucho hay un “flash”
  de estilos mientras propaga la caché. Se puede **preparar por adelantado** (publicar el
  tag) y solo **conmutar la referencia** en el momento del cutover.
- **C (Additional HTML) y D (bloques):** aplican **al guardar**, sin reinicio. Un usuario
  que cargue la página ve la versión vieja **o** la nueva, nunca una rota.

El único motivo real para una **ventana de mantenimiento** es evitar que los usuarios vean
un **estado mixto** (CSS nuevo con un bloque aún viejo, o al revés) mientras dura el cutover.

**Recomendación de parada:**

| Escenario | Parada del campus |
|---|---|
| Estrategia “staging + cutover” (recomendada) | **~30–45 min** en horario valle: solo para activar A/B/C, purgar y smoke test rápido. El pegado de bloques se hace antes, en caliente, sin parar. |
| Estrategia “CSS primero” | Sin parada dura, pero **1,5–2 h de estado visualmente mixto** visible para usuarios. |
| Máxima prudencia | Banner “SITIO EN MANTENIMIENTO” durante el cutover (~45–60 min) y hacerlo de noche / fin de semana. |

**Conclusión:** no hace falta parar el campus durante horas. Basta una **ventana de
30–60 minutos** (idealmente en horario de baja actividad) para el cutover global y la
verificación; el resto del trabajo (pegar bloques) se puede hacer con el campus en marcha.

---

## 5. Cómo repartir el trabajo entre varias personas

El cuello de botella no es el CPU: es que **todos editan la misma administración de Totara**.
Para paralelizar sin pisarse, se **reparte por paneles/páginas** (cada persona su lote, sin
solaparse) y **una sola persona** es dueña de los pasos globales (A/B/C) y de la purga, que
son **serie** y hay que coordinar.

### Reparto propuesto (equipo de 3–4)

| Rol | Lote de paneles | Tiempo est. |
|---|---|---|
| **Persona 1 — Home & Formación** | 1 Home, 2 Externos, 20 OneTech, 23 PNTs | ~1,5 h |
| **Persona 2 — LFE** | 3 LFE, 4 Visor, 5 Monthly, 6 Must Read, 19 Visor 2025 | ~1,5–2 h |
| **Persona 3 — Admin** | 8, 9, 10, 14, 16, 17, 18 + reasubir imágenes teal | ~2 h |
| **Persona 4 — Expediente & IMR** | 7 Expediente (+ plantillas cert.), 12 IMR, 21 Exp. IMR, 22 Admin tenant IMR | ~1,5 h |
| **Coordinación (una de ellas)** | Pasos globales A/B/C + purga + smoke test final | ~1–1,5 h |

> Paneles 11 (Iberia-latam), 13 (Juno), 15 (…Status): **excluidos / a revisar**, no entran.

### Dependencias y reglas de coordinación

1. **Regla anti-colisión:** dos personas **no** editan el mismo panel/página a la vez. El
   reparto por lotes ya lo evita.
2. **Los pasos globales son serie:** la publicación del CSS/JS y la **purga** las hace **una
   sola persona**, no en paralelo. Se hacen **al final** (estrategia staging), cuando todos
   han terminado sus bloques → un único cutover coherente.
3. **Smoke test cruzado:** que cada persona verifique el lote **de otra**, no el suyo (más
   fiable).
4. **Punto de sincronización:** todos avisan “lote listo” antes del cutover global.

### Tiempo con equipo

| Configuración | Tiempo total (calendario) |
|---|---|
| 1 persona | ~1,5–2 jornadas |
| Equipo de 3 (bloques en paralelo + global en serie) | **~medio día** (~4 h) |
| Equipo de 4 | **~3–3,5 h** |

El límite lo ponen los pasos globales + purga + smoke test (~1–1,5 h) que no se paralelizan;
por debajo de eso no se baja por muchas personas que se añadan.

---

## 6. Verificación y rollback

**Checklist smoke test (por panel):**
- [ ] Estilos base cargan (fuentes, colores de marca, cabecera/footer).
- [ ] Gráficas recoloreadas a la paleta (paneles admin, Mi panel Manager).
- [ ] Visores de puntos (LFE, Monthly) con badges/iconos correctos.
- [ ] Cards de curso y certificados (Expediente + BD de certificados) OK.
- [ ] Responsive móvil (`max-width: 767px`).
- [ ] Multilenguaje `{mlang}` correcto donde aplique.

**Rollback (si algo sale mal):**
- **A/B (CDN):** volver a apuntar la URL al **tag anterior** + purgar → revierte el look global en minutos. Por eso conviene usar **tags inmutables** en PRO (no `@main`).
- **C/D (pegados):** guardar copia del HTML **anterior** de cada bloque/campo antes de sobrescribir, para poder pegar la versión vieja si hace falta.

---

## 7. Cómo aprovechar el ensayo en PRE-2 para estimar PRO

1. Cronometrar **cada lote** por separado (no solo el total).
2. Anotar **incidencias** (bloques que fallan, purgas que tardan, permisos, tenants).
3. Medir el **cutover real** (activar A/B/C + purga + smoke) → ese número es tu **ventana de
   parada** para PRO.
4. Ajustar la tabla de §3 con los tiempos reales y recalcular el total de PRO.
5. Diferencias esperadas PRO vs PRE-2: tags inmutables en vez de `@main`, más tenants
   activos, más tráfico (elegir mejor la franja horaria), y posibles permisos distintos.

---

_Documento de planificación. Los tiempos son estimaciones a validar con el ensayo en PRE-2.
Ítems marcados “por confirmar” dependen de cerrar el detalle de OneTech, Must Read, IMR y
los paneles redactados en la captura._
