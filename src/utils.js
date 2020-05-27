const path = require("path");
const fs = require("fs");

function getManifest(assetsPath) {
  const devManifest = { "main.css": "main.css", "main.js": "bundle.js" };

  const manifestPath = path.resolve(assetsPath, "manifest.json");
  return fs.existsSync(manifestPath)
    ? require(manifestPath)
    : devManifest;
}

module.exports = {
  getManifest
};