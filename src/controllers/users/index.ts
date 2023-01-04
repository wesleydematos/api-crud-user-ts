import { Request, Response } from "express";
import createUserService from "../../services/users/createUserService";
import { IUserRequest } from "../../interfaces/users";
import { listUsersService } from "../../services/users/listUsersService";
import { updateUserService } from "../../services/users/updateUserService";
import { deleteUserService } from "../../services/users/deleteUserService";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const data = await createUserService(userData);

  return res.status(201).json(data);
};

const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();

  return res.json(data);
};

const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.params.id, req.body);
  return res.json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const data = await deleteUserService(req.params.id);
  return res.status(204).json(data);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
