# Green Force™ Landing Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar completamente el visual de `index.html` con un diseño Swiss Minimalist (verde #0d5c2e sobre blanco, Big Shoulders Display + Archivo, secciones alternando oscuro/claro), preservando toda la lógica JS y la funcionalidad existente.

**Architecture:** Un solo archivo HTML con CSS inline. El bloque `<style>` (líneas 8-455) se reemplaza íntegramente vía PowerShell (tiene una línea con base64 del hero background que se elimina en el rediseño). Las secciones HTML se editan con la herramienta Edit usando coincidencias exactas. El bloque `<script>` (líneas 667-841) NO se toca.

**Tech Stack:** HTML5, CSS3 (sin framework), Google Fonts (Big Shoulders Display + Archivo + IBM Plex Mono), IntersectionObserver API para animaciones.

---

## Estructura de archivos

| Archivo | Acción | Responsabilidad |
|---------|--------|-----------------|
| `index.html` | Modificar | CSS completo nuevo + HTML de todas las secciones |
| `design-preview.html` | Eliminar | Solo era para preview de brainstorming |

**Clases JS críticas (no renombrar):** `.card`, `.card-brand`, `.card-img`, `.bolsa-img`, `.card-dosis`, `.card-body`, `.card-nombre`, `.card-desc`, `.card-footer`, `.card-precio`, `.card-actions`, `.qty-ctrl`, `.btn-agregar`, `.item-carrito`, `.carrito-vacio`, `.modal-overlay`, `.modal-overlay.show`

**IDs JS críticos (no renombrar):** `#grid-productos`, `#carrito-items`, `#cart-count`, `#total-monto`, `#sort-select`, `#modal`, `#cart-float`, `#f-nombre`, `#f-apellido`, `#f-tel`, `#f-email`, `#f-dir`, `#f-prov`, `#f-notas`, `#form-order`

---

## Task 1: Actualizar Google Fonts import

**Files:**
- Modify: `index.html` (línea 7)

- [ ] **Step 1: Reemplazar el link de Google Fonts**

Usar la herramienta Edit. Buscar:
```
family=Bebas+Neue&family=Lato:wght@300;400;700;900&display=swap
```
Reemplazar con:
```
family=Big+Shoulders+Display:wght@700;900&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap
```

- [ ] **Step 2: Verificar**

Abrir `index.html` en un browser. El console no debe mostrar errores de carga de fuentes.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: update Google Fonts to Big Shoulders Display + Archivo + IBM Plex Mono"
```

---

## Task 2: Reemplazar bloque CSS completo

**Files:**
- Modify: `index.html` (líneas 8-455, todo el bloque `<style>`)

El bloque CSS actual tiene una línea con un data URI base64 enorme (el hero background). Se reemplaza íntegramente con el nuevo CSS vía PowerShell para evitar problemas de coincidencia de texto.

- [ ] **Step 1: Ejecutar script PowerShell de reemplazo**

Ejecutar el siguiente script PowerShell desde el directorio del proyecto:

```powershell
$file = "index.html"
$content = Get-Content $file -Raw -Encoding UTF8

