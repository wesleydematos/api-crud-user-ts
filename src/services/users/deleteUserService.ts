import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    return [404, { message: "User not found" }];
  }

  if (!user?.isActive) {
    return [400, { message: "User not found" }];
  }

  await userRepository.update(id, { isActive: false });
  return [204, {}];
};
