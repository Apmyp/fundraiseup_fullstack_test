const Koa = require("koa");
const router = require("@koa/router")();
const render = require("koa-ejs");
const path = require("path");
const app = new Koa();

render(app, {
  root: path.join(__dirname, "resources", "views"),
  layout: false,
  viewExt: "html",
  cache: false,
  debug: process.env.NODE_ENV === "development",
});

router.get("/", async (ctx) => {
  await ctx.render("index");
});

router.post('/donate', async (ctx) => {
  // donate amount > 0
  // donate currency in currencies
  // create document in mongodb donations

  ctx.body = { ok: true };
});

app.use(router.routes());

app.listen(3000);
