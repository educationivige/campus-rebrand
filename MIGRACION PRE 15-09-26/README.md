# Migración PRE1 → PRE2 · martes 15-sep-2026

Documento de trabajo: **`MIGRACION-PRE2-15-09-26.xlsx`** (hojas *Resumen · Bea · Sandra*).
La barra morada de PRE2 se pega desde **`Bea/css-adicional-PRE2.css`**.

## Objetivo
Dejar **PRE2** (`https://ivipre.actuatxp.com/`) lo más parecido posible a **PRE1**
(`https://ivirma.actuatxp.com/`), replicando la capa de rebranding.

## Reparto: POR PANEL
Cada **panel/página entero** va a una persona según cuántas cosas tenga:
**los de menos cosas → Sandra; los de más → Bea.** Lo técnico global (tema, informes
ocultos, campos y filtros del catálogo, gráficas) queda con **Bea**; subir imágenes con **Sandra**.

| Panel / página | Nº cosas | Responsable |
|---|---|---|
| Home internos · dashboard-9 | 12 | **Bea** |
| Certificados · BD + páginas | 13 | **Bea** |
| LFE «Mi LFE» · dashboard-1 (+ curso LFE 2026) | 7 | **Bea** |
| Visor de puntos · dashboard-10 | 6 | **Bea** |
| Paneles admin · d2,3,4,22,23,26 | + config | **Bea** |
| GLOBAL — tema + informes + filtros + gráficas | — | **Bea** |
| Home externos · dashboard-6 | 4 | **Sandra** |
| Monthly Seminars · dashboard-11 | 4 | **Sandra** |
| Expediente · dashboard-16 | 3 | **Sandra** |
| Catálogo | 2 | **Sandra** |
| Must Read · dashboard-12 | ~1 | **Sandra** |
| PNTs · dashboard-33 | ~1 | **Sandra** |
| Emails | 2 | **Sandra** |
| GLOBAL — subir imágenes | — | **Sandra** |

> **Carga**: Bea va más cargada por diseño (tiene los paneles grandes + lo técnico). Si Sandra
> termina antes, que ayude a Bea pegando bloques de sus paneles que **no** requieran config.

## Ventana y fases
Martes 15-sep, **10:30–15:00**. Trabajar con PRE1 y PRE2 en paralelo (PRE1 = referencia).
- **10:30–10:45 · Fase 0 (juntas):** acceso, edición ON, verificar jsDelivr, Bea pasa el pack de imágenes.
- **10:45–12:00 · Fase 1:** Bea monta la base visual (tema/fuentes); Sandra sube imágenes.
- **12:00–14:00 · Fase 2:** cada una hace sus paneles (Bea también la config global).
- **14:00–14:45 · Fase 3 (juntas):** verificación panel por panel.
- **14:45–15:00 · Buffer.**

## Repositorio / dominio — YA HECHO ✔
- **Rama `pre2` creada** (copia de `main`) con el dominio **`ivirma.actuatxp.com → ivipre.actuatxp.com`**
  en los archivos que van por CDN (`css-totara-organizado.css` 7 refs, `additional-html-footer.js` 1 ref).
  Commit `c7107b1`, pusheada a `origin/pre2`. **`main` (PRE1) queda INTACTO.**
- PRE2 carga su CSS/JS de **`@pre2`** (los archivos `additional-html-*-PRE2.html` ya apuntan ahí).
- ⚠️ **Consecuencia**: al pedir el CSS de pre2 las imágenes/máscaras a `ivipre`, **subir imágenes a
  PRE2 pasa a ser OBLIGATORIO** (antes era opcional). Si faltan, los iconos del topbar dan 404.
- No se tocaron las refs a `ivirmacampus.com` (dominio viejo, decisión aparte).
- Purga de jsDelivr `@pre2` si hace falta refrescar (la hace Bea).

## Supuestos clave
1. **PRE2 ya tiene la base** (Totara clonado: cursos, dashboards con sus bloques, informes base).
   Aquí solo migramos el rebranding. Falta de base → bloqueante, se anota.
2. **CSS/JS por jsDelivr**: PRE1 usa `@main`, PRE2 usa `@pre2` (aislados). Cambiar `pre2` NO afecta a PRE1.
3. **Dominio**: en `pre2` ya apunta a `ivipre` → las imágenes/máscaras deben estar **subidas a PRE2**.
4. **inst-ids**: el CSS scopea reglas por `#instXXX` de PRE1; en PRE2 los ids cambian → esas
   reglas no casarán hasta reapuntarlas (**delta conocido**, ver hoja Bea).

## Archivos de esta carpeta
- `MIGRACION-PRE2-15-09-26.xlsx` — plan completo (Resumen + Bea + Sandra), con estado desplegable.
- `Bea/additional-html-head-PRE2.html` — «Additional HTML head» de PRE2 (@pre2 + IVI Glance ivipre).
- `Bea/additional-html-footer-PRE2.html` — `<script>` de footer.js `@pre2`.
- `Bea/css-adicional-PRE2.css` — barra morada, se pega en «CSS adicional» de PRE2.
- `Bea/ESTRATEGIA-repo-y-dominio.md` — por qué rama y no repo nuevo, y las dos capas.
