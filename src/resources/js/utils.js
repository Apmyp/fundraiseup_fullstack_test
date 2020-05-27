export function amountFormat(amount) {
  return new Intl.NumberFormat('en-US').format(amount);
}