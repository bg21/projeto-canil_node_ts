import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.render("pages/index");
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/index");
}

export const cats = (req: Request, res: Response) => {
    res.render("pages/index");
}