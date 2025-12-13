import type { Request, Response } from "express";
import { addMembro, criarEquipe, deleteEquipe, equipesUsuario } from "../services/equipeServices.js";
import type { EquipeType } from "../utils/type.js";

export const equipeCreate = async(req:Request, res:Response) => {
    try {
        console.log(req.body)
        const name: string = req.body.name
        const description: string = req.body.description
        const members: string[] = req.user.id
        const creator: string= req.user.id
        const response = await criarEquipe({name, creator, description, members})
        res.status(201).json({message: "Equipe criada com sucesso!"})
    } catch(err: any) {
        res.status(400).json({message: err.message})
    }

}
//! Get equipes usuário
export const getEquipesUsuario = async (req: Request, res:Response) => {
    try {
        const user = req.user.id
        
        if(!user){
            throw new Error ('Usuário não encontrado.')
        }
        const response = await equipesUsuario(user)
        res.status(200).json({response})
    } catch(err) {
        res.status(400).json({message: "ERRO"})
    }
}
//! Deletar equipe
export const deletarEquipe = async (req: Request, res: Response) => {
    try {
        const equipe: any = req.params.id
        const response = await deleteEquipe(equipe)
        res.status(202).json({})
    } catch(err) {
        res.status(400).json({message: err})
    }
}
export const adicionarMembro = async(req: Request, res: Response) => {
    try {
        const email = req.body.email
        const equipeId = req.params.id
        
        const response = await addMembro({equipeId, email})
        res.status(200).json({message: 'Usuário acrescentado ao grupo!', response})
    } catch(err) {
        res.status(400).json({message: err})
    }
}