import * as ProjectsServices from "../services/projects.services.js";

function viewAll(req, res) {
    ProjectsServices.getProjects()
        .then((projects) => {
            res.render("projects/viewProjects", { projects });
        });
}

function viewById(req, res) {
    const id = req.params.projectID;

    ProjectsServices.getProjectsByID(id)
        .then((project) => {
            if (project) res.render("projects/viewDetails", { project });
            else res.render("404", { error: "Proyecto no encontrado" });
        })
}

export {
    viewAll,
    viewById,
}