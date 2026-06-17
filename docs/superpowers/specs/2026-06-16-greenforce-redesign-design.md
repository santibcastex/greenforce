# Green Force™ — Rediseño Landing Page

**Fecha:** 2026-06-16  
**Alcance:** Rediseño visual completo de `index.html`. Mismo contenido, misma funcionalidad (hero, productos, cómo funciona, formulario de pedido con carrito, footer, API `api/enviar-pedido.js`). Solo cambia la presentación visual.

---

## Dirección Estética

**Swiss Minimalist** — Profesional por precisión, no por adornos. Tipografía masiva como elemento visual principal, paleta de un solo color acento, grilla estricta, máximo contraste.

---

## Sistema de Diseño

### Tipografía
| Rol | Fuente | Peso |
|-----|--------|------|
| Display / Títulos | Big Shoulders Display | 900 |
| Cuerpo / UI | Archivo | 400, 600, 700 |
| Datos técnicos (N-P-K) | IBM Plex Mono | 400, 500 |

### Paleta
| Variable | Valor | Uso |
|----------|-------|-----|
| `--verde` | `#0d5c2e` | Acento único, fondos oscuros, botones primarios |
| `--negro` | `#111111` | Texto sobre fondo claro |
| `--blanco` | `#ffffff` | Fondos claros, texto sobre verde |
| `--gris-f` | `#f4f4f2` | Fondo de cards, columna de stats |
| `--menta` | `#7dd4a4` | Acento sobre fondos oscuros (hover, highlights, tags) |

### Grid
- Contenedor: `max-width: 1200px`, centrado con `margin: 0 auto`, padding `0 5%`
- Sin `border-radius` en cards — esquinas rectas (estilo Swiss)
- Espaciado entre secciones: `100px` desktop / `60px` mobile

### Animaciones
- Fade-in + slide-up al entrar al viewport (IntersectionObserver, `animation-delay` escalonado)
- Hover en cards de producto: borde izquierdo verde crece de 0 a 4px
- Hover en botones primarios: `background` levemente más claro
- Sin animaciones decorativas innecesarias

---

## Estructura de Secciones (ritmo claro/oscuro)

```
[NAV]          fondo #0d5c2e oscuro
[HERO]         fondo #0d5c2e oscuro
[PRODUCTOS]    fondo #ffffff claro
[CÓMO FUNCIONA] fondo #0d5c2e oscuro
[PEDIDO]       fondo #ffffff claro
[FOOTER]       fondo #111111 casi negro
```

---

## Secciones en Detalle

### 1. Navegación
- Fondo `#0d5c2e`, `position: fixed`, `height: 60px`
- Logo a la izquierda (imagen existente con `filter: brightness(0) invert(1)` para convertirla a blanco)
- Links en Archivo 600, `font-size: 0.8rem`, `letter-spacing: 2px`, `text-transform: uppercase`, color `#ffffff`
- Hover: color `#7dd4a4`
- Sin border-bottom amarillo — reemplazar con sutil `border-bottom: 1px solid rgba(255,255,255,0.1)`
- CTA "Pedido" en nav como botón outlined blanco a la derecha

### 2. Hero
- `min-height: 100vh`, fondo `#0d5c2e`
- Layout de dos columnas asimétrico: texto izq (60%) / stats der (40%)
- **Columna izquierda:**
  - Eyebrow: `GREEN FORCE™ — FERTILIZANTES DE PRECISIÓN` en Archivo 600, `font-size: 0.7rem`, `letter-spacing: 4px`, color `rgba(255,255,255,0.55)`
  - Título: Big Shoulders Display 900, `font-size: clamp(4rem, 8vw, 7rem)`, color `#fff`, con palabra acento en `#7dd4a4`
  - Subtítulo: Archivo 400, `font-size: 1rem`, color `rgba(255,255,255,0.7)`, `max-width: 400px`
  - CTAs: botón primario blanco + link texto gris claro con flecha
