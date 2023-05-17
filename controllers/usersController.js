import mongoose from 'mongoose'
import User from '../models/User.js'

export const createUser = async (req, res) => {
    try {
        const {name, age, likeCount} = req.body
        const user = new User({name, age, likeCount})
        const savedUser = await user.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        if(!user) throw new Error('User does not exist')
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user) throw new Error('Could not delete')
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const likeUser = async (req, res) => {
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: error.message})
        const user = await User.findById(id)
        const updatedUser = await User.findByIdAndUpdate(id, {likeCount: user.likeCount + 1}, {new: true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}