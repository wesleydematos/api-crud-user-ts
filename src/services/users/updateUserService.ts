import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserUpdate } from "../../interfaces/users";

export const updateUserService = async (id: string, body: IUserUpdate) => {
  //verificar tambem se é adm ou si mesmo
  const bodyKeys = Object.keys(body);

  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  const isUuid = regexExp.test(id);

  if (!isUuid) {
    return [401, { message: "invalid input syntax for type uuid" }];
  }

  if (
    bodyKeys.includes("isAdm") ||
    bodyKeys.includes("isActive") ||
    bodyKeys.includes("id")
  ) {
    return [
      401,
      {
        message: "Can`t update those fields",
      },
    ];
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    return [
      404,
      { message: "should not be able to update user with invalid id" },
    ];
  }

  userRepository.update(user.id, { ...body });

  const { password, ...userWoP } = user;

  return [200, userWoP];
};
