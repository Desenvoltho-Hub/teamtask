import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    participants: {
        type: [mongoose.Types.ObjectId],
        ref: 'User'
    },
    status: {
        type: String,
        required: true
    }, 
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dataDeEntrega: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    },
    equipe: {
        type: mongoose.Types.ObjectId,
        ref: 'Equipe'
    }
}, {timestamps: true})
export const Task = mongoose.model('Task', TaskSchema)