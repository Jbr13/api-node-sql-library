import { Router } from "express";

const routerInitialModule = Router();

routerInitialModule.get('/', (request, response) => {
    return response.json({ message: 'teste' });
});

export default routerInitialModule;