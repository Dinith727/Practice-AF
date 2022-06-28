require("dotenv").config();
const koa = require("koa");
const koaRouter = require("koa-router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const { dbConnect } = require("./utils/dbConnect");
const courseRoutes = require("./routes/course.routes");

const app = new koa();
const router = new koaRouter();

app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());
app.use(courseRoutes.routes());

router.get("/", (ctx) =>{
    ctx.body = {message: "Student Management API"};
});

app.listen(9000, () => {
    dbConnect();
    console.log("Server is up and running on http://localhost:9000");
})