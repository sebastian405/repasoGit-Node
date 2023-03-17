import { Router } from "express";
import * as controller from "../controllers/user.controllers";

const route = Router();

route.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
route.get("/user", controller.findAllUser);

// MUESTRA SOLO 1 REGISTRO
route.get("/user/:id", controller.findUser);

// INSERTA INFO
route.post("/user/", controller.insertUser);

export default route;
