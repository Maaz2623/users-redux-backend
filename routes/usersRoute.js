import express from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, likeUser } from '../controllers/usersController.js'

const router = express.Router()

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.patch('/like/:id', likeUser)

export default router
