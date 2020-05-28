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
  return currency.symbol + amount;
}

export function exchangeCurrency(fromCurrency, toCurrency, amount) {
  const usd = exchangeCurrencyToUSD(fromCurrency, amount);
  if(toCurrency.code === "USD") {
    return usd;
  }
  return exchangeCurrencyFromUSD(toCurrency, usd);
}

export function exchangeCurrencyFromUSD(currency, amount) {
  return amount * currency.rate;
}

export function exchangeCurrencyToUSD(currency, amount) {
    return amount / currency.rate;
}

export function ignoreNotNumbers(event) {
  const enterCharCodes = [13, 36, 76].includes(event.keyCode);
  const numberCharCodes = event.keyCode >= 48 && event.keyCode <= 57;

  if (enterCharCodes || numberCharCodes) {
    return true;
  }

  event.preventDefault();
}