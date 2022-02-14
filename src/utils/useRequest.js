import { useEffect , useRef } from "react";
import axios from "axios";
import useAppContext from "../hooks/useAppContext";


const useRequest = () => {
    const { getContext : { lang } } = useAppContext();
    const isFaMode = lang === "fa";
    const isInInitialTime = useRef(true);

    useEffect(function afterInitialSetupPageRefreshHandler(){
        if(isInInitialTime.current) {
           isInInitialTime.current = false; 
        }else {
            window.location.reload();
        }
    } , [isFaMode]);
    

    return (path = "" , option = {}) => {
        return axios.post(`https://fahimehheydari.ir/${isFaMode ? "fa" : ""}/home/${path}`).then(res => res.data)
    }
}


export default useRequest;