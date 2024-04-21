import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.render("pages/index", {
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/index");
}

export const cats = (req: Request, res: Response) => {
    res.render("pages/index");
}