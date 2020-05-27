const Koa = require("koa");
const router = require("@koa/router")();
const app = new Koa();

router.get("/", async (ctx) => {
  ctx.body = "Hello, world!";
});


router.post('/donate', async (ctx) => {
  ctx.body = { ok: true };
});

app.use(router.routes());

app.listen(3000);
