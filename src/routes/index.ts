import { Router } from "express";
import routerInitialModule from "../modules/initialModule/routes";

const mainRouter = Router();

mainRouter.use(routerInitialModule)

export default mainRouter;