/* REGISTRO DE CERTIFICADOS LfE — PLANTILLA JAVASCRIPT
   Pegar en: Plantillas -> PLANTILLA JAVASCRIPT de la base de datos.
   Renderiza la previa del PDF de cada certificado con pdf.js dentro de
   su #pdf-container. Corrige el original: configura el worker, procesa
   TODAS las entradas (no solo la primera), pinta las paginas en orden y
   es idempotente.

   NOTA: en el LISTADO renderiza el PDF de CADA entrada -> pesado si la
   lista es larga. Para previa solo en la vista individual, deja el
   #pdf-container solo en la PLANTILLA INDIVIDUAL y quitalo de la de LISTA. */

document.addEventListener("DOMContentLoaded", function () {
  if (typeof pdfjsLib === "undefined") { console.error("pdf.js no está cargado"); return; }

  // Worker de pdf.js (misma versión que el pdf.min.js del <head>)
  if (pdfjsLib.GlobalWorkerOptions && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
  }

  // Enlace real del certificado asociado a un contenedor
  function findCertLink(container) {
    let link = container.querySelector(".ividb_certificatelink a[href]");
    if (link) return link;
    let node = (container.closest(".ividb_right") || container).previousElementSibling;
    while (node) {
      link = node.querySelector && node.querySelector(".ividb_certificatelink a[href]");
      if (link) return link;
      node = node.previousElementSibling;
    }
    return null;
  }

  // Pinta todas las páginas EN ORDEN dentro del contenedor
  function renderPdf(container, url) {
    return pdfjsLib.getDocument(url).promise.then(function (pdf) {
      let chain = Promise.resolve();
      for (let n = 1; n <= pdf.numPages; n++) {
        chain = chain.then(function () {
          return pdf.getPage(n).then(function (page) {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            container.appendChild(canvas);
            return page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
          });
        });
      }
      return chain;
    }).catch(function (error) { console.error("Error cargando el PDF:", error); });
  }

  document.querySelectorAll("#pdf-container, .pdf-container").forEach(function (container) {
    if (container.dataset.pdfDone) return;            // idempotente
    const link = findCertLink(container);
    if (!link) return;
    const url = link.href || link.getAttribute("href");
    if (!url) return;
    container.dataset.pdfDone = "1";
    renderPdf(container, url);
  });
});
