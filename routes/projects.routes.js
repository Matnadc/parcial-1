import express from "express";
import * as ProjectsController from "../controllers/projects.controllers.js";

const route = express.Router();

route.get("/admin/projects", ProjectsController.viewAll);

route.route("/admin/projects/new")
    .get(ProjectsController.addNew)
    .post(ProjectsController.save);

export default route;