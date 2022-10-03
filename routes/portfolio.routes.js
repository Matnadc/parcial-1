import express from "express";
import * as PortfolioController from "../controllers/portfolio.controllers.js";

const route = express.Router();

route.get("/", PortfolioController.viewHome);
route.get("/about", PortfolioController.viewAbout);
route.get("/studies", PortfolioController.viewStudies);
route.get("/techs", PortfolioController.viewTechs);

export default route;