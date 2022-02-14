import { useEffect } from "react";
import useAppContext from "../hooks/useAppContext";

const InitialProvider = ({ children }) => {
    const { setContext , getContext } = useAppContext();
    
    useEffect(function setupPersistedUserLang() {
        const userLang = localStorage.getItem("userLang");
        if(userLang) setContext("lang" , userLang);
    } , []);


    if(!getContext.lang) return null;
    return children;
}


export default InitialProvider;