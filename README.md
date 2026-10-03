# MC Motors — Truck & Car Center

Landing page de MC Motors, lote de autos y camionetas seminuevos en Culiacán (Malecón Nuevo, Tres Ríos).

Sitio estático (HTML + CSS + JS, sin build). Para verlo, abre `index.html` o súbelo tal cual a cualquier hosting estático (GitHub Pages, Netlify, Vercel).

## Archivos

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | La página completa: hero, barra de confianza, servicios, inventario, crédito, vende tu auto, por qué MC Motors, opiniones, ubicación, CTA final y footer. Incluye SEO local y datos estructurados (`AutoDealer`). |
| `styles.css` | Estilos con la paleta de la marca (rojo `#D7141A`, rojo oscuro `#8E0B10`, negro `#111111`, amarillo `#F5D20A`), Anton + Montserrat. |
| `inventario.js` | **Lista de vehículos.** Aquí se agregan, quitan o editan unidades. El enganche (10%) se calcula solo. |
| `main.js` | Filtros del inventario, formularios y enlaces de WhatsApp con mensaje distinto por botón. |
| `assets/` | Foto del lote para el hero (JPG + WebP optimizados) y carpeta `inventario/` para las fotos de los autos. |

## Cómo actualizar el inventario

1. Copia la foto a `assets/inventario/` (de preferencia WebP o JPG, ~800px de ancho, formato 4:3).
2. En `inventario.js`, agrega o edita una línea:

```js
{ brand: 'Chevrolet', model: 'Silverado 1500 LT', year: 2019, km: 98000, trans: 'Automática', price: 529000, type: 'pickup', photo: 'assets/inventario/silverado-2019.webp' },
```

`type` puede ser `'pickup'`, `'suv'` o `'sedan'`. Si `photo` está vacío se muestra el espacio "Foto del vehículo".

## Pendientes antes de publicar

- [ ] **Inventario real:** las 8 unidades actuales son de ejemplo (marcas, precios y kilometraje inventados).
- [ ] **Fotos** de cada unidad.
- [ ] **Logo** en buena resolución o vectorial (hoy el header y el footer usan una versión en texto).
- [ ] **Documentos para crédito:** "Identificación oficial y comprobante de domicilio" está por confirmar.
- [ ] Plazos de crédito y tipo de crédito (propio, financiera o bancario).
- [ ] **Redes sociales** para el footer.
