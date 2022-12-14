import { Request, Response } from "express";
import createUserService from "../../services/users/createUserService";
import { IUserRequest } from "../../interfaces/users";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const [status, data] = await createUserService(userData);

  return res.status(Number(status)).json(data);
};

export { createUserController };
