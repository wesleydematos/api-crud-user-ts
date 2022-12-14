import { Request, Response } from "express";
import { createSessionService } from "../../services/session/createSessionService";

export const createSessionController = async (req: Request, res: Response) => {
  const [status, data] = await createSessionService(req.body);
  return res.status(Number(status)).json(data);
};
