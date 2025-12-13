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