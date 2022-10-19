import { Router } from "express";
import UserController from "./controllers/UserController";
import EmailService from "./services/EmailService";

const routes = Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

export default routes;
