// import * as PortfolioServices from "../services/portfolio.services.js";

function viewHome(req, res){
    console.log(res);
    res.render("portfolio/home");
}

function viewAbout(req, res){
    res.render("portfolio/about");
}

function viewStudies(req, res){
    res.render("portfolio/studies");
}

function viewTechs(req, res){
    res.render("portfolio/techs");
}

export {
    viewHome,
    viewAbout,
    viewStudies,
    viewTechs,
}