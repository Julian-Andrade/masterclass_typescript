import express from "express";
import routes from "./routes";
import cors from "cors";
import UserController from "./controllers/UserController";

const app = express();

app.use(cors());
app.use(routes);

app.listen(3333);
