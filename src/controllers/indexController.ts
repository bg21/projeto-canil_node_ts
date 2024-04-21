import { Request, Response } from "express";
import { createMenu } from "../helpers/createMenu";

export const index = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: createMenu("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: createMenu("dog"),
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg"
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: createMenu("cat"),
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg"
        }
    });
}