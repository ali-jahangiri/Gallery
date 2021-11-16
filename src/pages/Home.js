import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import DesktopHome from "../components/DesktopHome";
import GalleryBox from "../components/GalleryBox";
import HelperCursor from "../components/HelperCursor";
import MobileHome from "../components/MobileHome";
import Portal from "../provider/Portal";
import { debounce } from "../utils";

const Home = () => {
    const [currentBodyPos, setCurrentBodyPos] = useState(0);
    const [isInMobile, setIsInMobile] = useState(false);
    const [currenetCusrsorPos, setCurrentCursorPos] = useState({ x : 0 , y : 0 })

    const model = [
        {
            title : "VIoew lore",
            shortDescription : "dolore-corrupti-sint",
            desc : "Vero quae placeat omnis sed. Impedit amet temporibus aut fugiat et. Illo voluptatem atque cum nam. Provident soluta ipsa enim inventore occaecati placeat quia. Ipsum recusandae dolore fugit eos aut. Et in sed enim iusto dicta assumenda.",
            imageList : ['https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80' , "https://images.unsplash.com/photo-1588260835465-6a819eff1455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80" , "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"]
        }
    ]

    useLayoutEffect(() => {
        document.addEventListener("scroll" , () => {
            const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setCurrentBodyPos(scrollTop);
        })
    } , [])

    const cursor = useRef();

    const mouseMoveHandler = e => {
        if(!isInMobile) {
            cursor.current.style.left = `${e.clientX - 24}px`;
            cursor.current.style.top = `${e.clientY - 24}px`;
        }
    }

    const [isInHoverOfSomeGalleryItem, setIsInHoverOfSomeGalleryItem] = useState(false);


    useEffect(function detectMobileResolution() {
        const currentBodyWidth = window.innerWidth;
        if(currentBodyWidth <= 552) {
            setIsInMobile(true)
        }
    } , []);

    return (
        <div onMouseMove={mouseMoveHandler} className={`container-fluid home ${isInMobile ? "home--mobile" : ""}`}>
            {
                isInMobile ? <MobileHome model={model} /> : <DesktopHome cursorRef={cursor} currentBodyPos={currentBodyPos} setIsInHoverOfSomeGalleryItem={setIsInHoverOfSomeGalleryItem} model={model} isInHoverOfSomeGalleryItem={isInHoverOfSomeGalleryItem} currenetCusrsorPos={currenetCusrsorPos} />
            }  
        </div>
    )
}


export default Home;