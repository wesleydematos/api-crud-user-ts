import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserUpdate } from "../../interfaces/users";

export const updateUserService = async (id: string, body: IUserUpdate) => {
  const bodyKeys = Object.keys(body);

  if (
    bodyKeys.includes("isAdm") ||
    bodyKeys.includes("isActive") ||
    bodyKeys.includes("id")
  ) {
    return [401, { message: "Can`t update those fields" }];
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    return [404, { message: "User don't exists" }];
  }
  //adicionar hash na senha
  userRepository.update(user.id, { ...body });

  const { password, ...userWoP } = user;

  return [200, userWoP];
};
