# emailtagline — pie de los emails del campus

Cadena de idioma de Totara que se personaliza en **Personalización del idioma**.
Documento vivo: https://claude.ai/artifact/R7a8eVP7cWfh1mK6iZkFLE

## Qué es y cómo aplicarlo

`emailtagline` es el pie que Totara añade a los emails de notificación, incluidos
los avisos *no-reply*. El nombre del sitio lo resolvía el token `%%tenantname%%`,
que en multi-tenant se sustituye por el **nombre del tenant del destinatario**;
por eso a los alumnos del tenant *Externos* les llegaba la marca antigua
«IVI RMA Campus NEO» aunque el nombre del sitio ya sea el nuevo. Fijando la cadena
a un texto estático, el pie queda igual para todos.

**Cómo aplicarlo** (repetir en cada idioma): abre
[Personalización del idioma](https://campus.iviinstitute.com/admin/tool/customlang/index.php)
→ elige el idioma → *Abrir el paquete de idioma para editar* → *Continuar* → en
**Identificador de la cadena** escribe `emailtagline` → *Mostrar cadenas* → pega el
texto del idioma (abajo) → **Guardar cambios al paquete de idioma**.

## Traducciones (idiomas instalados en el campus)

Pega este texto en la cadena `emailtagline` de cada idioma.
«IVI Institute Education Campus» va enlazado al campus.

**Čeština (cs)**
```html
Zpráva byla odeslána prostřednictvím <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. Na tento e-mail nelze odpovědět.
```

**English (en)**
```html
Message sent via <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. You cannot reply to this email.
```

**Español (es)**
```html
Mensaje enviado a través de <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. No se puede responder a este correo.
```

**Italiano (it)**
```html
Messaggio inviato tramite <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. Non è possibile rispondere a questa e-mail.
```

**Português - Portugal (pt)**
```html
Mensagem enviada através de <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. Não é possível responder a este e-mail.
```

**Svenska (sv)**
```html
Meddelandet skickades via <a href="https://campus.iviinstitute.com">IVI Institute Education Campus</a>. Det går inte att svara på detta e-postmeddelande.
```
