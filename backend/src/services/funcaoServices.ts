import mongoose from "mongoose"
import { Funcao } from "../models/funcaoSchema.js"

//! Funcao por task
export const funcao = async (id: string) => {
    if(!id) {
        throw new Error('Não foi possível achar o id da task')
    }
    const response = await Funcao.find({task: id})
    return response
}
export const funcaoCreate = async ({task, title, user}: {task: string, title: string, user: string}) => {
    console.log("SERVICE AQUI", task, title, user )
    if(!task || !title || !user) {
        throw new Error('Id da task, titulo e user são necessários para criar uma função!')
    }
    const response = Funcao.create({
      task: task,
      title: title,
      user: new mongoose.Types.ObjectId(user)
    })
    return response
}