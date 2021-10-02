import express from "express"

import { addUser,getUsers } from "../controller/user-controller.js"
import { setConversation } from "../controller/conversation-controller.js"

const router = express.Router()

router.post('/addUser',addUser)
router.get('/getUsers',getUsers)
router.post('/conversation',setConversation)

export default router