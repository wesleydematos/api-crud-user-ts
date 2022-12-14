import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createSessionService = async ({ email, password }: IUserLogin) => {
  if (!email) {
    return [400, { message: "Email is required!" }];
  }
  if (!password) {
    return [400, { message: "Password is required!" }];
  }

  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({ email: email });

  if (!foundUser) {
    return [403, { message: "User or password invalid!" }];
  }

  const passwordMatch = await compare(password, foundUser.password);

  if (!passwordMatch) {
    return [403, { message: "User or password invalid!" }];
  }

  const token = jwt.sign({ foundUser: foundUser }, process.env.SECRET_KEY!, {
    subject: String(foundUser.id),
    expiresIn: "24h",
  });

  return [200, { token: token }];
};
