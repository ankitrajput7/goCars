import express from "express";
const logoRouter = express.Router();
import logoController from "../controllers/logo.controller.js";
import multer from "multer";

const upload = multer();

logoRouter.get("/logo", logoController.get);
logoRouter.post("/logo", upload.single("image"), logoController.create);
logoRouter.put("/:id", logoController.update);
logoRouter.delete("/:id", logoController.remove);

export default logoRouter;
