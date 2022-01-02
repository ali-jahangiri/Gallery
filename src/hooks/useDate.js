import dayjs from "dayjs";
import { makeLeanDate, _date } from "../utils";
import useAppContext from "./useAppContext"

const useDate = () => {
    const { getContext : { lang } } = useAppContext();

    const DATE_FORMAT = "YYYY/MM/DD";


    return date => {
        if(lang === "fa") {
            return _date(makeLeanDate(date)).format(DATE_FORMAT);
        }else return dayjs(makeLeanDate(date)).format(DATE_FORMAT);
    }
}



export default useDate;