export function formatAmount(amount) {
  return new Intl.NumberFormat('en-US').format(amount);
}

export function cleanAmount(amount) {
  const cleanedAmount = amount.replace(/[^\d]/g, "");
  
  return cleanedAmount && Number(cleanedAmount);
}

export function beautifyAmount(amount) {
  const normalizedAmount = amount.toFixed(0);
  const defaultCoefficient = 15000;
  const coefficientMap = {
    1: 1,
    2: 10,
    3: 50,
    4: 500,
    5: 1000,
    6: 5000,
    7: 10000,
  };
  const coefficient =
    coefficientMap[normalizedAmount.length] || defaultCoefficient;

  return Math.ceil(normalizedAmount / coefficient) * coefficient;
}

export function currenize(currency, amount) {
  return currency.symbol + formatAmount(amount);
}

export function exchangeCurrency(currency, amount) {
  return currency.rate * amount;
}

export function ignoreNotNumbers(event) {
  const numberCharCodes = event.keyCode >= 48 && event.keyCode <= 57;

  if (numberCharCodes) {
    return true;
  }

  event.preventDefault();
}