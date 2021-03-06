import React,{useState, useContext} from 'react'
import { MoreVert } from '@material-ui/icons'
import {Menu,MenuItem, makeStyles} from "@material-ui/core"
import { GoogleLogout } from 'react-google-login'
import { clientId } from '../../constants/Data'
import { AccountContext } from '../../context/AccountProvider'
import InfoDrawer from '../drawer/InfoDrawer'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    menuItem:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:"#4a4a4a"
    },
    logout:{
        border:'none !important',
        boxShadow:"none!important",
        '& > *':{
            padding:"0px !important"
        }
    }
})

const HeaderMenu = () => {
    const history = useHistory();
    const classes = useStyles()
    const [open,setOpen] = useState(false)
    const [drawerOpen,setDrawerOpen] = useState(false)

    const {setAccount} = useContext(AccountContext)

    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const onLogoutSuccess = () =>{  
        setAccount('')
        history.push('/')
    }

    const onLogoutFailure = () =>{
        console.log("error")
    }

    return (
        <>
           <MoreVert onClick={handleClick} style={{cursor:"pointer"}}/>
           <Menu
                id="simple-menu"
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose();setDrawerOpen(true)}}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        onFailure={onLogoutFailure}
                        className={classes.logout}
                    >
                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <InfoDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
        </>
    )
}

export default HeaderMenu
