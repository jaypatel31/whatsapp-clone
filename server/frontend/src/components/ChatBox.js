import { Box, Dialog,withStyles,makeStyles } from '@material-ui/core'
import React,{useContext} from 'react'

import Menu from './menu/Menu'
import Chat from './chat/Chat'
import { UserContext } from '../constants/UserProvider'
import EmptyChat from './chat/EmptyChat'

const style ={
    dialogPaper:{
        height:"95%",
        width:"91%",
        maxHeight:"100%",
        maxWidth:"100%",
        overflow:"hidden"
    }
}

const useStyles = makeStyles({
    component:{
        display:"flex"
    },
    leftComponent:{
        minWidth:"380px"
    },
    rightComponent:{
        borderLeft:"1px solid rgba(0,0,0,0.14)",
        width:"70%",
        minWidth:"300px",
        height:"100%"
    }
})

const ChatBox = ({classes}) => {

    const {person} = useContext(UserContext)

    const classname = useStyles()
    return (
        <Dialog open={true} classes={{paper:classes.dialogPaper}} BackdropProps={{style:{backgroundColor:"unset"}}}>
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>

                <Box className={classname.rightComponent}>
                    {
                        Object.keys(person).length ? <Chat/> : <EmptyChat/>
                    }
                    
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatBox)