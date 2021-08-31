import { createContext, useState } from "react";

export const AppContextInstance = createContext()

const defaultContext = {
    lang : "fa",
}

const AppContextProvider = ({ children , context = defaultContext }) => {
    const [contextState, setContextState] = useState(context);

    const changeContextHandler = (key , value) => {
        setContextState(prev => ({
            ...prev,
            [key] : value
        }))
    }

    return (
        <AppContextInstance.Provider value={{ getContext : contextState , setContext : changeContextHandler }}>
            {children}
        </AppContextInstance.Provider>
    )
}


export default AppContextProvider;