# Auditoría de colores legacy — `css-totara-organizado.css`

**Fecha:** 2026-07-22
**Alcance:** hex sueltos usados en reglas (excluidos comentarios y las definiciones de token en `:root`). Total detectado: ~485 hex literales; 34 tokens de paleta en `:root`.

> Objetivo: localizar colores del tema antiguo que aún se aplican como hex literal, para decidir si migrarlos a los tokens `--*` de la marca nueva (como ya se hizo con `#006975`, `#008897`, `#006d7c`, `#00b7bd`, `#1f7a8c`, `#00838f`, `#0070a0`).

---

## 0. `#F18D7E` (naranja/coral secundario legacy)

✅ **No queda aplicado en ninguna parte.** Solo aparece como mención en el comentario de la paleta (`css-totara-organizado.css:28`) y en `MAPEO-COLORES.md`. Mapeaba a `var(--bright-orange)` (`#FC814C`).

---

## 1. Teals / cianes legacy AÚN aplicados  ⚠️ (candidatos a migrar)

| Hex | Nº | Líneas (uso directo) | Notas | Destino sugerido |
|---|---|---|---|---|
| `#0F6C72` | 3 directos | 2583, 4310, 4334 | teal. Además hay 9 como *fallback* en `var(--color-primary, #0F6C72)` (2416, 2417, 2423, 2504, 2627, 2704, 2705, 2711, 2712) que **nunca se ven** porque `--color-primary` está definido | `--light-blue` / `--navy-blue` |
| `#2D6874` | 4 | 3256, 3346, 3365, 5723 | teal oscuro | `--navy-blue` o `--light-blue` |
| `#52B4BB` | 2 (+2 con alpha `40`) | 2082, 3370; alpha: 3201, 4461 | teal claro; los `#52b4bb40` son bordes izq. | `--teal` o `--light-blue` |
| `#2A4C59` | 2 | 1637, 1644 | teal muy oscuro | `--navy-blue` |
| `#00514A` | 2 | 1713, 8273 | verde-teal oscuro; **8273** es texto de badge "complete" sobre `#D6F6EF` (¿mantener como color de estado OK?) | revisar |
| `#438693` | 1 | 2972 | teal grisáceo | `--teal` / `--light-blue` |
| `#3B8596` | 1 | 3332 | teal grisáceo (≈ `#3b8695` de la paleta antigua) | `--teal` |
| `#026976` | 1 | 3461 | teal | `--light-blue` |
| `#3C6671` | 1 | 3525 | teal oscuro | `--navy-blue` / `--light-blue` |
| `#306C78` | 1 | 650 | teal | `--light-blue` |
| `#12B4A2` | 1 | 4553 | teal brillante | `--teal` |

**Posiblemente intencionales (acentos teal de marca, NO migrar sin revisar):**
- `#0AC4AA` (1) — hover del teal, documentado en el propio CSS (`:6357`).
- `#6FDFC7` (1) — teal-verde claro.

---

## 2. Coral / salmón / ámbar legacy (parientes de `#F18D7E`)

| Hex | Nº | Líneas | Notas | Destino sugerido |
|---|---|---|---|---|
| `#F58C7C` | 2 | 4373, 4480 | coral/salmón | `--bright-orange` |
| `#E39282` | 1 | 3236 | coral | `--bright-orange` |
| `#E79181` | 1 | 4052 | coral | `--bright-orange` |
| `#FF9F37` | 1 | 4348 | naranja claro | `--bright-orange` |
| `#E0952B` | 1 | 8363 | ámbar (icono de nota de certificado) | revisar (¿ámbar de aviso?) |
| `#854F0B` | 1 | — | marrón/ámbar oscuro | revisar |

---

## 3. Literales que DUPLICAN un token de marca (usar `var(--token)`)

Estos hex ya existen como token; se recomienda sustituirlos por la variable para consistencia.

| Hex | Token | Nº aprox. |
|---|---|---|
| `#FFFFFF` / `#FFF` | `--white` | 39 + 85 |
| `#08004F` | `--navy-blue` | 44 |
| `#004DF0` | `--light-blue` | 29 |
| `#DCE6FF` | `--bg-blue` | 13 |
| `#FAF4EE` | `--warm-gray` | 9 |
| `#0CE3C6` | `--teal` | 8 |
| `#8A8A9E` | `--text-gray` | 7 |
| `#000` / `#000000` | `--black` | 5 (+1 con alpha `B8`) |
| `#E4E2EE` | `--border-soft` | 3 |
| `#ECE9E2` | `--track-beige` | 2 |
| `#B4084A` | `--red` | 2 |
| `#0038C4` | `--blue-hover` | 2 |
| `#EAF6F3` | `--bg-mint` | 1 |
| `#E9482A` | `--orange` | 1 |
| `#1D146F` | `--navy-hover` | 1 |

> Variantes con alpha de blanco (`#FFFFFF80/40/E6/DC/85`) y de light-blue (`#004DF080`) son intencionales (transparencias); no tienen token equivalente directo.

---

## 4. Sub-tema DAI (intencional — tiene sus propios tokens `--dai-*`)

`#17417B` (9), `#1F5499` (1), `#0E2B53` (2), `#2A6BB8` (2, gradientes), `#E8EEF7`, `#5C5F66` (3), `#8A8D94`. Definidos como `--dai-*` en `:5372-5378`; los usos como literal podrían tokenizarse pero **no son legacy del tema viejo**.

---

## 5. Grises / neutros sin token (baja prioridad)

Familia "Tailwind-ish", incidentales (bordes, textos, fondos sutiles):
`#E5E7EB` (5), `#E2E8F0` (5), `#C4D4FB` (5), `#3A3A55` (4), `#F0F4F5` (3), `#E3E3E3` (3), `#9CA3AF` (3), `#1F2937` (3), `#F3F4F6` (2), `#F0F0F0` (2), `#6B7280` (2), `#374151` (2), `#666`/`#666666` (3), `#4A4A63`, `#444`/`#444243`, `#D2D2D2`, `#CBD5E1`, `#CCC`, `#DDD`, `#EFEFF0`, `#FAFAFA`, `#FCFCFC`, `#111827`, `#012246`, `#1A2F6A`, `#223C84`…

---

## 6. Estados / componentes (one-offs, normalmente intencionales)

- **Badges de módulos del Visor (morados):** `#7B2594` (3), `#AC1D6B` (3), `#622A9C` (3), `#5B2C9E`, `#7A2494`, `#B01C67`, `#7A2840`, `#EFE6FB`.
- **Estados Bootstrap:** `#28A745` (verde ok, ×2), `#DC3545` (rojo, ×2), `#FFC107` (warning, ×2), `#FD7E14` (naranja, ×2).
- **Verdes:** `#85C99C`, `#4FCB3E`.
- **Fondos cálidos/pastel de cards y badges:** `#FFF6E6`, `#FDE7E1`, `#FCEFEC`, `#FBEEEA`, `#FBE0EA`, `#FAEEDA`, `#F3EBE1`, `#F3DFB0`, `#F1ECE2`, `#EAE5DA`, `#E3DCCE`, `#D6F6EF`, `#F0F5F6` (+alpha)…

---

## Recomendación de prioridad

1. **Migrar** la sección **1** (teals/cianes legacy) y **2** (coral/salmón) — son restos claros del tema antiguo, misma línea que las migraciones ya hechas.
2. **Tokenizar** la sección **3** (duplicados de token) cuando se toque cada componente (no urgente; visualmente ya es correcto).
3. Secciones **4–6**: dejar como están salvo decisión de diseño puntual.
