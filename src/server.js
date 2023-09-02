import Koa from "koa";
import { koaBody } from "koa-body";
import router from "./routes/routes.js";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(bodyParser());

app.listen(3300, async () => {
  console.log("Server running on http://localhost:3300");
});
