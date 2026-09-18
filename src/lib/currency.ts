import currency from 'currency.js';

export const formatIDR = (value: number): string =>
  currency(value, {
    symbol: 'Rp ',
    separator: '.',
    decimal: ',',
    precision: 0,
  }).format();

export const parseIDR = (value: string): number =>
  Number(value.replace(/[^0-9]/g, '')) || 0;
