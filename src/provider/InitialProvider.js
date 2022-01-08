import { useEffect } from "react";
import useAppContext from "../hooks/useAppContext";

const InitialProvider = ({ children }) => {
    const { setContext } = useAppContext();
    
    useEffect(function setupPersistedUserLang() {
        const userLang = localStorage.getItem("userLang");
        if(userLang) setContext("lang" , userLang);
    } , []);


    return children;
}


export default InitialProvider;