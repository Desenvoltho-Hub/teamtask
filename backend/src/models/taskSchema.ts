import mongoose from "mongoose";
import { User } from "./userModel.js";
import { FuncaoSchema } from "./funcaoSchema.js";
import { type TaskType } from "../utils/type.js";

export const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    participants: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',

    }],
    status: {
        type: String,
        required: true,
        enum: ["pendente", "em andamento", "completo"],
        default: "pendente"
    }, 
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dataDeEntrega: {
        type: Date,
        required: true
    },
    equipe: {
        type: mongoose.Types.ObjectId,
        ref: 'Equipe'
    },
    funcao: [FuncaoSchema]
  
}, {timestamps: true})
export const Task = mongoose.model<TaskType>('Task', TaskSchema)