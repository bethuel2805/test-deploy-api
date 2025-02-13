import express from "express";

const router = express.Router();

import getPlanetController from "../controller/planet.controller.js";

router.get("/", getPlanetController);

export default router;
