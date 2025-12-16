import { Equipe } from "../models/equipeSchema.js";
import { Task } from "../models/taskSchema.js";
import { User } from "../models/userModel.js";
import type { TaskType, UserType } from "../utils/type.js";
//! Add task
export const addTask = async({data, creator}: any) => {
    try {
        if(!data){
            throw new Error('Dados inválidos')
        }
       
        const response = await Task.create({
            title: data.title,
            description: data.description,
            dataDeEntrega: data.dataDeEntrega,
            status: data.status,
            isCompleted: data.isCompleted,
            equipe: data.equipe,
            creator: creator,
            participants: creator,
            funcao: {
                title: data.titleFuncao,
                user: data.user,
                
            }
         })
        return response
    } catch(err) {
        throw err
    }
}
//! Designar tarefa
export const addUserTask = async ({user, task}: any) => {
    try {
        if(!user) {
            throw new Error('Usuário não inválido ou não encontrado')
          
        }  
         const response = await User.findByIdAndUpdate(
              user,
              { $addToSet: { task: task.id } },
              { new: true }
            );
            return response
    } catch(err){
        throw err
    }
}
//! Task get 
export const taskGet = async (user: string) => {
    
    try {
        if(!user) {
            throw new Error('Usuário inválido')
        }
        const response = Task.find({participants: user})
        return response

    } catch(err) {

    }
}
//! Nome da equipe
export const equipeName = async (equipe: string) => {
    try {
        const response = await Equipe.findById(equipe).populate("members", "name")
        return response
    } catch(err){
        throw err
    }
}