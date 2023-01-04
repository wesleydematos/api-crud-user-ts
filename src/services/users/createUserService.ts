import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const foundUser = await userRepository.findOneBy({ email: userData.email });

  if (!foundUser) {
    const user = userRepository.create(userData);
    await userRepository.save(user);

    const { password, ...userWoP } = user;

    return userWoP;
  }

  throw new AppError("User already exists!");
};

export default createUserService;
