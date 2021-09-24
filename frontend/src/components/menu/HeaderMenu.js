import React,{useState, useContext} from 'react'
import { MoreVert } from '@material-ui/icons'
import {Menu,MenuItem} from "@material-ui/core"
import { GoogleLogout } from 'react-google-login'
import { clientId } from '../../constants/Data'
import { AccountContext } from '../../context/AccountProvider'

const HeaderMenu = () => {
    const [open,setOpen] = useState(false)

    const {setAccount} = useContext(AccountContext)

    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const onLogoutSuccess = () =>{  
        setAccount('')
        alert('You have been logged out succedfully!!')
        console.clear()
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        onFailure={onLogoutFailure}
                    >
                    </GoogleLogout>
                </MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu
