import "reflect-metadata";
import express from "express";
import mainRouter from "./routes";
import { createConnection } from "typeorm";

const app = express();

app.listen(3000, async () => {
  console.log("SERVER STARTED ON localhost:3000");
  await createConnection();
});

app.use(mainRouter);
