const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const dotenv = require("dotenv");

const app = new Koa();

const router = new Router();
require("./routes/basic")({ router });

// Configuration to get the env variables
dotenv.config();

// error handling
app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit("error", err, ctx);
    }
});

// require our external routes and pass in the router
require("./routes/basic")({ router });

// tells the router to use all the routes that are on the object
app.use(router.routes());


const PORT = process.env.PORT;

app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors());

const server = app.listen(PORT);
// Exported for the tests
module.exports = server;