import { Router } from "express";
import { createUserController } from "../../controllers/users";

export const userRouters = Router();

userRouters.post("", createUserController);
