# Estrategia de repo y dominio para PRE2

## El problema
Hoy **PRE1 y PRE2 cargarían el mismo CSS/JS** desde `educationivige/campus-rebrand@main`
(por jsDelivr). Por tanto, **cualquier cambio que empujes para PRE2 tocaría también PRE1**.
Para no “perder”/alterar lo de PRE1 hay que **aislar** los assets de PRE2.

## Recomendación: rama `pre2` (NO un repo nuevo)
- `main`  → jsDelivr `@main`  → **PRE1** (queda intacto).
- `pre2`  → jsDelivr `@pre2`  → **PRE2** (aquí sí se puede tocar dominio/inst-ids).
- Ventajas frente a un repo nuevo: 1 solo repo, historia compartida, y los arreglos se
  pasan de un entorno a otro con `git merge` / `cherry-pick` (con dos repos habría que
  copiar a mano para siempre).

jsDelivr sirve ramas igual que `@main`:
`https://cdn.jsdelivr.net/gh/educationivige/campus-rebrand@pre2/css-totara-organizado.css`

## Dos capas (se pueden hacer por separado)
### Capa 1 — AISLAR (mínimo, para el ensayo)
Crear la rama `pre2` **como copia exacta de `main`** y apuntar PRE2 a `@pre2`.
- PRE2 usa el MISMO CSS/JS que PRE1, pero desde su propia rama → a partir de aquí, lo que
  toques en `pre2` NO afecta a PRE1.
- Coste: casi cero. Es lo que hay que hacer **sí o sí** antes de tocar nada de PRE2.

### Capa 2 — DOMINIO (independencia total, opcional / después del ensayo)
En la rama `pre2`, buscar y reemplazar **`ivirma.actuatxp.com` → `ivipre.actuatxp.com`** en
los archivos que van por CDN: `css-totara-organizado.css`, `imr/css-tenant-imr.css`,
`additional-html-footer.js` (y revisar bloques que se peguen a mano).
- Arregla las **máscaras del topbar** (iconos ajustes/mensajes/notificaciones) y las URLs
  de imágenes, que necesitan **same-origin**.
- ⚠️ Requiere que esas imágenes **existan en PRE2** (las sube Sandra). Si no, darían 404.
- Para el ensayo se puede posponer: con la Capa 1, las imágenes de **fondo** cargan
  cross-origin desde PRE1 (se ven), y solo las **máscaras** y la **fuente IVI Glance**
  quedan degradadas hasta hacer la Capa 2.

## Qué NO cambia (va por CDN, no por dominio de plataforma)
`css-totara-organizado.css`, `imr/css-tenant-imr.css` y `additional-html-footer.js` se
sirven por jsDelivr → lo único que cambia es la **rama** (`@main`→`@pre2`), no el dominio
de la plataforma.

## Qué SÍ cambia por dominio (same-origin)
- **IVI Glance** (`webfont.php`) — está en el head (paste manual) → ya apuntado a `ivipre`
  en `additional-html-head-PRE2.html`.
- **Máscaras e imágenes** dentro del CSS — Capa 2 (S&R en la rama `pre2`).

## Archivos listos para PRE2 (en esta carpeta)
| Archivo | Dónde se pega en PRE2 | Apunta a |
|---|---|---|
| `additional-html-head-PRE2.html` | «Additional HTML head» | CSS `@pre2` + IVI Glance `ivipre` |
| `additional-html-footer-PRE2.html` | «Additional HTML» (footer) | footer.js `@pre2` |
| `css-adicional-PRE2.css` | «CSS adicional» del tema | (barra morada, sin dominio) |

## Pasos para dejarlo montado
1. ✔ **HECHO** — `git checkout -b pre2` + `git push -u origin pre2` (Capa 1).
2. ✔ **HECHO** — En `pre2`: S&R `ivirma.actuatxp.com` → `ivipre.actuatxp.com` (7 refs en el
   organizado + 1 en footer.js), commit `c7107b1`, pusheada (Capa 2). `main` intacto.
3. ☐ Pegar en PRE2 los 3 archivos de arriba (head/footer/CSS adicional).
4. ☐ **Subir a PRE2 las imágenes** referenciadas (ahora obligatorio: el CSS pide a ivipre).
5. ☐ Purga jsDelivr de `@pre2` si hace falta refrescar.

> Cuando PRE2 pase a producción/definitivo, se decide si `pre2` se fusiona a `main` o se
> corta un tag inmutable `@vX.X` (mejor para PRO que `@rama`).
