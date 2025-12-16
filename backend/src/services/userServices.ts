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
//! Get
export const userGetMe = async (user: UserType) => {
  try {
    const usuario = User.findById(user.id)
    return usuario
  } catch(err){
    throw err
  }
}
//! Login
export const login = async (user: UserType) => {
  if(!user.email || !user.password) {
    throw new Error('Email e password são obrigatórios')
  }
  const email = user.email
  const userExist =  User.findOne({email})
  if(!userExist) {
    throw new Error('Usuário não cadastrado')
  }
  return userExist
}
//! Task
export const task = async({userId, funcao, task}: any) => {
  if(!userId || !funcao) {
    throw new Error('O usuário e função são obrigatórios')
  }
  const response = await User.findByIdAndUpdate(userId, {
    $addToSet: {task: {task, funcao}}
  }, {new: true})
  return response  

}