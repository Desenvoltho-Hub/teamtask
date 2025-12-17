import mongoose from "mongoose";

export const FuncaoSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    task: {
        type: mongoose.Types.ObjectId,
        ref: "Task"
    }

}, {timestamps: true})
export const Funcao = mongoose.model('Funcao', FuncaoSchema)