import { Router } from "express";

const authorRoutes = Router();

authorRoutes.get("/", (request, response) => {
  return response.json({ message: "teste" });
});

export default authorRoutes;
