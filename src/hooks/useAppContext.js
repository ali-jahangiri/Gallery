import { useContext } from "react";

import { AppContextInstance } from "../provider/AppContextProvider";

const useAppContext = () => {
    const { getContext , setContext } = useContext(AppContextInstance);

    return {
        getContext,
        setContext
    }
}


export default useAppContext;