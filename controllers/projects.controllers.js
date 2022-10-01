import * as ProjectsServices from "../services/projects.services.js";

function viewAll(req, res){
    ProjectsServices.getProjects()
    .then((projects) => {
        res.render("projects/viewProjects", { projects });
    });
}

export {
    viewAll,
}