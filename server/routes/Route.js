import express from "express"

import { addUser,getUsers,nameChange } from "../controller/user-controller.js"
import { setConversation,getConversation } from "../controller/conversation-controller.js"
import { newMessage, getMessages } from "../controller/message-controller.js"

const router = express.Router()

router.post('/addUser',addUser)
router.post('/user/nameChange',nameChange)
router.get('/getUsers',getUsers)
router.post('/conversation',setConversation)
router.post('/conversation/get',getConversation)
router.post('/message/add',newMessage)
router.get('/message/get/:id',getMessages)

export default router