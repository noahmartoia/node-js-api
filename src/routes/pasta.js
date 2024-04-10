import express from "express";
import {
  createpasta,
  deletepasta,
  getpastas,
  getpasta,
  getError,
  udpatepasta,
} from "../controller/pasta.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3001/pasta
router.get("/", getpastas);

// GET http://localhost:3001/pasta/1
router.get("/:id", getpasta);

// POST http://localhost:3001/pasta
router.post(
  "/",
  [
    body("brand").trim().isLength({ max: 20, min: 2 }),
    body("model").trim().isLength({ min: 2, max: 100 }),
  ],
  createpasta
);

// PUT http://localhost:3001/pasta/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", udpatepasta);

// DELETE http://localhost:3001/pasta/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deletepasta);

// ERROR
router.get("/error", getError);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;