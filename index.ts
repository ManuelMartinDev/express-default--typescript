import express from "express";
import { config } from "dotenv";

import indexRouter from "./routes/main";

config();

const app = express();

app.set("PORT", process.env["PORT"] || 4000);

app.use("/", indexRouter);

app.listen(app.get("PORT"), () => {
  console.log(`App running on port ${app.get("PORT")}`);
});
