/* ============================================================
   tokens-descripcion-curso.js
   Reemplazo de tokens en la descripción del curso.
   Sustituye a campos-extensibles-descripcion.js (externo) y añade #cfc#.

   Lee los <li> ocultos de ul.ascoursecustomfields (que pinta el plugin
   local_courseextrasettings en la cabecera) y reemplaza en .course-description:
     #eaccme#   ← li.creditoseaccmenumber   (Créditos, EACCME)  + " ECMEC's"
     #duracion# ← li.duracionHoras           (+ " h")
     #cfc#      ← li.CreditosDecimal          (créditos CFC, decimal) + " créditos"

   Si un campo de créditos es 0 o está vacío → "No especificado"
   (se quita también la unidad).

   REQUISITO: el campo debe estar en una "Posición" del plugin
   (Administración > Cursos > Ajustes extra del curso); si no, no existe
   el <li> y el token sale vacío.

   Integración: pegar este IIFE en additional-html-footer.js.
   Prueba suelta: usar la versión .html (envuelta en <script>) o pegar en consola.
   ============================================================ */
(function () {
  // Clase del <li> con los créditos CFC = shortname del campo decimal "CreditosDecimal".
  var CFC_LI_CLASS = 'CreditosDecimal';

  // true si el valor es 0, 0.0, "0,0" o está vacío
  function esCero(v) {
    v = (v || '').trim();
    if (v === '') return true;
    var n = parseFloat(v.replace(',', '.'));
    return !isNaN(n) && n === 0;
  }

  // Formato numérico consistente (como el curso 1069): coma decimal y sin ceros
  // finales. Acepta entrada con "." o "," → "4.20"→"4,2", "2,5"→"2,5", "25.0"→"25".
  // Si no es numérico, devuelve el valor tal cual.
  function fmtNum(v) {
    v = (v || '').trim();
    if (v === '') return '';
    var n = parseFloat(v.replace(',', '.'));
    if (isNaN(n)) return v;
    n = Math.round(n * 100) / 100;      // máx. 2 decimales, sin artefactos
    return n.toString().replace('.', ',');
  }

  function reemplazarTokens() {
    var desc = document.querySelector('.course-description');
    if (!desc || desc.dataset.tokensDone === '1') return;

    var eaccmeEl   = document.querySelector('li.creditoseaccmenumber');
    var duracionEl = document.querySelector('li.duracionHoras');
    var cfcEl      = document.querySelector('li.' + CFC_LI_CLASS);

    var eaccme   = eaccmeEl   ? eaccmeEl.textContent.trim()   : '';
    var duracion = duracionEl ? duracionEl.textContent.trim() : '';
    var cfc      = cfcEl      ? cfcEl.textContent.trim()      : '';

    console.log('[tokens] eaccme=', eaccme, '| duracion=', duracion, '| cfc=', cfc); // debug (quitar en prod)

    var content = desc.innerHTML;

    // Duración (+ " h") — formato normalizado (coma decimal, sin ceros finales)
    if (duracion) duracion = fmtNum(duracion) + ' h';
    content = content.replace(/#duracion#/g, duracion);

    // Créditos EACCME: si es 0 o vacío → "No especificado" (quita también la unidad)
    if (esCero(eaccme)) content = content.replace(/#eaccme#\s*ECMEC's/gi, 'No especificado');
    content = content.replace(/#eaccme#/g, fmtNum(eaccme));

    // Créditos CFC: si es 0 o vacío → "No especificado"
    if (esCero(cfc)) content = content.replace(/#cfc#\s*créditos/gi, 'No especificado');
    content = content.replace(/#cfc#/g, fmtNum(cfc));

    desc.innerHTML = content;
    desc.dataset.tokensDone = '1';

    // Ocultar el bloque de campos personalizados de la cabecera
    var ul = document.querySelector('ul.ascoursecustomfields');
    if (ul) ul.style.display = 'none';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reemplazarTokens);
  } else {
    reemplazarTokens();
  }
})();
