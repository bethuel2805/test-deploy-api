import express from "express";

import planetRouter from "./routers/planet.router.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Le VBA est trop bon c'est lui le maitre du code" });
});

app.use("/planet", planetRouter);

app.listen(PORT, () => {
  console.log("Lancement du serveur port : ", PORT);
});
