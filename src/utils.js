const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose');

const ASSETS_PATH =
  process.env.ASSETS_PATH || path.resolve(__dirname, "..", "dist", "assets");
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost/fullstack_test";

function getManifest(assetsPath) {
  const devManifest = { "main.css": "main.css", "main.js": "bundle.js" };

  const manifestPath = path.resolve(assetsPath, "manifest.json");
  return fs.existsSync(manifestPath)
    ? require(manifestPath)
    : devManifest;
}

function initializeMongoose(uri) {
  mongoose.connect(uri, { useNewUrlParser: true });

  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );

  mongoose.connection.once("open", function() {
    console.log("[MongoDB] Connection established");
  });
}

module.exports = {
  ASSETS_PATH,
  MONGO_URI,

  getManifest,
  initializeMongoose,
};