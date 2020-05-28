const settings = require('../common/settings.json');
const Donation = require("../models/Donation");

async function createDonation(amount, currency) {
  if(amount <= 0 || !hasCurrency(currency)) {
    return;
  }

  const d = new Donation({ amount, currency });
  await d.save();

  return true;
}

function hasCurrency(currency) {
  return settings.currencies.some(c => c.code === currency)
}

module.exports = {
  createDonation
}