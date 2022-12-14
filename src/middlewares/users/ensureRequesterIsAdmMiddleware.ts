import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";

export const ensureRequesterIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({
    id: String(req.requesterId),
  });

  if (!foundUser?.isAdm) {
    return res.status(403).json({ message: "Missing admin permissions" });
  }

  return next();
};
