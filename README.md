# DIZLE — Sitio institucional

Landing estática y responsive para **DIZLE**, empresa matriz detrás de Gestor de Tareas, TaskFlow y futuros productos digitales.

## Contenido

- Hero con identidad visual DIZLE, brillo, órbitas y patrón de puntos.
- Selector interactivo de proyectos por hover, foco o clic.
- Vistas previas ficticias de TaskFlow y Gestor de Tareas, sin datos reales.
- Sección institucional y propuesta de valor.
- Formulario que prepara un correo a `dizle@gestordetareas.com.ar`.
- Enlace a Instagram `@dizlec`.
- Diseño responsive y sin dependencias externas.

## Desarrollo local

```bash
python -m http.server 8080
```

Abrir `http://localhost:8080`.

## Cloudflare Pages

- Framework preset: `None`
- Build command: dejar vacío
- Build output directory: `/`
- Production branch: `master`
- Dominio personalizado: `dizle.com.ar`

Los archivos `_headers` y `_redirects` contienen la configuración básica para Pages.