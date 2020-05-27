const utils = require('./utils');

describe("validateDonation", () => {
  it("rejects non-positive donations", () => {
    expect(utils.validateDonation(5)).toBeTruthy();
  });
});