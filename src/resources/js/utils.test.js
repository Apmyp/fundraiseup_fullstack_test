import { formatAmount } from "./utils";

describe("formatAmount", () => {
  it("delimits with comma long numbers", () => {
    expect(formatAmount(3500)).toBe("3,500");
  });
  it("do nothing with small numbers", () => {
    expect(formatAmount(300)).toBe("300");
  });
});