export default function numberFormat(value) {
  const number = +value;
  if (Number.isNaN(number) || typeof number !== 'number') {
    return 'данные отстутствуеют';
  }

  return new Intl.NumberFormat().format(value);
}
