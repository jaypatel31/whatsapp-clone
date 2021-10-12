import React,{useState} from 'react'

import Search from './Search'
import Header from './Header'
import Conversation from './Conversation'

const Menu = () => {

    const [input, setInput] = useState("")

    return (
        <>
            <Header/>
            <Search setInput={setInput}/>
            <Conversation input={input}/> 
        </>
    )
}

export default Menu
