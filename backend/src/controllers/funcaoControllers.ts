import type { Request, Response } from "express"
import { Funcao } from "../models/funcaoSchema.js"
import { funcaoCreate } from "../services/funcaoServices.js"

//! Get funcao por task
export const getFuncao = async (req: Request, res: Response) => {
    try {
    } catch(err) {
        res.status(400).json({err})
    }
}
//! Criar função
export const criarFuncao = async (req:Request, res: Response) => {
    try {
        const title = req.body.title
        const task: any = req.params.task
        const user: any = req.params.user 
        const response = funcaoCreate({title, task, user})
        console.log(user)
        res.status(201).json({message: "Função criada com sucesso!", response})
    } catch(err){
        res.status(400).json({err})
    }
}