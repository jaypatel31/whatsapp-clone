import React,{createContext} from 'react'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

export const TemplateContext = createContext(null)

const TemplateProvider = ({children}) => {

    const theme  = createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    height:"95%",
                    top:"16px",
                    width:"30%",
                    left:"58px",
                    boxShadow:"none",
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }
    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
