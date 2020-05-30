const router = require("@koa/router")();
const donations = require("./services/donations");

const utils = require("./utils");
const manifest = utils.getManifest(utils.ASSETS_PATH);

router.get("/", async (ctx) => {
  ctx.state.manifest = manifest;
  await ctx.render("index");
});

router.post("/donate", async (ctx) => {
  const { amount, currency } = ctx.request.body;

  if (Boolean(amount) && Boolean(currency)) {
    if (await donations.createDonation(amount, currency)) {
      ctx.body = { ok: true };
    }

    return;
  }

  ctx.body = { ok: false };
});

module.exports = router;
