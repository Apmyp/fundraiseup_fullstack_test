const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
});

module.exports = mongoose.model("Donation", donationSchema);
