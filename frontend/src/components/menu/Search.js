import React from 'react'
import {Box, makeStyles,InputBase} from "@material-ui/core"
import {Search as SearchIcons} from "@material-ui/icons"

const useStyles = makeStyles((theme)=>({
    components:{
        backgroundColor:"#f6f6f6",
        height:43,
        display:'flex',
        alignItems:'center'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        margin:'0 13px',
        width: '130%',
      },
      searchIcon: {
        color:"#919191",
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        width:"100%"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `65px`,
        fontSize:14,
        height:15,
        transition: theme.transitions.create('width'),
        width: '100%',
      },
}))

const Search = () => {
    const classes = useStyles()
    return (
        <Box className={classes.components}>
            <Box>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcons fontSize="small" />
                    </div>
                    <InputBase
                    placeholder="Search or Start a new chat"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Box>
          </Box>
    )
}

export default Search
