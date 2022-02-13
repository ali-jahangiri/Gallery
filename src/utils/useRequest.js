import axios from "axios";
import useAppContext from "../hooks/useAppContext";

const useRequest = () => {
    const { getContext : { lang } } = useAppContext();
    const isFaMode = lang === "fa";


    return (path = "" , option = {}) => {
        return axios.post(`https://fahimehheydari.ir/home/${path}`).then(res => res.data)
    }
}


export default useRequest;