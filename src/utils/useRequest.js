import axios from "axios";
import useAppContext from "../hooks/useAppContext";

const useRequest = () => {
    const { getContext : { lang } } = useAppContext();
    return path => {
        return axios.post(`https://fahimehheydari.com/${path}`).then(res => res.data.Data)
    }
}


export default useRequest;