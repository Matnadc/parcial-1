import express from 'express';
import PortfolioRoute from "./routes/portfolio.routes.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use("/", PortfolioRoute);

app.listen(8080, () =>{
    console.log("Servidor iniciado con éxito. http://localhost:8080");
});