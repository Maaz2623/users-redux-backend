import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    likeCount: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('User', userSchema)