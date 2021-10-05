import React from 'react'
import { Box, InputBase, makeStyles } from '@material-ui/core'
import {EmojiEmotionsOutlined, AttachFile, Mic} from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    footer:{
        height:'52px',
        background:"#ededed",
        width:"100%",
        display:"flex",
        alignItems:"center",
        padding:"0 15px",
        '& > *':{
            margin:"5px",
            color:"#919191",
        }
    },
    clipicons:{
        transform:"rotate(40deg)"
    },
    inputRoot: {
        width:"100%"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `25px`,
        fontSize:14,
        width: '100%',
        height:20
      },
      searchbox:{
          background:"#ffffff",
          borderRadius:18,
          width:"calc(95% - 100px)"
      }
}))

const Footer = ({sendText,setValue,value}) => {

    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <EmojiEmotionsOutlined/>
            <AttachFile className={classes.clipicons}/>
            <Box className={classes.searchbox}>
                <InputBase
                    placeholder="Type a Message"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyPress={(e)=>sendText(e)}
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                />
            </Box>
            
            <Mic/>
        </Box>
    )
}

export default Footer
