# Campus Rebrand

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Totara](https://img.shields.io/badge/Totara-LMS-08004F?style=for-the-badge)

Repositorio de estilos y scripts personalizados del rebranding de la plataforma de aprendizaje **CampusNEO** (IVI Institute Education), construida sobre Totara LMS.

---

## Estructura

```
campus-rebrand/
├── css-totara-organizado.css     # Estilos globales del campus
├── additional-html-head.html     # Fuentes, tipografías y scripts de cabecera
├── additional-html-footer.js     # Scripts del footer
├── expediente/                   # Scripts de la sección Expediente (footer Totara)
├── imr/css-tenant-imr.css        # Estilos del tenant IMR
├── Code/                         # Export de Figma (referencia de diseño)
└── Secciones PNG/                # Mockups del nuevo diseño
```

---

## Distribución (jsDelivr)

Los assets se sirven por CDN desde este repositorio. PRE usa `@main`; en PRO usar un tag inmutable (`@vX.X`).

```html
<!-- CSS global (en Additional HTML head de Totara) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/educationivige/campus-rebrand@main/css-totara-organizado.css">

<!-- CSS tenant IMR (en Additional HTML head de Totara) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/educationivige/campus-rebrand@main/imr/css-tenant-imr.css">

<!-- Scripts del footer (en Additional HTML footer de Totara) -->
<script src="https://cdn.jsdelivr.net/gh/educationivige/campus-rebrand@main/additional-html-footer.js"></script>
```

Los scripts de `expediente/` se pegan directamente en el campo *Additional HTML footer* de Totara.

Tras un push, la caché de `@main` en jsDelivr tarda hasta 12 h en refrescarse; para forzarlo: `https://purge.jsdelivr.net/gh/educationivige/campus-rebrand@main/<ruta-del-archivo>`

---

## Tecnologías

- **CSS3** — variables, custom properties, responsive design
- **HTML5** — integración de fuentes web y recursos externos
- **JavaScript** — scripts de comportamiento del footer
- **jsDelivr** — CDN para distribución en producción
- **GitHub** — control de versiones y fuente de verdad

---

## Buenas prácticas

- El CSS de producción **nunca incluye** elementos de depuración ni indicadores de entorno
- Las versiones de producción se distribuyen mediante **tags inmutables**
- El historial de git actúa como registro de auditoría de todos los cambios visuales
