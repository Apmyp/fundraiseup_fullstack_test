const path = require("path");
const fs = require("fs");

function getManifest(assetsPath) {
  const devManifest = { "main.css": "main.css", "main.js": "bundle.js" };

  const manifestPath = path.resolve(assetsPath, "manifest.json");
  return fs.existsSync(manifestPath)
    ? require(manifestPath)
    : devManifest;
}

function validateDonation(amount) {
  return amount > 0;
}

module.exports = {
  getManifest,
  validateDonation,
};