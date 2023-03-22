// Import express module
import express from "express";

// Import getUser function from usersController
import { getUser } from "../controllers/usersConroller";

// Create a router object
const router = express.Router();

// Set up a route for the getUser function
router.get("/", getUser);

// Export the router object
export default router;