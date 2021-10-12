import { Box, makeStyles, Typography, Input, withStyles, TextField, Button } from '@material-ui/core'
import React,{useContext,useEffect,useState,useRef} from 'react'
import { AccountContext } from '../../context/AccountProvider'
import CreateIcon from '@material-ui/icons/Create';
import { changeName, updateProfilePic } from '../../service/api';
import CheckIcon from '@material-ui/icons/Check';


const style ={
    inputField:{
        margin:"0px!important"
    }
}

const useStyles = makeStyles({
    imageContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    displayPicture:{
        borderRadius:"50%",
        width:150,
        height:150,
        padding:"18px 0px"
    },
    nameContainer:{
        backgroundColor:"#FFF",
        padding:"12px 30px 2px",
        boxShadow:"0 1px 3px rgba(0,0,0,0.08)",
        "& :first-child":{
            fontSize:14,
            color:"#009688",
        },
        '& :last-child':{
            color:"#4a4a4a",
            margin:"14px 0px"
        }
    },
    description:{
        padding:"10px 20px 28px 30px",
        "& > * ":{
            fontSize:12,
            color:"rgba(0,0,0,0.45)"
        }
    },
    nameInput:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0px"
    }
})

const Profile = ({classes}) => {
    const inputRef  = useRef()
    const {account,setAccount} = useContext(AccountContext)
    const [name, setname] = useState("")
    const [active, setActive] = useState(true)
    const classname = useStyles()
    const [image, setImage] = useState("")


    useEffect(() => {
        setname(account.name)
    }, [])

    useEffect(()=>{
        if(active==false){
            inputRef.current.focus()
        }
            
    },[active])

    const makeInputActive = () =>{
        setActive(false)
    }

    const makeNameChange = () =>{
        setActive(true)
        sendRequest()
    }

    const checkInput = (e) => {
        let code = e.keyCode || e.which

        if(code === 13){
            sendRequest()
            inputRef.current.blur()
        }
    }

    const updatePic = () => {
        if(image){
            const data = new FormData()
            data.append('file',image)
            data.append('upload_preset',"insta-clone")
            data.append("cloud_name","instagram-clone31")
            
            fetch("https://api.cloudinary.com/v1_1/instagram-clone31/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json())
            .then((data)=>{
                const sendRequest = async (data) =>{
                    let obj = {
                        userId:account.user_id,
                        pic:data.url
                    }
                    let response = await updateProfilePic(obj);
                    console.log(response)
                    setAccount(prevState=>{
                        return{
                            ...prevState,
                            imageUrl:data.url
                        }
                    })
                }
                sendRequest(data)
               
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }


    const sendRequest = async () =>{
        const data = {userId:account.user_id,name}
        let response = await changeName(data)
        console.log(response)
        setAccount(prevState=>{
            return{
                ...prevState,
                name:name
            }
        })
    }

    return (
        <>
        <Box className={classname.imageContainer}>
            <img src={account.imageUrl} alt="dp" className={classname.displayPicture}/>
            
        </Box>
        <Box className={classname.imageContainer} >
            <TextField id="standard-basic" variant="standard" type="file" classes={{input:classes.inputField}} onChange={(e)=>setImage(e.target.files[0])}/>
            <CheckIcon onClick={updatePic}/>
        </Box>
        <Box className={classname.nameContainer}>
            <Typography>Your name</Typography>
            <Box className={classname.nameInput} style={{margin:"0px"}}>
                <Input value={name}  classes={{input:classes.inputField}} disabled={active} onChange={(e)=>setname(e.target.value)}  onKeyPress={(e)=>checkInput(e)} onBlur={makeNameChange} inputRef={inputRef}/>
                <CreateIcon onClick={makeInputActive}/>
            </Box>
        </Box>
        <Box className={classname.description}>
            <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts</Typography>
        </Box>
        <Box className={classname.nameContainer}>
            <Typography>About</Typography>
            <Typography>I am Availabe on whatsapp!!!</Typography>
        </Box>
        </>
    )
}

export default withStyles(style)(Profile)
