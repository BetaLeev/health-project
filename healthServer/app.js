const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

const views = require("koa-views");
const co = require("co");
const convert = require("koa-convert");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const debug = require("debug")("koa2:server");
const path = require("path");

const config = require("./config");
const routes = require("./routes");

const port = process.env.PORT || config.port;

// error handler
onerror(app);

// middlewares
app
  .use(bodyparser())
  .use(json())
  .use(logger())
  .use(require("koa-static")(__dirname + "/public"))

  .use(router.routes())
  .use(router.allowedMethods());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - $ms`);
});

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  port: "3306",
  database: "health",
});
connection.connect();

router.get("/info", async (ctx) => {
  let func = async () => {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM info";
      connection.query(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  ctx.body = await func();
});

router.post("/info", async (ctx) => {
  //增
  let fare = ctx.request.body.fare;
  let touyun = ctx.request.body.touyun;
  let ganmao = ctx.request.body.ganmao;
  let date = new Date();
  var addSql = "INSERT INTO info(fare,touyun,ganmao,date) VALUES(?,?,?,?)";

  let addSqlParams = [touyun, fare, ganmao, date];
  let func = async () => {
    return new Promise((resolve, reject) => {
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log(err);
          reject(err);
          console.log("[INSERT ERROR] - ", err.message);
          return;
        } else {
          console.log(
            "--------------------------INSERT----------------------------"
          );
          console.log("INSERT ID:", result.insertId);
          console.log("INSERT ID:", result);
          console.log(
            "-----------------------------------------------------------------\n\n"
          );
          resolve(result);
        }
      });
    });
  };
  ctx.body = await func();
  return;
});

router.get("/sport", async (ctx) => {
  let func = async () => {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM sport";
      connection.query(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  ctx.body = await func();
});

router.post("/sport", async (ctx) => {
  let run = ctx.request.body.run;
  let walk = ctx.request.body.walk;
  let other = ctx.request.body.other;
  let addSql = "INSERT INTO sport(run,walk,other,date) VALUES(?,?,?,?)";
  let date = new Date();

  let addSqlParams = [run, walk, other, date];
  //增
  let func = async () => {
    return new Promise((resolve, reject) => {
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log("[INSERT ERROR] - ", err.message);
          reject(err);
          return;
        } else {
          console.log(
            "--------------------------INSERT----------------------------"
          );

          console.log("INSERT ID:", result);
          console.log(
            "-----------------------------------------------------------------\n\n"
          );
          resolve(result);
        }
      });
    });
  };
  ctx.body = await func();
});

router.get("/", async (ctx, next) => {
  ctx.state = {
    title: "Koa2",
  };
  ctx.body = "Hello World";
});

routes(router);
app.on("error", function (err, ctx) {
  console.log(err);
  logger.error("server error", err, ctx);
});

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
