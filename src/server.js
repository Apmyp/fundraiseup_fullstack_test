const Koa = require("koa");
const router = require("@koa/router")();
const render = require("koa-ejs");
const serve = require("koa-static");
const mount = require("koa-mount");
const path = require("path");

const utils = require("./utils");

const assetsPath = process.env.ASSETS_PATH || path.resolve(__dirname, "..", "dist", "assets");
const manifest = utils.getManifest(assetsPath);

const app = new Koa();
render(app, {
  root: path.join(__dirname, "resources", "views"),
  layout: false,
  viewExt: "html",
  cache: false,
  debug: process.env.NODE_ENV === "development",
});

router.get("/", async (ctx) => {
  ctx.state.manifest = manifest;
  await ctx.render("index");
});

router.post('/donate', async (ctx) => {
  // donate amount > 0
  // donate currency in currencies
  // create document in mongodb donations

  ctx.body = { ok: true };
});

app.use(router.routes());
app.use(mount("/assets", serve(assetsPath)));

app.listen(3000);
