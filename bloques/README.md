# Proceso de rediseño bloque a bloque (Totara)

Sistema de trabajo para adaptar los bloques del campus uno a uno, sin acceso
al código fuente de Totara: cada bloque se rediseña como **bloque HTML** (+ JS
en `additional-html-footer.js` si hace falta) y se estiliza desde
`css-totara-organizado.css` (servido por jsDelivr).

## Estructura de carpetas

| Carpeta | Qué va aquí | Quién la llena |
|---|---|---|
| `1-diseno/` | Cómo debe quedar (mockup Figma, captura del prototipo) | Bea |
| `2-actual/` | Cómo se ve ahora en el campus (captura) | Bea |
| `3-codigo-actual/` | HTML actual del bloque (copiado del editor de Totara) | Bea |
| `4-codigo-nuevo/` | Código adaptado listo para pegar en Totara | Claude |

**Convención de nombres:** mismo *slug* en las 4 carpetas →
`<pagina>--<bloque>.<ext>`. Ejemplos:

```
1-diseno/home--banner-lfe.png
2-actual/home--banner-lfe.png
3-codigo-actual/home--banner-lfe.html
4-codigo-nuevo/home--banner-lfe.html
```

`1-diseno/` y `2-actual/` no se versionan (material de trabajo, como
`Secciones PNG/`). El código sí se versiona.

## Flujo por bloque

1. **Bea** deja los 3 inputs con el mismo slug: mockup en `1-diseno/`,
   captura actual en `2-actual/`, HTML actual en `3-codigo-actual/`.
2. **Bea** pide: *"Adapta el bloque `<slug>`"* (+ notas si las hay: enlaces,
   textos, idiomas, comportamiento).
3. **Claude** entrega:
   - `4-codigo-nuevo/<slug>.html` — SOLO el contenido para pegar en el
     bloque, sin cabeceras (los metadatos y TODOs van en este tablero;
     los `TODO-IMG`/`TODO-LINK` puntuales, como comentario en el cuerpo).
   - CSS del bloque en `bloques/css-adicional.css` → Bea lo pega ENTERO
     en el campo "CSS adicional" del tema para probar al momento (sin
     esperar a jsDelivr). Al verificar la sección, se fusiona en
     `css-totara-organizado.css` y se vacía el adicional.
   - Si hace falta JS: función en `additional-html-footer.js` siguiendo el
     patrón `config` + `instancias` existente.
   - Commit + push (el push publica el CSS en jsDelivr).
4. **Bea** aplica en Totara:
   - Pegar el HTML en el bloque (editor en modo código).
   - Poner la **clase del bloque** en su configuración (Apariencia → clase CSS).
   - Si hubo JS: volver a pegar `additional-html-footer.js` en el campo
     *Additional HTML footer*.
   - **Purgar jsDelivr** (manual, siempre Bea):
     `https://purge.jsdelivr.net/gh/educationivige/campus-rebrand@main/css-totara-organizado.css`
5. **Verificación:** Bea captura el resultado y lo deja en `2-actual/`
   (sobrescribiendo). Si no coincide con `1-diseno/`, se itera sobre el
   mismo slug.
6. Marcar el estado en el tablero de abajo.

## Convenciones técnicas (resumen para no repetirse)

- **Wrapper de Totara:** el contenido del bloque se renderiza dentro de
  `.content.block-content > .no-overflow`; el CSS se engancha por la clase
  del bloque: `.<clase> .no-overflow …` (ver `.cta_lfe`, `.cta-catalog`).
- **Clases de bloque:** prefijo `cta_` o descriptivo corto, en la config del
  bloque, nunca en el HTML pegado.
- **Colores:** solo tokens de marca (`--light-blue`, `--teal`, `--navy-blue`,
  `--warm-gray`, `--bg-blue`, `--bg-mint`…). Nada de hex sueltos salvo blanco.
- **Botones:** siempre sistema `.ivi-btn` + variante. Tipografía IVI Glance
  regular (ya lo hace el sistema). En `<a>`, añadir `style="color:#fff"`
  inline solo como guarda si el botón es de texto blanco (la regla de enlaces
  del tema pisa el color; el inline gana sin esperar a la caché).
- **Iconos:** Material Symbols (`<span class="material-symbols-outlined">nombre</span>`);
  la fuente ya se importa desde el CSS.
- **Textos:** TODO texto visible (titulares, párrafos, botones, badges…)
  va multilenguaje con `{mlang}` en los **6 idiomas del campus, siempre en
  este orden: `es, en, it, pt, cs, sv`**. Sin excepciones salvo nombres
  propios/marca (p. ej. "Learning for Excellence"). Formato:

  ```html
  <h3>{mlang es}¿Te gustaría descubrir más cursos?{mlang}{mlang en}Would you like to discover more courses?{mlang}{mlang it}Ti piacerebbe scoprire altri corsi?{mlang}{mlang pt}Gostaria de descobrir mais cursos?{mlang}{mlang cs}Chtěli byste objevit další kurzy?{mlang}{mlang sv}Vill du upptäcka fler kurser?{mlang}</h3>
  ```
