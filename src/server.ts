import express from 'express';
import mainRouter from "./routes";

const app = express();

app.listen(3000, () => {
    console.log('SERVER STARTED ON localhost:3000')
});

app.use(mainRouter)
