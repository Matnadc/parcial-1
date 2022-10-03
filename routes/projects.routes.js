import express from "express";
import * as ProjectsController from "../controllers/projects.controllers.js";
import * as AdminProjectsController from "../controllers/adminProjects.controllers.js";

const route = express.Router();

// * Admin
route.get("/admin/projects", AdminProjectsController.viewAll);

// Crear
route.route("/admin/projects/new")
    .get(AdminProjectsController.createProject)
    .post(AdminProjectsController.saveProject);

// Eliminar
route.route("/admin/projects/:projectID/delete")
    .get(AdminProjectsController.confirmDeleteProject)
    .post(AdminProjectsController.deleteProject);

// Editar
route.route("/admin/projects/:projectID/edit")
    .get(AdminProjectsController.confirmEditProject)
    .post(AdminProjectsController.editProject);

route.post("/admin/projects/:projectID/publish", AdminProjectsController.switchStatus);

// * No admin :(
route.get("/projects", ProjectsController.viewAll);
route.get("/projects/:projectID", ProjectsController.viewById);

export default route;