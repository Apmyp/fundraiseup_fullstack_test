const Koa = require("koa");
const render = require("koa-ejs");
const serve = require("koa-static");
const mount = require("koa-mount");
const bodyParser = require("koa-bodyparser");
const path = require("path");

const utils = require("./utils");
const router = require('./routes');

utils.initializeMongoose(utils.MONGO_URI);

const app = new Koa();

render(app, {
  root: path.join(__dirname, "resources", "views"),
  layout: false,
  viewExt: "html",
  cache: false,
  debug: process.env.NODE_ENV === "development",
});

app.use(bodyParser());
app.use(router.routes());
app.use(mount("/assets", serve(utils.ASSETS_PATH)));

const PORT = process.env.NODE_PORT || 3000;;
app.listen(PORT, () => {
  console.log(`[Koa] Server established on http://localhost:${PORT}`)
});
