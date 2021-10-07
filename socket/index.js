import { Server } from "socket.io";

const PORT = 9000

const io = new Server(PORT,{
    cors:{
        origin:"*"
    }
})

let users = [];

const addUser = (userId,socketId) =>{
    !users.some(user=>user.userId === userId) && users.push({userId,socketId})
}

const getUser = (userId) =>{
    return users.find(user=>user.userId === userId)
}

const removeUser = (socketId) => {
    users = users.filter(user=>user.socketId !== socketId)
}

io.on('connection',(socket)=>{
    console.log('User Connected');

    socket.on('addUser',userId=>{
        addUser(userId,socket.id)
        console.log(users)
        io.emit('getUsers',users)
    })


    //
    socket.on('sendMessage',({senderId,receiverId,text})=>{
        const user = getUser(receiverId)
        if(user){
            io.to(user.socketId).emit('getMessage',{
                senderId,text
            })
        }
        
    })

    //
    socket.on('disconnect',()=>{
        console.log('User DisConnected')
        removeUser(socket.id)
        io.emit('getUsers',users)
    })

})