import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    particpants: {
        members: [mongoose.Types.ObjectId],
        ref: 'User'
    },
    isCompleted: {
        type: Boolean,
        required: true
    }, 
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})
export default mongoose.model('Task', TaskSchema)