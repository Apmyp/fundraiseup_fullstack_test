export function formatAmount(currencySymbol, amount) {
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount);

  return `${currencySymbol}${formattedAmount}`;
}