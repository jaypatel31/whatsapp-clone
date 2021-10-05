import express from "express"

import { addUser,getUsers } from "../controller/user-controller.js"
import { setConversation,getConversation } from "../controller/conversation-controller.js"
import { newMessage } from "../controller/message-controller.js"

const router = express.Router()

router.post('/addUser',addUser)
router.get('/getUsers',getUsers)
router.post('/conversation',setConversation)
router.post('/conversation/get',getConversation)
router.post('/message/add',newMessage)

export default router