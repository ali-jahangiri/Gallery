import { useLayoutEffect, useState } from "react";
import Portal from "../provider/Portal";

const HelperCursor = () => {
    const [currentCursorPos, setCurrentCursorPos] = useState({ x : 0 , y : 0 });

    useLayoutEffect(() => {
        document.addEventListener("mousemove" , e => {
            setCurrentCursorPos({ x : e.clientX , y : e.clientY });
        })
    } , [])

    return (
        <Portal>
            <div className="helperCursor" style={{ left : currentCursorPos.x , top : currentCursorPos.y }}></div>
        </Portal>
    )
}


export default HelperCursor;;