- **Columna derecha:**
  - 3 stats (500+ Clientes, 48h Entrega, 100% Calidad)
  - Números en Big Shoulders Display 900, `font-size: 3.5rem`, color `#7dd4a4`
  - Labels en Archivo, `font-size: 0.7rem`, `letter-spacing: 2px`, color `rgba(255,255,255,0.5)`
  - Separados por líneas horizontales `1px solid rgba(255,255,255,0.1)`
- Línea divisoria inferior: `border-top: 2px solid #7dd4a4` que marca la transición visual hacia la sección de productos

### 3. Productos
- Fondo `#fff`
- Header de sección: título Big Shoulders Display enorme (`font-size: clamp(2.5rem, 5vw, 4rem)`), alineado izquierda, con barra verde izquierda `4px solid #0d5c2e`
- Filtros existentes mantenidos: sort dropdown en Archivo, styled minimalista
- Grid: `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`, `gap: 1px`, fondo del grid `#111` (las líneas de grilla son el color del grid, las cards blancas)
- **Cards de producto:**
  - Fondo `#fff`, sin `border-radius`, sin `box-shadow`
  - Imagen de bolsa: fondo `#f4f4f2`, `padding: 2rem`, imagen centrada
  - Datos técnicos N-P-K en IBM Plex Mono, `font-size: 0.75rem`, color `#0d5c2e`, encima del nombre
  - Nombre producto en Big Shoulders Display 700
  - Precio en Archivo 700
  - Selector de cantidad + botón "Agregar" en una fila compacta
  - Hover: `border-left: 4px solid #0d5c2e` + leve `translateX(2px)` en la card

### 4. Cómo Funciona
- Fondo `#0d5c2e` oscuro
- 4 pasos en grid horizontal (o vertical en mobile)
- Número del paso: Big Shoulders Display 900, `font-size: 5rem`, color `rgba(255,255,255,0.15)` (decorativo, de fondo)
- Sin iconos emoji — el número grande decorativo en background es suficiente elemento visual
- Título del paso: Archivo 700, `font-size: 1rem`, color `#fff`
- Descripción: Archivo 400, color `rgba(255,255,255,0.65)`
- Separador entre pasos: línea vertical `1px solid rgba(255,255,255,0.1)` (desktop)

### 5. Pedido / Carrito
- Fondo `#fff`
- Layout 2 columnas: carrito izq (40%) / formulario der (60%)
- Header de sección: mismo estilo que Productos (Big Shoulders + barra verde)
- **Carrito:**
  - Sin estilos oscuros — fondo `#f4f4f2`, bordes `1px solid #e0e0e0`
  - Items del carrito: Archivo, con subtotal en `#0d5c2e`
  - Total: Big Shoulders Display 900, grande
  - Botón vaciar: texto link rojo tenue, sin background
- **Formulario:**
  - Inputs: sin border-radius, `border: 1px solid #ccc`, focus `border-color: #0d5c2e`
  - Labels flotantes o arriba del campo en Archivo 600, `font-size: 0.75rem`
  - Botón enviar: fondo `#0d5c2e`, full-width, Archivo 700, sin border-radius

### 6. Footer
- Fondo `#111`
- 3 columnas: Logo + tagline / Links / Contacto
- Texto `rgba(255,255,255,0.5)`, links en hover `#7dd4a4`
- Borde superior: `2px solid #0d5c2e`
- Copyright en Archivo 400, `font-size: 0.75rem`

### 7. Carrito flotante
- Botón circular `#0d5c2e` con borde blanco `2px`
- Badge contador en `#7dd4a4` con texto negro

---

## Archivos Afectados

- `index.html` — único archivo a modificar (CSS inline + JS existente se preserva en lógica, solo cambia el HTML/CSS)
- `design-preview.html` — eliminar tras implementar (era solo para preview)

## Lo que NO cambia
- Lógica del carrito (JS)
- Array de productos y sus imágenes (GF-*.jpg/png)
- API `api/enviar-pedido.js`
- Estructura de secciones (mismas secciones, mismo orden)
- Formulario de pedido y campos
