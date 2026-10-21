# Estado del trabajo — PRO · 2026-10-20

**Rama:** `pro` · Los **14 commits** de abajo están pusheados a `origin/pro`.
**Deploy a PRO (campus.iviinstitute.com):** la mayoría **NO es automática** — ver §"Pendiente de desplegar".

---

## ⏭️ PARA MAÑANA — cambios SIN commitear (decisión de Bea 2026-10-20: dejarlo para mañana)

Hay cambios en el working tree **sin commitear ni pushear** (decidir mañana si se commitean/despliegan):

1. **`css-pro-adicional.css`** — 3 bloques nuevos pegados en "CSS adicional":
   - `margin-top` de la columna lateral derecha: Visor de Puntos (10) 20px; Monthly Seminars (11) y Must Read Papers (12) 25px.
   - **Buscador PNTs a la derecha**: `#page-totara-dashboard-33 .pnts-search-container { justify-content: flex-end }`. (Se había puesto por error en el organizado → necesitaba purga; movido al adicional para que aplique al instante.)
   - **Fix aviso "Must Read Papers Completados" (#inst8190, dashboard 12)**: quitar la tarjeta blanca de `.content.block-content:has(.no-results)`. El §6 (ya live) solo cubría `.totara-table-container`; inst8190 ("look antiguo") tiene la tarjeta blanca en `.content.block-content`, que solo se quitaba con cards (`#mrp-grid`) y en vacío se quedaba. **Verificado en vivo** en dashboard 12.
2. **`ESTADO-PRO-2026-10-20.md`** (este archivo) — también sin commitear.

**Al retomar:** decidir commit/push de lo anterior; re-pegar `css-pro-adicional.css` en "CSS adicional"; y, al fusionar definitivamente, añadir `.content.block-content` al selector de §6 del organizado (y mover el `justify-content` del buscador a la regla `.pnts-search-container`).

---

## Qué se hizo hoy (14 commits)

### Expediente — donut "Estado de mi formación" (mañana)
- `b9296e6` · Snapshots de referencia de bloques (header/footer/cookiebot) + `padding-top` en `.dcha` del Visor de Puntos.
- `b2f65fa` · Ocultar el donut teal duplicado del Expediente (#inst8161) y retirar su self-healing.
- `81879c8` · Donut Expediente: se deja solo en retirar el self-healing (estado-cursos.html ya oculta el `.rb-chartjs`); se revierte una regla CSS `!important` que rompía el failsafe.

### Fusión del CSS en pruebas (`css-pro-adicional.css`) → `css-totara-organizado.css`, por secciones
- `0ec6a4a` · §1 Expediente: pestaña de filtro activa con el color de cada estado (finalizada/en curso/no iniciada/no superada).
- `c1dd85b` · §2 Tablas Totara: zebra-striping azul (`#f0f5f680`), hover azul claro, filas centradas verticalmente (td **y** th).
- `486f70a` · §3 Descripción de actividad (cursos onetopic) sin caja, alineada con el título (`margin-left` 65→40, quita fondo/padding/esquina).
- `f58be8c` · §4 Paginación de "Monthly Seminars Completados" (#inst8174) con texto en blanco.
- `3a18101` · §5 Ocultar el informe "Curso Presentación" (#inst11192) en la home (dashboard 9).
- `c7dae78` · §6 Avisos de report tables vacías (`.no-results`) con estilo de marca (caja azul + icono "i", sin tarjeta blanca cuando está vacío). **Vacía** `css-pro-adicional.css`.

### Funcionalidades nuevas (tarde)
- `1ae48b0` · **Monthly Seminars Completados**: paginación en cliente de las cards (`.exp-pagination`, 9 por página), como el Expediente.
- `e32a796` · **Título del banner LFE** (home): el JS leía de #inst12019 (banner) en vez de #inst11192 (informe) → no cambiaba el título ni ocultaba el informe. Corregido + reintentos/observer.
- `3bde562` · **Visor de Puntos**: badge de puntos en "Cursos del Catálogo" (#inst281) en navy (color de su cabecera), como las demás secciones. (Certificados #inst280 ya estaba configurado en morado.)
- `8bab163` · **PNTs (dashboard 33)**: buscador global por título (filtra ambas secciones a la vez, respeta estado y paginación) + arreglo del **estado vacío** (secciones siempre con cabecera + pestañas a 0 + aviso) + traducción del término por idioma. **Fuente canónica del bloque inst11104, antes sin versionar.**
- `8dce8ab` · **CSS adicional**: buscador de PNTs alineado a la derecha + `margin-top` de la columna lateral derecha (Visor de Puntos 20px; Monthly Seminars y Must Read Papers 25px).

---

## Estado de los archivos clave

- **`css-totara-organizado.css`** (CDN jsDelivr `@pro`): contiene ya §1–§6, el badge de #inst281, el aviso `.no-results`, etc.
- **`css-pro-adicional.css`** (se pega en "CSS adicional" del tema): **NO vacío** — contiene 2 cosas pendientes de fusionar al organizado:
  1. `#block-region-side-post` margin-top (dashboards 10=20px, 11 y 12=25px).
  2. `#page-totara-dashboard-33 .pnts-search-container { justify-content: flex-end }` (buscador PNTs a la derecha).
- **Scripts (bloques HTML pegados a mano en Totara):**
  - `bloques/4-codigo-nuevo/monthly-seminars--cards.html` → bloque **inst12078** (dashboard 11).
  - `bloques/4-codigo-nuevo/Formacion-General-con-LFE_HOME/02_home--JS_titulo-lfe.html` → bloque **inst12020** (dashboard 9).
  - `bloques/4-codigo-nuevo/visor-puntos--badges-puntos.html` → bloque **inst12075** (dashboard 10).
  - `bloques/4-codigo-nuevo/pnts--tiles-filtro.html` → bloque **inst11104** (dashboard 33). **NUEVO archivo** (captura + modificaciones).

---

## Pendiente de desplegar a PRO (acciones manuales de Bea)

1. **Re-pegar los 4 scripts** en sus bloques Totara (los de arriba): inst12078, inst12020, inst12075, inst11104.
2. **Pegar `css-pro-adicional.css`** en el campo "CSS adicional" del tema (aplica al instante): trae el margin lateral y el buscador PNTs a la derecha.
3. **Purgar jsDelivr `@pro`** del organizado para que lleguen §1–§6 + badge + aviso:
   `https://purge.jsdelivr.net/gh/educationivige/campus-rebrand@pro/css-totara-organizado.css`
4. **Monthly Seminars Completados**: subir el "Número de registros por página" del informe a un número alto (p.ej. 200) para que la paginación de las cards cubra a todos los usuarios.

---

## Verificaciones pendientes / avisos

- **PNTs — estado vacío**: no reproducible como admin (tengo datos). Verificar con un usuario **sin** PNTs: "PNTs Globales/Requeridos" deben salir con cabecera + pestañas a 0 + aviso (no en blanco).
- **PNTs — buscador**: verificado el campo + filtrado en preview; confirmar en real tras re-pegar inst11104. Término por idioma: es=PNT, en=SOP, pt=POP, it/cs=SOP, sv=SOP:er.
- **§1–§6 + badges**: verificados en vivo (inyectando), pero la versión del organizado requiere purga `@pro` para confirmar en real.

---

## Al cerrar: fusión final del `css-pro-adicional.css`

Cuando se validen el margin lateral y el buscador PNTs a la derecha, **fusionarlos** en `css-totara-organizado.css` (el `justify-content` va en la regla `.pnts-search-container`), **vaciar** el adicional y hacer **una** purga `@pro`.
