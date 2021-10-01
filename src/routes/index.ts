import { Router } from "express";
import authorRoutes from "../modules/author/infra/routes";

const mainRouter = Router();

mainRouter.use(authorRoutes);

export default mainRouter;
