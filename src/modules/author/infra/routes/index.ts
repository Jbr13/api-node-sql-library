import { Router } from "express";
import AuthorController from "../http/AuthorController";

const authorRoutes = Router();
const authorController = new AuthorController();

authorRoutes.post("", authorController.insertAuthor);
authorRoutes.get("", authorController.listAuthor);
authorRoutes.get("/:id", authorController.findAuthor);
authorRoutes.put("/:id", authorController.updateAuthor);
authorRoutes.delete("/:id", authorController.deleteAuthor);

export default authorRoutes;
