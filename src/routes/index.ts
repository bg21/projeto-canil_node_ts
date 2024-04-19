import { Router } from "express";
import * as indexController from "../controllers/indexController";
import * as searchController from "../controllers/searchController";


const router = Router();

//home 
router.get("/", indexController.index);
router.get("/dogs", indexController.dogs);
router.get("/cats", indexController.cats);

router.get("/search", searchController.index);


export default router;