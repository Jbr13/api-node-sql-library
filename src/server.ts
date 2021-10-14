import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import mainRouter from "./routes";
import { createConnection } from "typeorm";

const app = express();
const port = 3333;

app.use(express.json())

app.listen(3000, async () => {
  console.log(`SERVER STARTED ON localhost:${port}`);
  await createConnection();
});

app.use("/v1", mainRouter); 