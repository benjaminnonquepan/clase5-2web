# Clase 5°2 — Página del curso

Página estática del curso: materias, temas vistos, trabajos y entregas, y horario semanal. No necesita servidor ni base de datos — solo HTML, CSS y JavaScript. Se puede publicar gratis en GitHub Pages.

## Qué incluye

- **index.html** — portada con avisos, tarjetas de todas las materias y el horario semanal (resalta la columna del día actual).
- **Una página por materia**: `lengua.html`, `matematica.html`, `fisica.html`, `quimica.html`, `historia.html`, `geografia.html`, `desarrollo.html`, `software.html`, `ingles.html`, `electronica.html`, `hardware.html`, `redes.html`, `datos.html`, `apreciacion.html`, `ef.html`, `tutoria.html`.
- **style.css** — estilos (tema oscuro con color por materia, tarjetas, tabla del horario responsive).
- **script.js** — resalta el día actual en el horario.
- **manifest.json + icons/icon.svg** — permite instalarla como app en el celular (ver `publicar.md`).

## Cómo editar

### Agregar un tema en una materia
Abrir la página de la materia (por ejemplo `matematica.html`) y en `Qué estamos viendo` agregar un `<li>` arriba de los demás:

```html
<li>
  <span class="topic-date">Semana del 15 de sep</span>
  Derivadas: definición y reglas básicas.
</li>
```

### Avisar un trabajo, TP o fecha de examen
En la misma página de la materia, sección **Trabajos y entregas**:

```html
<div class="notes-box">
  <ul>
    <li>TP 2 — entrega el 30/09.</li>
  </ul>
</div>
```

### Cambiar el horario
Todo el horario vive en `index.html`, dentro de la tabla `week-table`. Cada fila es una franja horaria; las celdas con `class="empty"` muestran "—".

### Agregar una materia nueva
1. Copiar cualquier página de materia (por ejemplo `software.html`) con el nombre nuevo, cambiar `<h1>` y el `--subject-color`.
2. En `style.css`, dentro de `:root`, agregar un color nuevo:

```css
--nueva: #008080;
```

3. Agregar el enlace en el `<nav>` de los archivos y una tarjeta en `index.html`:

```html
<a class="subject-card" href="nueva.html" style="--card-color: var(--nueva)">
  <span class="name">Nueva materia</span>
  <span class="hint">Temas y trabajos →</span>
</a>
```

## Verla en localhost

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```
