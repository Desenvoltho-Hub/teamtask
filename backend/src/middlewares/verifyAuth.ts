import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { env } from "../config/env.js";

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['authCookie'];
   
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }
    
    if (!env.JWT_SECRET) {
        return res.status(500).json({ message: "Erro interno na validação" });
    }

    jwt.verify(token, env.JWT_SECRET, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido ou expirado" });
        }

        req.user = user; 

        return next(); 
    });
};
