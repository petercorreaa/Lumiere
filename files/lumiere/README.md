# Lumière — Centro de Estética Premium

Sitio web de una página (landing page) para un centro de estética premium en Ciudad de México.

## Vista previa

![Lumière preview](https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&fit=crop)

## Stack

- HTML5 semántico
- CSS3 puro (sin frameworks) — variables, animaciones, grid, blur, backdrop-filter
- JavaScript vanilla (sin dependencias)
- Tipografías: [Syne](https://fonts.google.com/specimen/Syne) + [Outfit](https://fonts.google.com/specimen/Outfit) vía Google Fonts
- Imágenes: [Unsplash](https://unsplash.com) (CDN, sin descarga)

## Estructura

```
lumiere/
├── index.html          # Markup principal
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   └── main.js         # Interactividad
├── assets/             # Carpeta para recursos propios (logos, fotos locales)
├── .gitignore
└── README.md
```

## Características

- **Hero** con fondo de gradiente animado y efecto de ruido
- **Marquee** continuo de tratamientos
- **Sección About** con estadísticas en grid
- **Cards de servicios** con fotos reales e imágenes de hover
- **Galería** en grid asimétrico con captions al hover
- **Banner de guía descargable**
- **Testimonios** de clientes
- **CTA final** con wordmark de fondo gigante
- **Modal de reserva** con formulario completo
- **Scroll reveal** con transición blur → enfocado en todos los elementos
- **Velo de blur** en la parte inferior que desaparece mientras se scrollea
- **Parallax** suave en el hero
- **Navbar flotante** con backdrop blur que cambia al scrollear
- **Responsive** — adaptado a mobile, tablet y desktop

## Cómo usar

### Opción A — Abrir directo

```bash
# Clona el repo
git clone https://github.com/TU_USUARIO/lumiere.git
cd lumiere

# Abre en el navegador
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

### Opción B — Servidor local (recomendado para evitar problemas de CORS)

```bash
# Con Python
python3 -m http.server 8080

# Con Node (npx)
npx serve .

# Luego abre: http://localhost:8080
```

### Opción C — Publicar en GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio
2. Selecciona la rama `main` y carpeta `/ (root)`
3. Guarda — en unos minutos estará en `https://TU_USUARIO.github.io/lumiere`

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Nombre del centro | `index.html` — busca "Lumière" |
| Colores principales | `css/styles.css` — bloque `:root` |
| Textos y copy | `index.html` — cada sección tiene comentarios |
| Fotos de servicios | `index.html` — atributo `src` de cada `<img>` |
| Teléfono / redes | `index.html` — footer y modal |

## Créditos

- Diseño e implementación: generado con [Claude](https://claude.ai)
- Fotografías: [Unsplash](https://unsplash.com)
- Inspiración visual: [Craft Agency](https://www.craftrecruitment.co.uk)

## Licencia

MIT — libre para uso personal y comercial.
