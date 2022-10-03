import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P1");

//Trae de la base todos los proyectos
async function getProjects() {
    return client.connect()
        .then(() => {
            return db.collection("Projects").find().toArray();
        })
}

//Trae de la base el proyecto que matcheé con el id
async function getProjectsByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("Projects").findOne({ _id: new ObjectId(id) });
        })
}

//Setea en la base el nuevo proyecto
async function setNewProject(project) {
    const newProject = {
        ...project,
    }

    return client.connect()
        .then(() => {
            return db.collection("Projects").insertOne(newProject);
        })
        .then(() => {
            return newProject;
        })
}

//Elimina de la base de datos el proyecto
async function deleteProjectByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("Projects").deleteOne({ _id: new ObjectId(id) });
        })
        .then(() => {
            return true;
        });
}

//Edita en la base de datos
async function setProjectChanges(id, project) {
    return client.connect()
        .then(() => {
            return db.collection("Projects").updateOne({ _id: new ObjectId(id)}, { "$set": project});
        })
}

export {
    getProjects,
    getProjectsByID,
    setNewProject,
    deleteProjectByID,
    setProjectChanges,
}