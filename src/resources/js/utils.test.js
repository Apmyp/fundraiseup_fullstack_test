import {
  formatAmount,
  cleanAmount,
  beautifyAmount,
  currenize,
  exchangeCurrency,
} from "./utils";

const usdCurrency = { "name": "US Dollar", "code": "USD", "symbol": "$", "rate": 1 };
const eurCurrency =  { "name": "Euro", "code": "EUR", "symbol": "€", "rate": 2 };
const gbpCurrency = { "name": "British Pound", "code": "GBP", "symbol": "£", "rate": 3 };

describe("formatAmount", () => {
  it("delimits with comma long numbers", () => {
    expect(formatAmount(3500)).toBe("3,500");
  });
  it("do nothing with small numbers", () => {
    expect(formatAmount(300)).toBe("300");
  });
});

describe("cleanAmount", () => {
  it("removes and symbols but numbers", () => {
    expect(cleanAmount("6,003,500")).toBe(6003500);
    expect(cleanAmount("3,500")).toBe(3500);
    expect(cleanAmount("300")).toBe(300);
  });
});

describe("beautifyAmount", () => {
  it("makes pretty any amounts", () => {
    expect(beautifyAmount(0)).toBe(0);
    expect(beautifyAmount(1)).toBe(1);
    expect(beautifyAmount(36)).toBe(40);
    expect(beautifyAmount(89)).toBe(90);
    expect(beautifyAmount(90)).toBe(90);
    expect(beautifyAmount(91)).toBe(100);
    expect(beautifyAmount(180)).toBe(200);
    expect(beautifyAmount(898)).toBe(900);
    expect(beautifyAmount(2244)).toBe(2500);
    expect(beautifyAmount(4488)).toBe(4500);
    expect(beautifyAmount(123456789)).toBe(123465000);
  });
});

describe("currenize", () => {
  it("adds currency symbol in a front of amount", () => {
    expect(currenize(usdCurrency, 150)).toBe("$150");
    expect(currenize(eurCurrency, 150)).toBe("€150");
  });
});

describe("exchangeCurrency", () => {
  it("exchanges amount to passed currency", () => {
    expect(exchangeCurrency(usdCurrency, eurCurrency, 150)).toBe(300);
    expect(exchangeCurrency(eurCurrency, usdCurrency, 300)).toBe(150);
    expect(exchangeCurrency(eurCurrency, gbpCurrency, 300)).toBe(450);
  });
});