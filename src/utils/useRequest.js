import axios from "axios";
import useAppContext from "../hooks/useAppContext";

const useRequest = () => {
    const { getContext : { lang } } = useAppContext();
    return (path = "" , option = {}) => {
        return axios.post(`https://fahimehheydari.ir/home/${path}`).then(res => res.data)
    }
}


export default useRequest;