import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
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
userRouters.patch("/:id", ensureAuthMiddleWare, updateUserController);
