import { useEffect, useState } from "react";
import { selfClearTimeout } from "../utils";

const HomeLoadingScreen = ({ loadingFinished }) => {
    const [shouldGteDestroyed, setShouldGteDestroyed] = useState(false);

    useEffect(() => {
        if(loadingFinished) {
            selfClearTimeout(() => setShouldGteDestroyed(true) , 1800)
        }
    } , [loadingFinished])

    return !shouldGteDestroyed ? <div className={`homeLoading ${loadingFinished ? "homeLoading--getHide" : ""}`}>
        <p>Loading</p>
    </div> : null
}

export default HomeLoadingScreen;