- **Enlaces:** dominio de producción `https://ivirmacampus.com/…`.
- **Imágenes pendientes:** placeholder con los colores de marca y el nombre
  de lo que va ahí, más un comentario `TODO-IMG` encima con la URL final
  prevista (pluginfile). Patrón:

  ```html
  <!-- TODO-IMG: sustituir por
       https://ivirmacampus.com/pluginfile.php/1/local_uploadfiles/additionalimages/0/NOMBRE.svg -->
  <img src="https://placehold.co/200x200/DCE6FF/08004F?text=Badge+LFE" alt="" width="92" height="92">
  ```

- **CSS:** cada bloque nuevo, en una sección numerada y comentada del
  `css-totara-organizado.css`, con responsive (`@media (max-width: 767px)`).
  El `color` de los `<a>` estilizados lleva `!important` (regla del tema).
- **JS:** solo si el HTML/CSS no llega. Añadir a `additional-html-footer.js`
  dentro del patrón existente (`config` con `enabledForIds` + `instancias`).
  Recordar: el footer NO va por CDN, se pega a mano en Totara.

## Tablero de estado — Home

Estructura real según la captura de edición (`2-actual/home-bloques.png`).

### Bloques HTML personalizados (columna principal)

| Slug | instID | Clase bloque | Estado | Notas |
|---|---|---|---|---|
| `home--hero` | — | (slider tema) | Hecho, pendiente verificar | ⚠️ href del popup URL-encoded (ver TODO en el archivo) |
| `home--banner-lfe` | — | `cta_lfe` | Hecho, pendiente verificar | Botón con guarda inline; badge apunta a PRO |
| `home--cta-catalogo` | inst234 | `cta-catalog` | Hecho, pendiente verificar | Marcado del botón corregido (`.ivi-btn--white`) |
| `home--enlaces-interes` | — | `#links-lfe` (nativo) | Verificado (sin restyle) | Decisión 2026-07-13: tiles con las imágenes del bloque, sin CSS encima (28.6 retirada del organizado) |

### Bloques HTML personalizados (sidebar)

| Slug | instID | Clase bloque | Estado | Notas |
|---|---|---|---|---|
| `home--onetech` | — | `ivi-onetech` | Hecho, faltan URL+imagen | Cambiar clase `cta-onetech` → `ivi-onetech` en la config |
| `home--mis-pnts` | inst10603 | ninguna (`.ivi-pnts__card`) | Hecho, pendiente verificar | ⚠️ Borrar duplicado inst11485. El div lleva `pnts-card__title` (gancho del JS del contador, no quitar); falta subir motivo-flor-azul.svg |
| `home--repositorio-documentos` | — | `ivi-repositorio` | Hecho, falta URL | BLOQUE NUEVO: crearlo en el sidebar |
| `home--informe-finalizacion` | — | `ivi-kpi` | Hecho, pendiente verificar | Banner teal; ⚠️ misma URL que "Cursos que imparto" (confirmar informe adhoc) |
| `home--cursos-que-imparto` | — | `ivi-imparto` | Hecho, pendiente verificar | Enlace al informe de calificaciones (destino del bloque actual, a PRO); icono draftfile roto sustituido por Material Symbols |

### Bloques nativos de Totara (solo CSS, sin archivo en 4-codigo-nuevo)

| Bloque | Estado | Notas |
|---|---|---|
| Formación Obligatoria / PNTs Globales / PNTs Requeridos | En curso | Badge rosa (pastilla) y barra naranja nueva: hecho en css-adicional; falta imagen suave con icono |
| Formación adicional | En curso | Igual que la obligatoria |
| Mis Certificados | Pendiente verificar | Estructura ya similar al diseño |
| Mis últimas insignias | Decidir | No aparece en el diseño |
| Cursos en los que soy tutor (`inst8428`, informe 202) | Hecho, pendiente verificar | 100% CSS, patrón "Cursos que imparto"; filas→grid con icono `::before`; IDs de PRE |

### Bloques del sidebar SIN equivalente en el diseño (decidir: ocultar o mantener)

One Tech Video · Calendario · Alertas · Tracking: iberia · Tracking: NA ·
Cursos en los que soy tutor · Notificaciones

### Bloques técnicos "JS:" (contenedores de script — NO tocar sin revisar)

JS: Video Tutorial Pop ups · JS: Recuento PNTs restantes (versión
corregida en `4-codigo-nuevo/home--js-recuento-pnts.html`: innerHTML
para no romper el `<b>` teal del contador) · JS: Título LFE

Estados: `Pendiente` → `En curso` → `Hecho, pendiente verificar` → `Verificado`.
