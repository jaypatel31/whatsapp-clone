import React,{useContext} from 'react'
import {AppBar, Toolbar, makeStyles, Box} from "@material-ui/core"

import Login from './account/Login'
import { AccountContext } from '../context/AccountProvider'
import ChatBox from './ChatBox'

const useStyles = makeStyles({
    loginHeader:{
        height:"200px",
        background:"#128c7e",
        boxShadow:"none"
    },
    header:{
        height:"115px",
        background:"#128c7e",
        boxShadow:"none"
    },
    component:{
        background:"#DCDCDC",
        height:"100vh"
    }
})

const Messenger = () => {

    const classes = useStyles()
    const {account} = useContext(AccountContext)

    return (
        <Box className={classes.component}>
            <AppBar className={account?classes.header:classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>
            {
                (account)?<ChatBox/>:<Login/>
            }
            
        </Box>
    )
}

export default Messenger
