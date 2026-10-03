/*
  Inventario de MC Motors.

  ⚠️ Estas unidades son DE EJEMPLO (marcas, precios y kilometraje inventados).
  Reemplázalas por las unidades reales antes de publicar.

  Campos:
    brand   Marca
    model   Modelo / versión
    year    Año
    km      Kilometraje (número)
    trans   Transmisión
    price   Precio en MXN (número). El enganche (10%) se calcula solo.
    type    'pickup' | 'suv' | 'sedan'
    photo   Ruta a la foto, p. ej. 'assets/inventario/silverado-2019.webp'.
            Déjalo vacío ('') para mostrar el espacio "Foto del vehículo".
*/
window.MC_INVENTARIO = [
  { brand: 'Chevrolet', model: 'Silverado 1500 LT', year: 2019, km: 98000, trans: 'Automática', price: 529000, type: 'pickup', photo: '' },
  { brand: 'Toyota', model: 'Hilux SR', year: 2020, km: 75000, trans: 'Manual', price: 459000, type: 'pickup', photo: '' },
  { brand: 'Nissan', model: 'Frontier PRO-4X', year: 2021, km: 62000, trans: 'Automática', price: 549000, type: 'pickup', photo: '' },
  { brand: 'Ford', model: 'Lobo XLT', year: 2018, km: 110000, trans: 'Automática', price: 489000, type: 'pickup', photo: '' },
  { brand: 'Toyota', model: 'RAV4 XLE', year: 2019, km: 80000, trans: 'Automática', price: 419000, type: 'suv', photo: '' },
  { brand: 'Chevrolet', model: 'Tahoe LT', year: 2017, km: 120000, trans: 'Automática', price: 599000, type: 'suv', photo: '' },
  { brand: 'Nissan', model: 'Versa Advance', year: 2021, km: 45000, trans: 'Automática', price: 259000, type: 'sedan', photo: '' },
  { brand: 'Honda', model: 'Civic EX', year: 2018, km: 88000, trans: 'CVT', price: 289000, type: 'sedan', photo: '' },
];
