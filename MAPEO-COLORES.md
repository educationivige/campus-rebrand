# Mapeo de colores — paleta antigua → marca nueva

Rebranding IVI Institute Education (2026). Este documento registra a qué color
de la **guía de marca** (`Colores-nuevos.jpg`) se ha reapuntado cada variable de
la **paleta antigua** (teal corporativo).

## Cómo funciona

En `css-totara-organizado.css` (sección *1.1 Variables CSS*) se conservan los
**nombres** `--color-*` para no romper los ~116 usos repartidos por las secciones
que aún no se han rediseñado. Solo se ha cambiado su **valor**, que ahora
referencia la paleta nueva con `var(--nombre-guía)`. Al migrar cada sección, sus
reglas deberían pasar a usar directamente los tokens de la guía y, cuando ya no
queden usos de un `--color-*`, podrá eliminarse.

## Colores de marca

| Variable (nombre conservado) | Valor antiguo | Reapuntada a | Valor nuevo |
|---|---|---|---|
| `--color-primary`        | `#006975` teal        | `var(--light-blue)`    | `#004DF0` |
| `--color-primary-light`  | `#00B7BD` cian        | `var(--teal)`          | `#0CE3C6` |
| `--color-accent`         | `#F18D7E` coral       | `var(--bright-orange)` | `#FC814C` |
| `--color-secondary`      | `#3B8695` teal grisáceo | `var(--teal)`        | `#0CE3C6` |
| `--color-secondary-dark` | `#2C6773` teal oscuro | `var(--navy-blue)`     | `#08004F` |
| `--color-secondary-quiz` | `#006D7C` teal quiz   | `var(--light-blue)`    | `#004DF0` |

## Neutros y fondos

| Variable (nombre conservado) | Valor antiguo | Reapuntada a | Valor nuevo | Nota |
|---|---|---|---|---|
| `--color-white`      | `#FFFFFF` | `var(--white)`       | `#FFFFFF` | Idéntico |
| `--color-gray-light` | `#F9F9F9` | `var(--warm-gray)`   | `#FAF4EE` | Fondo suave pasa a crema de marca |
| `--color-gray-border`| `#DDDDDD` | `var(--border-soft)` | `#E4E2EE` | Borde de marca |
| `--color-background` | `#EFF5F6` | `var(--bg-mint)`     | `#EAF6F3` | Fondo claro de marca |
| `--color-text-gray`  | `#666666` | `var(--text-gray)`   | `#8A8A9E` | ⚠️ Aclara el texto de cuerpo: revisar contraste (WCAG) al migrar |
| `--color-text-light` | `#999999` | `var(--text-gray)`   | `#8A8A9E` | Texto tenue |

## Pendientes de revisar

- **`--color-text-gray`**: `#666666 → #8A8A9E` reduce el contraste del texto de
  cuerpo. Verificar legibilidad en las secciones que lo usan; si baja de AA,
  mantener un gris más oscuro para texto (p. ej. seguir usando `#666` o navy).
- **Colores no definidos en este CSS** (los resuelve el tema Actua de Totara, no
  se tocan aquí): `--color-icons`, `--color-link-lateral-block`,
  `--color-header-highlight`, `--color-title-catalog-box`.

## Paleta nueva de referencia (guía)

| Nombre | Hex | | Nombre | Hex |
|---|---|---|---|---|
| `--light-blue` (primario) | `#004DF0` | | `--bright-red` | `#EE5590` |
| `--navy-blue` (footer)    | `#08004F` | | `--red`        | `#B4084A` |
| `--white`                 | `#FFFFFF` | | `--deep-red`   | `#650027` |
| `--black`                 | `#000000` | | `--bright-purple` | `#B794FF` |
| `--teal` (secundario)     | `#0CE3C6` | | `--purple`     | `#7D43F5` |
| `--deep-teal`             | `#002B34` | | `--deep-purple`| `#2C0086` |
| `--warm-gray`             | `#FAF4EE` | | `--bright-lime`| `#D5E74C` |
| `--bright-orange`         | `#FC814C` | | `--lime`       | `#98AB06` |
| `--orange`                | `#E9482A` | | `--deep-lime`  | `#5D6900` |
| `--deep-orange`           | `#7D1400` | |  |  |
