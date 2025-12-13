import mongoose from "mongoose";
import { Equipe } from "../models/equipeSchema.js";
import type { EquipeType, UserType } from "../utils/type.js";
import { error } from "console";
import { User } from "../models/userModel.js";

export const criarEquipe = async ({
  name,
  description,
  members,
  creator,
}: EquipeType) => {
  try {
    if (!name || !description || !members || !creator) {
      throw new Error(
        "Título, criador e membros são necessário para gerar a equipe!"
      );
    }
    const novaEquipe = await Equipe.create({
      name,
      description,
      members,
      creator,
    });
    return novaEquipe;
  } catch (err) {
    throw err;
  }
};
//! equipes usuário
export const equipesUsuario = (user: UserType) => {
  try {
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const response = Equipe.find({ members: user });
    return response;
  } catch (err) {
    console.log(err);
  }
};
//! Deletar equipe
export const deleteEquipe = async (equipe: EquipeType) => {
  try {
    const response = await Equipe.findByIdAndDelete(equipe);
    return response;
  } catch (err) {
    throw err;
  }
};
//! Acionar membro
export const addMembro = async ({equipeId, email}: any) => {
  try {
    const userId: any = await User.findOne({email})
    const response = await Equipe.findByIdAndUpdate(
      equipeId,
      { $addToSet: { members: userId._id } },
      { new: true }
    );
    return response
  } catch (err) {
    throw err;
  }
};
