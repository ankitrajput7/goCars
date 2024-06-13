import express from "express";
import logoRouter from "./logo.routes.js";

const rootRouter = express.Router();
rootRouter.use(logoRouter);

export default rootRouter;
