import mongoose from "mongoose";

export const EquipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
      members: {
        type: [mongoose.Types.ObjectId],
        ref: 'User'
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    task: {
        type: Array
    }
}, {timestamps: true})
export const Equipe = mongoose.model('Equipe', EquipeSchema)