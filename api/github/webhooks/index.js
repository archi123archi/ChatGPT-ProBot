const { createNodeMiddleware, createRobot} = require("robot");
const app = require("../../../dist/index.js");
module.exports = createNodeMiddleware(app, {
  robot: createRobot({
    overrides: {
      privateKey: Buffer.from(process.env.PRIVATE_KEY, "base64").toString(),
    }
  }),
  webhooksPath: "/api/github/webhooks",
});
