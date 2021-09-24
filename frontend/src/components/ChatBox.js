import { Box, Dialog,withStyles,makeStyles } from '@material-ui/core'
import React from 'react'

import Menu from './menu/Menu'

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
        borderLeft:"1px solid rgba(0,0,0,0.14)"
    }
})

const ChatBox = ({classes}) => {
    const classname = useStyles()
    return (
        <Dialog open={true} classes={{paper:classes.dialogPaper}} BackdropProps={{style:{backgroundColor:"unset"}}}>
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>

                <Box className={classname.rightComponent}>
                    hello
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatBox)