import React,{useContext,useEffect} from 'react'
import {AppBar, Toolbar, makeStyles, Box} from "@material-ui/core"
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from 'history';

import Login from './account/Login'
import SaLogin from './account/SaLogin';
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
        const history = createBrowserHistory();

   
    const classes = useStyles()
    const {account} = useContext(AccountContext)

    return (
        
            <Box className={classes.component}>
                <AppBar className={account?classes.header:classes.loginHeader}>
                    <Toolbar></Toolbar>
                </AppBar>
                {
                    (account)?<ChatBox/>:<Router history={history}><Route exact={true} path="/" component={Login} /><Route exact={true} path="/sawo-auth" component={SaLogin} /></Router>
                }
                
            </Box>
        
    )
}

export default Messenger
