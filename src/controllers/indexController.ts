import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: {
            all: true,
            dog: false,
            cat: false
        },
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: {
            all: false,
            dog: true,
            cat: false
        },
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg"
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render("pages/index", {
        menu: {
            all: false,
            dog: false,
            cat: true
        },
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg"
        }
    });
}