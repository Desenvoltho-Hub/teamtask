import { User } from "../models/userModel.js";
import type { UserType } from "../utils/type.js";
import { hashPass } from "./hashPass.js";
//!<createUser>
export const createUser = async (data: UserType) => {
  if (!data.name || !data.email || !data.password) {
    throw new Error("Nome, email e senha são campos obrigatórios!");
  }

  const email = data.email;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("Email já cadastrado!");
    }
    const pass = await hashPass(data.password);
    const newUser = await User.create({
      name: data.name,
      email: data.email,
      password: pass,
    });
    return newUser;
  } catch (err) {
    throw err;
  }
};
