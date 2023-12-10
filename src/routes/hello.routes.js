const { Router } = require("express");

const HelloController = require("../controllers/HelloController");

const helloController = new HelloController();

const helloRoutes = Router();

helloRoutes.get("/", helloController.index);

module.exports = helloRoutes;
