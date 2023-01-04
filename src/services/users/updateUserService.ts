import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";

export const updateUserService = async (id: string, body: IUserUpdate) => {
  const bodyKeys = Object.keys(body);

  if (
    bodyKeys.includes("isAdm") ||
    bodyKeys.includes("isActive") ||
    bodyKeys.includes("id")
  ) {
    throw new AppError("Can`t update those fields", 401);
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User don't exists", 404);
  }

  userRepository.update(user.id, { ...body });

  const { password, ...userWoP } = user;

  return userWoP;
};
