import type { NextFunction, Request, Response } from "express";
import { Equipe } from "../models/equipeSchema.js";
import type { EquipeType } from "../utils/type.js";
import { User } from "../models/userModel.js";

export const verifyCreator = async (req:Request, res:Response, next: NextFunction) => {
        const user = req.user.id
        
        const equipeId = req.params.id
        const  equipe: any = await Equipe.findById(equipeId)
        const userId: any = await User.findById(user)
        if(!equipe.creator.equals(userId._id)) {
            res.status(401).json({message: 'Acesso não autorizado!'})
        }
        next()
        

}