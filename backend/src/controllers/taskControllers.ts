import type { Request, Response } from "express";
import { addTask, addUserTask, equipeName, taskGet} from "../services/taskServices.js";
import { luvaBackEng } from "../luvaBackEng/luvaBackEng.js";
import type { TaskType } from "../utils/type.js";

//! Criar Task
export const criarTask = async (req: Request, res: Response) => {
    try {
        const data: any = req.body
        const userId: any = req.user
        const creator = userId.id
        console.log(creator)
        const response = await addTask({data, creator})
        res.status(201).json({message: 'Task criada com sucesso!', response}) 
    } catch(err) {
     res.status(400).json({message: err})   
    }
}
//! Task Add User

export const taskUser = async (req: Request, res: Response) => {
    try {
        const user = req.params.user
        const task = req.params.task
        const response = await addUserTask({user, task})
        res.status(200).json({message: 'Usuário adicionado a task com sucesso!'})
    } catch(err) {
        console.log(err)
    }
}

//! Task Get 
export const getTask = async (req: Request, res: Response) => {
    try {
        const user = req.user.id
        
        const response: any = await taskGet(user)

        res.status(200).json({message: 'Tarefas do usuário encontradas com sucesso!', response})
    } catch(err) {
        res.status(400).json({err})
    }
}
//! Prazo inteligente
export const prazoInteligente = (req: Request, res: Response) => {
    try {
        const task = req.params.data
        const prazo = luvaBackEng("PRAZO", task)
        const response = prazo.get()
        res.status(200).json({response})
    } catch(err){
        res.status(400).json({err})
    }
}
//! Nome da equipe
export const nomeDaEquipe = async (req: Request, res: Response) => {
    try {
        const equipe: any = req.params.equipe
        const response = await equipeName(equipe)
        res.status(200).json({response})
    } catch(err) {
        res.status(400).json({err})
    }
}
//! Designar funcao
export const designarFuncao = async (req: Request, res: Response) => {
    try {
       
        const funcao = req.body.funcao
    } catch(err) {
        res.status(400).json({err})
    }
}