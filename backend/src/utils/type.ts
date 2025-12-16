import express from 'express'

import type mongoose from 'mongoose';
export interface UserType {
  
    id: string
    name: string;
    email: string;
    password: string;

}
declare module "express-serve-static-core" {
  interface Request {
    user?: any
  }
}
export interface EquipeType {
  name: string
  description: string
  members: string[]
  creator: string
}
export interface TaskType {

  title: string,
  description: string,
  status: string,
  participants: string[]
  dataDeEntrega: Date
  isCompleted: boolean
  creator: string
  equipe: string
  funcao: {
    title: string,
    user: string
  }
}
export interface FuncaoType {
  title: string,
  task: string,
  user: string
}