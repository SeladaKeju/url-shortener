import { Router } from "express";
import { CreateController } from "../controller/url/createController";
import { DeleteUrlController } from "../controller/url/deleteUrlController";
import { GetUserUrlsController } from "../controller/url/getUserUrlsController";
import { RedirectUrlController } from "../controller/url/redirectUrlController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const createController = new CreateController();
const deleteUrlController = new DeleteUrlController();
const getUserUrlsController = new GetUserUrlsController();
const redirectUrlController = new RedirectUrlController();

// Public routes - redirect tanpa login
router.get("/:shortCode", redirectUrlController.redirect);

// Protected routes - perlu login
router.post("/", authMiddleware, createController.create);
router.get("/", authMiddleware, getUserUrlsController.getAll);
router.delete("/:urlId", authMiddleware, deleteUrlController.delete);

export default router;