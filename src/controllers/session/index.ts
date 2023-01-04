import { Request, Response } from "express";
import { createSessionService } from "../../services/session/createSessionService";

export const createSessionController = async (req: Request, res: Response) => {
  const data = await createSessionService(req.body);
  return res.json(data);
};
