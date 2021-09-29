import React,{useEffect, useState, useContext} from 'react'
import { getUsers } from '../../service/api'
import {Box,makeStyles} from "@material-ui/core"

import {AccountContext} from "../../context/AccountProvider"
import Coversation from './Coversation'

const useStyles = makeStyles({
    component:{
        height:'81vh',
        overflow:'overlay'
    }
})

const Conversation = ({input}) => {
    const [users, setUsers] = useState([])

    const {account} = useContext(AccountContext)

    const classes = useStyles()

    useEffect(() => {
        const fetchData = async () =>{
            const data = await getUsers()
            console.log(data)
            setUsers(data)
        }

        fetchData()
    }, [])

    return (
        <Box className={classes.component}>
            {
                users?users.map((user,index)=>{
                    if(account.user_id != user.user_id){
                        return(
                                user.name.indexOf(input)>-1?<Coversation user={user} key={index}/>:""
                        )
                    }
                    
                }):"Loading..."
            }
        </Box>
    )
}

export default Conversation
