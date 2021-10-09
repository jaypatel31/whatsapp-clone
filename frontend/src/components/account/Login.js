import React,{useState, useContext,Button} from 'react'
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List} from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { AccountContext } from '../../context/AccountProvider'
import { clientId } from '../../constants/Data'
import { addUser } from '../../service/api'
import {Link} from "react-router-dom"
import { Autorenew } from '@material-ui/icons'

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
        display:'flex'
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
    },
    button:{
        padding:"8px",
        border:"2px solid black",
        color:"white",
        textAlign:"center",
        background:"#128c7e",
        textDecoration:'none',
        margin:"auto",
        boxShadow:"0px 2px 8px rgba(0,0,0,0.6)"
    }
})

const Login = ({classes}) => {

    const {account, setAccount} = useContext(AccountContext)

    const classname = useStyles()
    const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"

    const onLoginSuccess = async (res) => {
        
        
        let response = await addUser({
            user_id:res.profileObj.googleId,
            imageUrl:res.profileObj.imageUrl,
            email:res.profileObj.email,
            name:res.profileObj.name
        })
        console.log(response.data)
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
                user_id:res.profileObj.googleId,
                imageUrl:res.profileObj.imageUrl,
                email:res.profileObj.email,
                name:res.profileObj.name
            });
        }
        
    }
    
    const onLoginFailure = () => {
        console.log("Error")
    }

    return (
        <Dialog open={true} classes={{paper:classes.dialogPaper}} BackdropProps={{style:{backgroundColor:"unset"}}}>
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use Whatsapp on your computer</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whastapp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Setting and Select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position:"relative"}}>
                    <img src={qrurl} alt="qr" className={classname.qrCode}/>
                    <Box style={{position:"absolute",left:"50%",top:"50%"}}>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText=""
                            isSignedIn={true}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Box>
            </Box>
            <Box style={{textAlign:"center"}}>
                <Link to={"/sawo-auth"} className={classname.button}>Login with SAWO</Link>
                
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login)
