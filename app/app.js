import express from "express";
import message from "./config/message.js";
const app = express();

app.listen (3000, () => {
    // console.log("Hola mundo");
    message("Hola mundo", "danger");
})