import * as ProjectsServices from "../services/projects.services.js";

function viewAll(req, res) {
    ProjectsServices.getProjects()
        .then((projects) => {
            res.render("projects/admin/adminProjects", { projects });
        });
}

// * Crear proyecto
//Redirecciona al form para crear el nuevo proyecto
function createProject(req, res) {
    res.render("projects/admin/loadProject", { project: {} });
}

//Guarda lo que venga por el form
function saveProject(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.desc,
        link: req.body.link,
        img: req.body.img,
        public: eval(req.body.status)
    }

    ProjectsServices.setNewProject(project)
        .then(() => {
            res.render("common/success", { message: "El proyecto se guardó correctamente. <a href='/projects'>Ver proyectos</a>" })
        })
        .catch((err) => {
            console.error(err);
            //Todo hacer vista de error
        })
}

// * Eliminar proyecto
//Redirecciona al form de confirmación de eliminación
function confirmDeleteProject(req, res) {
    const id = req.params.projectID;

    ProjectsServices.getProjectsByID(id)
        .then((project) => {
            if (project) res.render("projects/admin/deleteProject", { project });
            else res.render("404", { message: "El proyecto que querés eliminar no existe."});
        })
}

//Procede a eliminar el proyecto.
function deleteProject(req, res) {
    const id = req.params.projectID;

    ProjectsServices.deleteProjectByID(id)
    .then(() =>{
        res.render("common/success", { message: "El proyecto se eliminó correctamente. <a href='/projects'>Ver proyectos</a>"})
    })
    .catch((err) => {
        console.error(err);
        //Todo hacer vista de error
    })
}

// * Editar proyecto
// Trae el proyecto que se quiere editar y redirecciona a 
function confirmEditProject(req, res){
    const id = req.params.projectID;

    ProjectsServices.getProjectsByID(id)
        .then((project) =>{
            if(project) res.render("projects/admin/loadProject", { project });
            else res.render("404", { message: "El proyecto que querés editar no existe."})
        })
}

function editProject(req, res){
    const id = req.params.projectID;
    const project = {
        name: req.body.name,
        description: req.body.desc,
        link: req.body.link,
        img: req.body.img,
        public: eval(req.body.status),
    }

    ProjectsServices.setProjectChanges(id, project)
        .then(() =>{
            res.render("common/success", { message: "El proyecto se editó correctamente. <a href='/projects'>Ver proyectos</a>"})
        })
        .catch((err) => {
            console.error(err);
            //Todo hacer vista de error
        })
}

export {
    viewAll,
    createProject,
    saveProject,
    confirmDeleteProject,
    deleteProject,
    confirmEditProject,
    editProject,
}