import { Router } from "express";
import { createSessionController } from "../../controllers/users";

export const sessionRouter = Router();

sessionRouter.post("", createSessionController);
