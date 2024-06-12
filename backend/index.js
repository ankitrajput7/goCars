import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/logo.routes.js";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";

dotenv.config();
const App = express();

App.use(express.json());
App.use(cors());
App.use(router);

App.use(errorHandler);

App.listen(process.env.PORT, () => {
  console.log("server is running on PORT", process.env.PORT);
});