$newStyle = @"
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    :root {
      --verde: #0d5c2e;
      --negro: #111111;
      --blanco: #ffffff;
      --gris-f: #f4f4f2;
      --menta: #7dd4a4;
    }

    body {
      font-family: 'Archivo', sans-serif;
      background: var(--blanco);
      color: var(--negro);
      overflow-x: hidden;
    }

    /* ─── NAV ─── */
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      background: var(--verde);
      height: 64px;
      display: flex; align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .nav-inner {
      max-width: 1200px; margin: 0 auto; padding: 0 5%;
      width: 100%; display: flex; align-items: center; justify-content: space-between;
    }
    .nav-logo img { height: 46px; width: auto; filter: brightness(0) invert(1); }
    .nav-links { list-style: none; display: flex; align-items: center; gap: 2.5rem; }
    .nav-links a {
      color: rgba(255,255,255,0.8); text-decoration: none;
      font-weight: 600; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;
      transition: color .2s;
    }
    .nav-links a:hover { color: var(--menta); }
    .nav-links .nav-cta { border: 1px solid rgba(255,255,255,0.4); padding: 7px 18px; color: #fff; }
    .nav-links .nav-cta:hover { border-color: var(--menta); color: var(--menta); }

    /* ─── SECTION HEADER (secciones claras) ─── */
    .section-header { margin-bottom: 3rem; padding: 0 5%; max-width: 1200px; margin-left: auto; margin-right: auto; }
    .section-header h2 {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: clamp(2.2rem, 4vw, 3.5rem); text-transform: uppercase;
      line-height: 1; padding-left: 16px;
      border-left: 4px solid var(--verde);
    }
    .section-header .eyebrow {
      font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase;
      color: var(--verde); font-weight: 600; margin-bottom: 10px; display: block;
    }

    /* ─── HERO ─── */
    #hero {
      min-height: 100vh; background: var(--verde);
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 64px;
    }
    .hero-inner {
      max-width: 1200px; margin: 0 auto; padding: 80px 5%;
      width: 100%; display: grid; grid-template-columns: 1fr 280px; gap: 60px;
      align-items: center;
    }
    .hero-eyebrow {
      font-size: 0.7rem; letter-spacing: 4px; text-transform: uppercase;
      font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 20px; display: block;
    }
    .hero-title {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: clamp(4rem, 8vw, 7rem); line-height: 0.9; text-transform: uppercase;
      color: #fff; margin-bottom: 24px;
    }
    .hero-title .accent { color: var(--menta); }
    .hero-sub {
      font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7;
      max-width: 420px; margin-bottom: 36px;
    }
    .hero-ctas { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .btn-hero-primary {
      background: #fff; color: var(--verde); font-family: 'Archivo', sans-serif;
      font-weight: 700; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase;
      padding: 14px 28px; text-decoration: none; transition: background .2s, color .2s;
    }
    .btn-hero-primary:hover { background: var(--menta); color: var(--negro); }
    .btn-hero-text {
      color: rgba(255,255,255,0.7); font-weight: 600; font-size: 0.9rem;
      text-decoration: none; transition: color .2s;
    }
    .btn-hero-text:hover { color: var(--menta); }
    .hero-stats { display: flex; flex-direction: column; }
    .hero-stat { padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .hero-stat:last-child { border-bottom: none; }
    .hero-stat-num {
      display: block; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: 3.2rem; line-height: 1; color: var(--menta);
    }
    .hero-stat-label {
      display: block; font-size: 0.65rem; letter-spacing: 2.5px;
      text-transform: uppercase; color: rgba(255,255,255,0.45); margin-top: 6px;
    }
    .hero-bottom-line { border-top: 2px solid var(--menta); }

    /* ─── PRODUCTOS ─── */
    #productos { padding: 100px 0; background: var(--blanco); }
    .filtros-bar {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 2rem; padding: 0 5%; max-width: 1200px; margin-left: auto; margin-right: auto;
    }
    .filtros-count { font-size: 0.8rem; color: #888; letter-spacing: 1px; }
    .filtros-sort { display: flex; align-items: center; gap: 8px; font-size: 0.75rem; color: #888; letter-spacing: 1px; text-transform: uppercase; }
    #sort-select {
      border: 1px solid #ccc; background: var(--blanco); padding: 5px 10px;
      font-size: 0.8rem; font-family: 'Archivo', sans-serif; color: var(--negro); cursor: pointer;
    }
    #sort-select:focus { outline: none; border-color: var(--verde); }
    .productos-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1px; background: #e0e0e0;
      max-width: 1200px; margin: 0 auto; padding: 0 5%;
    }

    /* Cards (clases generadas por JS - NO renombrar) */
    .card {
      background: var(--blanco); display: flex; flex-direction: column;
      position: relative; border-left: 4px solid transparent;
      transition: border-color .2s, transform .15s;
    }
    .card:hover { border-left-color: var(--verde); transform: translateX(2px); }
    .card-brand {
      font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem;
      letter-spacing: 2px; text-transform: uppercase; color: var(--verde); padding: 12px 16px 0;
    }
    .card-img {
      background: var(--gris-f); padding: 28px;
      display: flex; align-items: center; justify-content: center;
      height: 200px; overflow: hidden;
    }
    .card-img img.bolsa-img {
      max-height: 100%; max-width: 100%; object-fit: contain; transition: transform .3s;
    }
    .card:hover .card-img img.bolsa-img { transform: scale(1.04); }
    .card-dosis {
      position: absolute; top: 44px; right: 12px;
      font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; color: var(--verde);
      letter-spacing: 1px; background: rgba(13,92,46,0.08); padding: 2px 8px;
    }
    .card-body { padding: 16px 16px 8px; flex: 1; }
    .card-nombre {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
      font-size: 1.2rem; text-transform: uppercase; color: var(--negro);
    }
    .card-desc { font-size: 0.78rem; color: #888; margin-top: 6px; line-height: 1.5; }
    .card-footer {
      padding: 12px 16px 16px; display: flex;
      align-items: center; justify-content: space-between;
      border-top: 1px solid #f0f0f0;
    }
    .card-precio {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
      font-size: 1.4rem; color: var(--negro);
    }
    .card-precio span { font-family: 'Archivo', sans-serif; font-size: 0.72rem; color: #aaa; font-weight: 400; }
    .card-actions { display: flex; align-items: center; gap: 6px; }
    .qty-ctrl { display: flex; align-items: center; border: 1px solid #ddd; }
    .qty-ctrl button {
      background: var(--gris-f); border: none; cursor: pointer;
      width: 28px; height: 28px; font-size: 0.95rem; color: var(--negro); font-weight: 700;
      transition: background .15s;
    }
    .qty-ctrl button:hover { background: #e0e0e0; }
    .qty-ctrl span { width: 28px; text-align: center; font-size: 0.9rem; font-weight: 700; }
    .btn-agregar {
      background: var(--verde); color: #fff; border: none;
      padding: 0 14px; height: 30px; font-family: 'Archivo', sans-serif;
      font-size: 0.78rem; font-weight: 700; cursor: pointer; letter-spacing: 0.5px;
      transition: background .2s;
    }
    .btn-agregar:hover { background: #0a4522; }

    /* ─── CÓMO FUNCIONA ─── */
    #como { padding: 100px 0; background: var(--verde); }
    #como .section-header h2 { color: #fff; border-left-color: var(--menta); }
    #como .section-header .eyebrow { color: var(--menta); }
    #como .section-header p { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-top: 12px; padding-left: 20px; }
    .pasos {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
      max-width: 1200px; margin: 3rem auto 0; padding: 0 5%;
    }
    .paso { padding: 0 32px 0 0; border-right: 1px solid rgba(255,255,255,0.1); }
    .paso:last-child { border-right: none; padding-right: 0; }
    .paso-num {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.1); display: block; margin-bottom: 16px;
    }
    .paso h4 {
      font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 0.95rem;
      color: #fff; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .paso p { font-size: 0.82rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

    /* ─── PEDIDO ─── */
    #pedido { padding: 100px 0; background: var(--blanco); }
    .pedido-wrapper {
      display: grid; grid-template-columns: 2fr 3fr; gap: 48px;
      margin-top: 3rem; align-items: start;
      max-width: 1200px; margin-left: auto; margin-right: auto; padding: 3rem 5% 0;
    }
    .resumen { background: var(--gris-f); padding: 28px; border-top: 3px solid var(--verde); }
    .resumen h3 {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
      font-size: 1.3rem; text-transform: uppercase; color: var(--negro);
      margin-bottom: 20px; letter-spacing: 1px;
    }
    #carrito-items { min-height: 80px; }
    .item-carrito {
      display: flex; justify-content: space-between; align-items: flex-start;
      padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 0.88rem;
    }
    .item-carrito .nombre { font-weight: 700; color: var(--negro); }
    .item-carrito .sub { color: var(--verde); font-weight: 700; font-family: 'Big Shoulders Display', sans-serif; font-size: 1rem; }
    .carrito-vacio { color: #aaa; font-size: 0.85rem; padding: 12px 0; }
    .total-row {
      display: flex; justify-content: space-between; align-items: baseline;
      padding-top: 14px; border-top: 2px solid var(--negro);
      margin-top: 12px; font-size: 0.85rem; font-weight: 600;
    }
    .total-amt {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: 1.8rem; color: var(--verde);
    }
    .btn-limpiar {
      margin-top: 12px; background: transparent; border: none;
      color: #cc4444; font-size: 0.8rem; cursor: pointer;
      padding: 0; font-family: 'Archivo', sans-serif;
    }
    .btn-limpiar:hover { text-decoration: underline; }
    .form-pedido h3 {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
      font-size: 1.3rem; text-transform: uppercase; color: var(--negro);
      margin-bottom: 20px; letter-spacing: 1px;
    }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .form-group label {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 1.5px;
      text-transform: uppercase; color: #666;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      border: 1px solid #ccc; padding: 11px 14px; font-size: 0.9rem;
      font-family: 'Archivo', sans-serif; color: var(--negro);
      background: #fff; transition: border-color .2s; outline: none;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus { border-color: var(--verde); }
    .form-group textarea { min-height: 90px; resize: vertical; }
    .form-group select option { background: #fff; }
    .btn-enviar {
      width: 100%; background: var(--verde); color: #fff; border: none;
      padding: 16px; font-family: 'Archivo', sans-serif; font-size: 0.9rem;
      font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
      cursor: pointer; transition: background .2s; margin-top: 8px;
    }
    .btn-enviar:hover { background: #0a4522; }

    /* ─── FOOTER ─── */
    footer { background: var(--negro); padding: 64px 0 0; border-top: 2px solid var(--verde); }
    .footer-inner {
      max-width: 1200px; margin: 0 auto; padding: 0 5%;
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
    }
    .footer-col h4 {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
      font-size: 1rem; text-transform: uppercase; letter-spacing: 2px;
      color: var(--menta); margin-bottom: 16px;
    }
    .footer-col p,
    .footer-col a {
      display: block; font-size: 0.82rem; color: rgba(255,255,255,0.45);
      line-height: 1.8; text-decoration: none; transition: color .2s;
    }
    .footer-col a:hover { color: var(--menta); }
    .footer-col:first-child p { font-size: 0.85rem; max-width: 200px; }
    .footer-bottom {
      margin-top: 48px; border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 5%; font-size: 0.75rem; color: rgba(255,255,255,0.25);
      text-align: center;
    }

    /* ─── FLOATING CART ─── */
    #cart-float {
      position: fixed; bottom: 28px; right: 28px; background: var(--verde); color: #fff;
      text-decoration: none; border-radius: 30px; padding: 12px 20px;
      font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 0.82rem;
      display: flex; align-items: center; gap: 8px; z-index: 50;
      letter-spacing: 0.5px; border: 2px solid rgba(255,255,255,0.2);
      transition: background .2s, transform .15s;
    }
    #cart-float:hover { background: #0a4522; transform: scale(1.04); }
    #cart-count {
      background: var(--menta); color: var(--negro); border-radius: 50%;
      width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;
      font-size: 0.72rem; font-weight: 900;
    }

    /* ─── MODAL ─── */
    .modal-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.65); z-index: 200;
      align-items: center; justify-content: center;
    }
    .modal-overlay.show { display: flex; }
    .modal-box {
      background: var(--blanco); padding: 48px 40px; max-width: 420px;
      width: 90%; text-align: center; border-top: 4px solid var(--verde);
    }
    .modal-icon { font-size: 3rem; margin-bottom: 16px; }
    .modal-box h2 {
      font-family: 'Big Shoulders Display', sans-serif; font-weight: 900;
      font-size: 2rem; text-transform: uppercase; color: var(--verde); margin-bottom: 12px;
    }
    .modal-box p { font-size: 0.9rem; color: #666; line-height: 1.7; margin-bottom: 24px; }
    .modal-box button {
      background: var(--verde); color: #fff; border: none; padding: 12px 32px;
      font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 0.85rem;
      letter-spacing: 1px; text-transform: uppercase; cursor: pointer; transition: background .2s;
    }
    .modal-box button:hover { background: #0a4522; }

    /* ─── SCROLL ANIMATIONS ─── */
    .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; padding: 60px 5%; }
      .hero-stats { flex-direction: row; }
      .hero-stat { flex: 1; text-align: center; border-bottom: none; border-right: 1px solid rgba(255,255,255,0.1); padding: 20px 0; }
      .hero-stat:last-child { border-right: none; }
      .pasos { grid-template-columns: 1fr 1fr; gap: 32px; }
      .paso { border-right: none; padding-right: 0; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .pedido-wrapper { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
    }
    @media (max-width: 600px) {
      .hero-title { font-size: clamp(3rem, 12vw, 5rem); }
      .pasos { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr; }
    }
"@

# Reemplazar el bloque <style>...</style> completo
$content = $content -replace '(?s)<style>.*?</style>', "<style>`n$newStyle`n  </style>"
Set-Content $file $content -Encoding UTF8
Write-Host "CSS reemplazado correctamente."
```

- [ ] **Step 2: Verificar que no se rompió el archivo**

```powershell
# Contar líneas para confirmar que el archivo sigue siendo válido
(Get-Content "index.html").Count
```
Resultado esperado: entre 400 y 700 líneas (bajó de 844 porque se eliminó la enorme imagen base64 del hero background).

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: replace full CSS with Swiss Minimalist design system"
```

---

## Task 3: Restructurar HTML de Navegación

**Files:**
- Modify: `index.html` (línea del nav)

El nav actual tiene `class="logo"` y una `<ul>` sin clase. Agregar wrapper `.nav-inner`, cambiar a `.nav-logo`, agregar `.nav-links` y `.nav-cta`.

- [ ] **Step 1: Agregar wrapper `.nav-inner` y cambiar clase del logo**

Usar Edit. Reemplazar `<div class="logo">` con `<div class="nav-inner"><div class="nav-logo">`.

Reemplazar en index.html:
```
<div class="logo">
```
Con:
```
<div class="nav-inner"><div class="nav-logo">
```

- [ ] **Step 2: Cerrar el wrapper `.nav-logo` y agregar clase a `<ul>`**

Reemplazar (la secuencia `</a></div><ul>` es única en el nav — sólo aparece ahí):
```
</a></div><ul>
```
Con:
```
</a></div><ul class="nav-links">
```

- [ ] **Step 3: Agregar clase `nav-cta` al último link (Hacer pedido)**

Reemplazar:
```
<a href="#pedido">Hacer un pedido</a>
```
Con:
```
<a href="#pedido" class="nav-cta">Hacer pedido</a>
```

- [ ] **Step 4: Cerrar el wrapper `.nav-inner`**

Reemplazar:
```
</ul>
</nav>
```
Con:
```
</ul>
  </div>
</nav>
```

- [ ] **Step 5: Verificar en browser**

El nav debe verse: fondo verde oscuro, logo blanco a la izquierda, links en blanco a la derecha, "Hacer pedido" con borde outlined.

- [ ] **Step 6: Commit**
```bash
git add index.html
git commit -m "feat: restructure nav HTML for Swiss Minimalist layout"
```

---

## Task 4: Reemplazar Hero Section HTML

**Files:**
- Modify: `index.html` (sección `#hero`, desde `<section id="hero">` hasta su `</section>`)

- [ ] **Step 1: Reemplazar todo el contenido del hero**

Buscar y reemplazar el bloque completo. El HTML actual del hero (verificado) es:

```html
<section id="hero">
  <div class="hero-badge">🌿 Green Force™ — Línea Profesional</div>
  <h1>Premium Fertilizers<br><em> Power up your lawn and garden</em></h1>
```
...hasta antes de `<div id="stats">` y luego el stats div y `</section>`.

Usar Edit para reemplazar desde `<section id="hero">` hasta `</section>` (justo antes de `<!-- PRODUCTOS -->`).

old_string (buscar este bloque exacto):
```
<section id="hero">
  <div class="hero-badge">🌿 Green Force™ — Línea Profesional</div>
  <h1>Premium Fertilizers<br><em> Power up your lawn and garden</em></h1>
  <p>Pedí tus bolsas Green Force™ desde casa. Seleccioná el producto, la cantidad y te lo mandamos directo a tu jardin</p>
  <div class="hero-btns">
    <a href="#productos" class="btn-primary">Ver productos</a>
    <a href="#pedido" class="btn-outline">Hacer un pedido</a>
  </div>
</section>
<div id="stats">
  <div class="stat">
    <div class="stat-num">500+</div>
    <div class="stat-label">Clientes activos</div>
  </div>
  <div class="stat">
    <div class="stat-num">12</div>
    <div class="stat-label">Productos disponibles</div>
  </div>
  <div class="stat">
    <div class="stat-num">48hs</div>
    <div class="stat-label">Entrega promedio</div>
  </div>
  <div class="stat">
    <div class="stat-num">100%</div>
    <div class="stat-label">Garantía calidad</div>
  </div>
</div>
```

new_string (reemplazar con):
```
<section id="hero">
  <div class="hero-inner">
    <div class="hero-left fade-in">
      <span class="hero-eyebrow">Green Force™ — Fertilizantes de precisión</span>
      <h1 class="hero-title">Potenciá<br>tu <span class="accent">cosecha</span></h1>
      <p class="hero-sub">Fertilizantes de alta formulación para profesionales del agro argentino. Pedís online, entregamos en tu campo.</p>
      <div class="hero-ctas">
        <a href="#productos" class="btn-hero-primary">Ver productos</a>
        <a href="#pedido" class="btn-hero-text">Hacer un pedido →</a>
      </div>
    </div>
    <div class="hero-stats fade-in" style="transition-delay:0.15s">
      <div class="hero-stat">
        <span class="hero-stat-num">500+</span>
        <span class="hero-stat-label">Clientes activos</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num">48h</span>
        <span class="hero-stat-label">Entrega promedio</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num">100%</span>
        <span class="hero-stat-label">Garantía de calidad</span>
      </div>
    </div>
  </div>
  <div class="hero-bottom-line"></div>
</section>
```

- [ ] **Step 2: Verificar en browser**

El hero debe mostrar: fondo verde oscuro, título enorme con palabra "cosecha" en verde menta, 3 stats a la derecha, línea menta al pie.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: redesign hero section — Swiss Minimalist dark green"
```

---

## Task 5: Actualizar Sección Productos

**Files:**
- Modify: `index.html` (sección `#productos`, solo el header y filtros — el grid lo llena JS)

- [ ] **Step 1: Reemplazar el header de la sección productos**

old_string:
```
<section id="productos">
  <div class="section-title">
    <h2>Nuestros Productos</h2>
    <p>Fertilizantes Green Force™ para césped y planas de jardin </p>
    <div class="divider"></div>
  </div>
  <div class="filtros-bar">
    <span class="filtros-count" id="count-productos">4 productos</span>
    <div class="filtros-sort">
      Ordenar por:
      <select id="sort-select">
        <option value="default">Destacados</option>
        <option value="precio-asc">Precio: menor a mayor</option>
        <option value="precio-desc">Precio: mayor a menor</option>
        <option value="nombre">Nombre A–Z</option>
      </select>
    </div>
  </div>
  <div class="productos-grid" id="grid-productos"></div>
</section>
```

new_string:
```
<section id="productos">
  <div class="section-header fade-in">
    <span class="eyebrow">Catálogo</span>
    <h2>Nuestros Productos</h2>
  </div>
  <div class="filtros-bar">
    <span class="filtros-count" id="count-productos">4 productos</span>
    <div class="filtros-sort">
      Ordenar:
      <select id="sort-select">
        <option value="default">Destacados</option>
        <option value="precio-asc">Precio: menor a mayor</option>
        <option value="precio-desc">Precio: mayor a menor</option>
        <option value="nombre">Nombre A–Z</option>
      </select>
    </div>
  </div>
  <div class="productos-grid" id="grid-productos"></div>
</section>
```

- [ ] **Step 2: Verificar en browser**

La sección Productos debe tener header con barra verde izquierda, eyebrow "CATÁLOGO" en verde pequeño, y las cards del producto renderizadas en grid con estilo minimalista (imágenes sobre fondo gris claro, sin sombras, hover con borde verde izquierdo).

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: redesign products section header and grid"
```

---

## Task 6: Reemplazar Sección Cómo Funciona

**Files:**
- Modify: `index.html` (sección `#como`)

- [ ] **Step 1: Reemplazar la sección completa**

old_string:
```
<!-- CÓMO FUNCIONA -->
<section id="como">
  <div class="section-title">
    <h2>¿Cómo funciona?</h2>
    <p>Cuatro pasos y el fertilizante llega a tu campo</p>
    <div class="divider"></div>
  </div>
  <div class="pasos">
    <div class="paso">
      <div class="paso-num">01</div>
      <div class="paso-icon">🛒</div>
      <h4>Elegí el producto</h4>
      <p>Seleccioná el fertilizante y la cantidad de bolsas que necesitás.</p>
    </div>
    <div class="paso">
      <div class="paso-num">02</div>
      <div class="paso-icon">📋</div>
      <h4>Completá el formulario</h4>
      <p>Ingresá tus datos de contacto y la dirección de entrega.</p>
    </div>
    <div class="paso">
      <div class="paso-num">03</div>
      <div class="paso-icon">📞</div>
      <h4>Te confirmamos</h4>
      <p>En menos de 2 horas te llamamos para confirmar el pedido y el pago.</p>
    </div>
    <div class="paso">
      <div class="paso-num">04</div>
      <div class="paso-icon">🚛</div>
      <h4>Entrega en campo</h4>
      <p>Coordinamos el flete y entregamos en el punto que elijas.</p>
    </div>
  </div>
</section>
```

new_string:
```
<!-- CÓMO FUNCIONA -->
<section id="como">
  <div class="section-header fade-in">
    <span class="eyebrow">El proceso</span>
    <h2>Cómo funciona</h2>
    <p>Cuatro pasos y el fertilizante llega a tu campo</p>
  </div>
  <div class="pasos">
    <div class="paso fade-in" style="transition-delay:0s">
      <span class="paso-num">01</span>
      <h4>Elegí el producto</h4>
      <p>Seleccioná el fertilizante y la cantidad de bolsas que necesitás.</p>
    </div>
    <div class="paso fade-in" style="transition-delay:0.1s">
      <span class="paso-num">02</span>
      <h4>Completá el formulario</h4>
      <p>Ingresá tus datos de contacto y la dirección de entrega.</p>
    </div>
    <div class="paso fade-in" style="transition-delay:0.2s">
      <span class="paso-num">03</span>
      <h4>Te confirmamos</h4>
      <p>En menos de 2 horas te llamamos para confirmar el pedido y el pago.</p>
    </div>
    <div class="paso fade-in" style="transition-delay:0.3s">
      <span class="paso-num">04</span>
      <h4>Entrega en campo</h4>
      <p>Coordinamos el flete y entregamos en el punto que elijas.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verificar en browser**

La sección debe tener fondo verde oscuro, números enormes y semitransparentes (01, 02...) como decoración, texto blanco, sin emojis.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: redesign como-funciona section — dark green, no emojis"
```

---

## Task 7: Actualizar Sección Pedido / Carrito

**Files:**
- Modify: `index.html` (sección `#pedido`)

Solo se actualizan los títulos (sin emojis) y se agrega el header de sección.

- [ ] **Step 1: Reemplazar el header y los títulos de carrito y formulario**

old_string:
```
<!-- PEDIDO -->
<section id="pedido">
  <div class="section-title">
    <h2>Hacer un pedido</h2>
    <p>Revisá tu selección y completá tus datos</p>
    <div class="divider"></div>
  </div>
  <div class="pedido-wrapper">
    <!-- Resumen carrito -->
    <div class="resumen">
      <h3>🛒 Tu Carrito</h3>
```

new_string:
```
<!-- PEDIDO -->
<section id="pedido">
  <div class="section-header fade-in">
    <span class="eyebrow">Pedidos</span>
    <h2>Hacer un pedido</h2>
  </div>
  <div class="pedido-wrapper">
    <!-- Resumen carrito -->
    <div class="resumen">
      <h3>Tu carrito</h3>
```

- [ ] **Step 2: Quitar emoji del botón de formulario y título del formulario**

old_string:
```
    <div class="form-pedido">
      <h3>📝 Tus Datos</h3>
```
new_string:
```
    <div class="form-pedido">
      <h3>Tus datos</h3>
```

old_string:
```
        <button type="submit" class="btn-enviar">📦 Enviar Pedido</button>
```
new_string:
```
        <button type="submit" class="btn-enviar">Enviar pedido</button>
```

- [ ] **Step 3: Quitar emoji del botón vaciar carrito**

old_string:
```
      <button class="btn-limpiar" onclick="limpiarCarrito()">🗑 Vaciar carrito</button>
```
new_string:
```
      <button class="btn-limpiar" onclick="limpiarCarrito()">Vaciar carrito</button>
```

- [ ] **Step 4: Verificar en browser**

La sección pedido debe verse en fondo blanco, layout 2 columnas (carrito izq, formulario der), sin emojis, inputs con borde 1px gris que se vuelve verde al hacer focus.

- [ ] **Step 5: Commit**
```bash
git add index.html
git commit -m "feat: redesign pedido section — clean layout, no emojis"
```

---

## Task 8: Reemplazar Footer y Floating Cart

**Files:**
- Modify: `index.html` (footer + cart flotante)

- [ ] **Step 1: Reemplazar el footer**

old_string:
```
<!-- FOOTER / CONTACTO -->
<footer id="contacto">
  <div class="footer-top">
    <div class="footer-col">
      <h4>Green Force™</h4>
      <p>Tu marca de fertilizantes<br>de confianza.</p>
    </div>
    <div class="footer-col">
<h4>Contacto</h4>
<a href="tel:+5491121581171">📞 +54 9 11 2158-1171</a>
<a href="mailto:greenforcearg@gmail.com">✉️ greenforcearg@gmail.com</a>
<a href="https://wa.me/5491121581171" target="_blank">💬 WhatsApp</a>
    </div>
    <div class="footer-col">
      <h4>Horario</h4>
      <p>Lunes a Viernes: 8 a 18 hs</p>
      <p>Sábado: 8 a 13 hs</p>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <p>Los precios son con entrega en la zona de Pilar<br>y pueden variar según zona de entrega.</p>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2025 Green Force™ — Diseñado con ♥ para el campo argentino
  </div>
</footer>
```

new_string:
```
<!-- FOOTER / CONTACTO -->
<footer id="contacto">
  <div class="footer-inner">
    <div class="footer-col">
      <h4>Green Force™</h4>
      <p>Tu marca de fertilizantes de confianza para el agro argentino.</p>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <a href="tel:+5491121581171">+54 9 11 2158-1171</a>
      <a href="mailto:greenforcearg@gmail.com">greenforcearg@gmail.com</a>
      <a href="https://wa.me/5491121581171" target="_blank">WhatsApp</a>
    </div>
    <div class="footer-col">
      <h4>Horario</h4>
      <p>Lunes a Viernes: 8 a 18 hs</p>
      <p>Sábado: 8 a 13 hs</p>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <p>Los precios incluyen entrega en zona Pilar y pueden variar según zona.</p>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2025 Green Force™ — Fertilizantes de precisión para el campo argentino
  </div>
</footer>
```

- [ ] **Step 2: Actualizar el cart flotante**

old_string:
```
<a href="#pedido" id="cart-float">
  🌿 Ver pedido <div id="cart-count">0</div>
</a>
```

new_string:
```
<a href="#pedido" id="cart-float">
  Ver pedido <div id="cart-count">0</div>
</a>
```

- [ ] **Step 3: Verificar en browser**

Footer debe verse en casi-negro con texto verde menta en headers, links sin emojis. Cart flotante debe ser verde oscuro con badge verde menta.

- [ ] **Step 4: Commit**
```bash
git add index.html
git commit -m "feat: redesign footer and floating cart button"
```

---

## Task 9: Agregar IntersectionObserver para animaciones de scroll

**Files:**
- Modify: `index.html` (agregar JS antes de `</script>`)

- [ ] **Step 1: Agregar el observer al final del bloque script**

Buscar la función `cerrarModal` en el archivo. Inmediatamente antes de la línea `function cerrarModal() {`, agregar:

Usar Edit con:

old_string:
```
  function cerrarModal() {
```

new_string:
```
  // Scroll fade-in
  (function() {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(function(el) {
      observer.observe(el);
    });
  })();

  function cerrarModal() {
```

- [ ] **Step 2: Verificar en browser**

Al hacer scroll, las secciones deben aparecer con fade-in + slide-up. Abrir DevTools → Network para verificar que no hay errores JS.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: add IntersectionObserver scroll animations"
```

---

## Task 10: Limpieza final

**Files:**
- Delete: `design-preview.html`

- [ ] **Step 1: Eliminar archivo de preview**
```bash
git rm design-preview.html
```

- [ ] **Step 2: Verificación final completa**

Abrir `index.html` en browser y revisar:
- [ ] Nav: fondo verde, logo blanco, links sin emoji, "Hacer pedido" con borde outlined
- [ ] Hero: fondo verde, título enorme, "cosecha" en verde menta, 3 stats a la derecha
- [ ] Productos: grid blanco con border gris, cards con hover borde verde izquierdo, ratios N-P-K en monoespaciada
- [ ] Cómo funciona: fondo verde, números enormes semitransparentes, sin emojis
- [ ] Pedido: fondo blanco, 2 columnas, inputs minimalistas
- [ ] Footer: casi negro, headers en menta, links sin emojis
- [ ] Scroll: elementos aparecen con fade-in al bajar
- [ ] Formulario: enviar pedido funciona (llama a `/api/enviar-pedido`)
- [ ] Carrito: agregar productos, ver contador en cart flotante, ver items en resumen

- [ ] **Step 3: Commit final**
```bash
git add -A
git commit -m "chore: remove design-preview.html, complete Swiss Minimalist redesign"
```
