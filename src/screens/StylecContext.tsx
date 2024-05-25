import { ReactNode, createContext } from "react"

const context = {
    bg:'red',
    color:'white'
}

type MyContextTypes = {
    bg: string,
    color: string
}

type StyleProviderProps = {
    children : ReactNode
}

export const MyContext = createContext<MyContextTypes>(context)

 export const StyleProvider = ({children}: StyleProviderProps) => {
return (
    <MyContext.Provider value={context}>
        {children}
    </MyContext.Provider>
)
}