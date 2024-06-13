import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";
import rootRouter from "./src/routes/router.js";
dotenv.config();
const App = express();

// express.json() for sharing json object and cors for sharing data on two different domains
App.use(express.json());
App.use(cors());
App.use(express.urlencoded({ extended: false }));

// for accessing all routes effectively
App.use(rootRouter);

//Handling error of all routes on app level middleware
App.use(errorHandler);

App.listen(process.env.PORT, () => {
  console.log("server is running on PORT", process.env.PORT);
});

