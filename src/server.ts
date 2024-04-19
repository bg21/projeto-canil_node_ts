import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";


dotenv.config();

const server = express();
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());



//definindo as pastas estáticas
server.use(express.static(path.join(__dirname, "../public")));


//rotas
server.use(mainRoutes);

//se tentar todas as rotas e não der certo 
server.use("", (req: Request, res: Response) => {
    res.status(404).
        render("erro");
})

//para a porta que o servidor irá abrir
server.listen(process.env.PORT);