import express from "express";
import { cdoctores, perfil } from "../controllers/doctorController.js";

const router = express.Router();
router.post("/register", cdoctores);

router.get("/", (req, res) => {
  res.send("vista de login para doctores");
});

router.post("/perfil", perfil);

export default router;
