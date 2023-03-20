import express, { response } from "express";
import { getUser } from "../controllers/usersConroller";
const router = express.Router();

// router.get("/", getUser);
router.get("/", getUser);

export default router;
