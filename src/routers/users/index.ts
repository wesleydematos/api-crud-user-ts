import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../../controllers/users";
import { ensureAuthMiddleWare } from "../../middlewares/users/ensureAuthMiddleware";
import { ensureRequesterIsAdmMiddleware } from "../../middlewares/users/ensureRequesterIsAdmMiddleware";

export const userRouters = Router();

userRouters.post("", createUserController);
userRouters.get(
  "",
  ensureAuthMiddleWare,
  ensureRequesterIsAdmMiddleware,
  listUsersController
);
