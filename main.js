(() => {
  const WA = '526671055456';
  const wa = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const money = n => '$' + Math.round(n).toLocaleString('es-MX');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const TYPE = { pickup: 'Pick-up', suv: 'SUV', sedan: 'Sedán' };
  const FILTERS = {
    all: () => true,
    camionetas: c => c.type === 'pickup' || c.type === 'suv',
    pickup: c => c.type === 'pickup',
    sedan: c => c.type === 'sedan',
    suv: c => c.type === 'suv',
  };
  const MODES = {
    venta: 'quiero vender mi auto (venta directa)',
    consigna: 'quiero dejar mi auto a consignación',
    cuenta: 'quiero dar mi auto a cuenta de otro',
  };

  // Generic WhatsApp links: <a data-wa="mensaje">
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa); });

  // — Inventario —
  const grid = document.getElementById('cars');
  const empty = document.getElementById('cars-empty');
  const cars = window.MC_INVENTARIO || [];
  const corners = '<i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>';
  const photoIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>';

  function carCard(c) {
    const name = `${c.brand} ${c.model} ${c.year}`;
    const down = money(c.price * 0.1);
    const photo = c.photo
      ? `<img src="${esc(c.photo)}" alt="${esc(name)}" loading="lazy" decoding="async" width="400" height="300">`
      : `<div class="car-photo-empty">${photoIcon}<span>Foto del vehículo</span></div>`;
    return `<article class="car blueprint">${corners}
      <div class="car-photo">${photo}<span class="car-type">${TYPE[c.type] || ''}</span></div>
      <div class="car-body">
        <div><span class="car-brand">${esc(c.brand)}</span><h3 class="display">${esc(c.model)} ${esc(c.year)}</h3></div>
        <div class="car-specs"><span>${c.km.toLocaleString('es-MX')} km</span><span aria-hidden="true">·</span><span>${esc(c.trans)}</span></div>
        <div class="car-price"><strong>${money(c.price)}</strong><span class="car-down">Enganche desde ${down}</span></div>
        <div class="car-actions">
          <a class="btn btn-red btn-sm" target="_blank" rel="noopener" href="${esc(wa(`Hola MC Motors, me interesa la ${name} (${money(c.price)}). ¿Sigue disponible?`))}">Pregunta por este auto</a>
          <a class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener" href="${esc(wa(`Hola MC Motors, me interesa información sobre crédito para la ${name}. Vi que el enganche es desde ${down}.`))}">Pregunta por crédito</a>
        </div>
      </div>
    </article>`;
  }

  function renderCars(key) {
    const list = cars.filter(FILTERS[key] || FILTERS.all);
    grid.innerHTML = list.map(carCard).join('');
    empty.hidden = list.length > 0;
  }

  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      renderCars(btn.dataset.filter);
    });
  });
  renderCars('all');

  // — Formularios —
  const val = (form, name) => (form.elements[name]?.value || '').trim();

  const credit = document.getElementById('credit-form');
  const tradeFields = document.getElementById('trade-fields');
  credit.querySelectorAll('input[name="trade"]').forEach(r => {
    r.addEventListener('change', () => { tradeFields.hidden = credit.elements.trade.value !== 'si'; });
  });
  credit.addEventListener('submit', e => {
    e.preventDefault();
    const v = n => val(credit, n);
    const err = document.getElementById('credit-error');
    if (!v('name') || !v('phone')) { err.hidden = false; return; }
    err.hidden = true;
    const trade = credit.elements.trade.value === 'si';
    const lines = ['Hola MC Motors, me interesa información sobre crédito', '', `Nombre: ${v('name')}`, `Teléfono: ${v('phone')}`];
    if (v('vehicle')) lines.push(`Vehículo de interés: ${v('vehicle')}`);
    if (v('down')) lines.push(`Enganche aproximado: ${v('down')}`);
    lines.push(`Auto a cuenta: ${trade ? 'Sí' : 'No'}`);
    if (trade) lines.push(`Mi auto: ${[v('tBrand'), v('tModel'), v('tYear')].filter(Boolean).join(' ')}${v('tKm') ? `, ${v('tKm')} km` : ''}`);
    window.open(wa(lines.join('\n')), '_blank', 'noopener');
  });

  const sell = document.getElementById('sell-form');
  let sellMode = 'venta';
  sell.querySelectorAll('.mode').forEach(btn => {
    btn.addEventListener('click', () => {
      sellMode = btn.dataset.mode;
      sell.querySelectorAll('.mode').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    });
  });
  sell.addEventListener('submit', e => {
    e.preventDefault();
    const v = n => val(sell, n);
    const err = document.getElementById('sell-error');
    if (!v('name') || !v('phone')) { err.hidden = false; return; }
    err.hidden = true;
    const lines = [`Hola MC Motors, ${MODES[sellMode]}`, '', `Nombre: ${v('name')}`, `Teléfono: ${v('phone')}`,
      `Auto: ${[v('brand'), v('model'), v('year')].filter(Boolean).join(' ') || '—'}`];
    if (v('km')) lines.push(`Kilometraje: ${v('km')} km`);
    window.open(wa(lines.join('\n')), '_blank', 'noopener');
  });
})();
