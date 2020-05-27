import { amountFormat } from "./utils";

describe("amountFormat", () => {
  it("delimits with comma long numbers", () => {
    expect(amountFormat(3500)).toBe("3,500");
  });
  it("do nothing with small numbers", () => {
    expect(amountFormat(300)).toBe("300");
  });
});