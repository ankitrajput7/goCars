import express from "express";
const router = express.Router();
import logoController from "../controllers/logo.controller.js";

router.get("/logo", logoController.get);
router.post("/logo", logoController.create);
router.put('/:id', logoController.update);
router.delete('/:id', logoController.remove);

export default router;
