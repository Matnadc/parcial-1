import express from "express";
import * as PortfolioController from "../controllers/portfolio.controllers.js";

const route = express.Router();

route.get("/", PortfolioController.viewHome);

export default route;