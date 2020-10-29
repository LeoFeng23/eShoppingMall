import express from 'express'
import homeController from "./controllers/HomeController";


const app = express();

app.use('/api/home', homeController);
app.get

export default app;
