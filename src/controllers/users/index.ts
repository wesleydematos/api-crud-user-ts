import { Request, Response } from "express";
import createUserService from "../../services/users/createUserService";
import { IUserRequest } from "../../interfaces/users";
import { listUsersService } from "../../services/users/listUsersService";
import { updateUserService } from "../../services/users/updateUserService";
import { deleteUserService } from "../../services/users/deleteUserService";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const [status, data] = await createUserService(userData);

  return res.status(Number(status)).json(data);
};

const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();

  return res.json(data);
};

const updateUserController = async (req: Request, res: Response) => {
  const [status, data] = await updateUserService(req.params.id, req.body);
  return res.status(Number(status)).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const [status, data] = await deleteUserService(req.params.id);
  return res.status(Number(status)).json(data);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
