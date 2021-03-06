import React,{useEffect,useContext} from 'react'

import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List} from '@material-ui/core'
import SawoLogin from 'sawo-react'
import { addUser } from '../../service/api'
import { createBrowserHistory } from 'history';
import { AccountContext } from '../../context/AccountProvider'

const style ={
    dialogPaper:{
        height:"95%",
        width:"65%",
        marginTop:"12%",
        maxHeight:"100%",
        maxWidth:"100%",
        overflow:"hidden"
    }
}

const useStyles = makeStyles({
    component:{
        display:'flex',
        justifyContent:'center'
    },
    leftComponent:{
        padding:"56px 0 56px 56px"
    },
    qrCode:{
        height:"264px",
        width:"264px",
        padding:"50px 0 0 50px"
    },
    title:{
        fontSize:"26px",
        marginBottom:"25px",
        color:"#525252",
        fontFamily:"Segoe UI",
        fontWeight:300
    },
    list:{
        "& > *":{
            fontSize:"18px",
            padding:0,
            marginTop:"15px",
            lineHeight:"28px",
            color:"#484848"
        }
    }
})

const SaLogin = ({classes}) => {
    const history = createBrowserHistory();
    const {account, setAccount} = useContext(AccountContext)
    async function sawoLoginCallback(payload) {
        
        
        let response = await addUser({
            user_id:payload.user_id,
            imageUrl:'https://cdn.onlinewebfonts.com/svg/img_275469.png',
            email:payload.identifier,
            name:payload.customFieldInputValues.Name
        })
        
        if(response.data.message === "User Already Exist"){
            setAccount({
                user_id:response.data.exist.user_id,
                imageUrl:response.data.exist.imageUrl,
                email:response.data.exist.email,
                name:response.data.exist.name
            });
        }
        else{
            setAccount({
                user_id:payload.user_id,
                imageUrl:'https://cdn.onlinewebfonts.com/svg/img_275469.png',
                email:payload.identifier,
                name:payload.customFieldInputValues.Name
            });
        }
        history.push('/')
    }
    const classname = useStyles()

    const sawoConfig = {
        onSuccess: sawoLoginCallback, //required,
        identifierType: 'email', //required, must be one of: 'email', 'phone_number_sms',
        apiKey: 'd7e4ff49-dd6c-4d6b-ad40-c5384d31d028', // required, get it from sawo dev.sawolabs.com,
        containerHeight: '500px', // the login container height, default is 230px
    }

    return (
        <Dialog open={true} classes={{paper:classes.dialogPaper}} BackdropProps={{style:{backgroundColor:"unset"}}}>
            <Box className={classname.component}>
            <div id="login-container">
                <h1 className="title" style={{textAlign:"center"}}>SAWO Login</h1>
                <SawoLogin config={sawoConfig}/>
            </div> 
            </Box>
        </Dialog>
        
    )
}

export default withStyles(style)(SaLogin)
