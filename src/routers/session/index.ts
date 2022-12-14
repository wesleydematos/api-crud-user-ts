import { Router } from "express";
import { createSessionController } from "../../controllers/session";

export const sessionRouter = Router();

sessionRouter.post("", createSessionController);
