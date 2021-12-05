import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DesktopHome from "../components/DesktopHome";
import MobileHome from "../components/MobileHome";
import HomeLoadingScreen from "../components/HomeLoadingScreen";
import useRequest from "../utils/useRequest";


const Home = () => {
    const [currentBodyPos, setCurrentBodyPos] = useState(0);
    const [isInMobile, setIsInMobile] = useState(false);
    const [isInHoverOfSomeGalleryItem, setIsInHoverOfSomeGalleryItem] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const reqHandler = useRequest()

    const cursor = useRef();

    useLayoutEffect(() => {
        document.addEventListener("scroll" , () => {
            const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setCurrentBodyPos(scrollTop);
        })
    } , [])


    const mouseMoveHandler = e => {
        if(!isInMobile) {
            cursor.current.style.left = `${e.clientX - 24}px`;
            cursor.current.style.top = `${e.clientY - 24}px`;
        }
    }

    useEffect(function detectMobileResolution() {
        const currentBodyWidth = window.innerWidth;
        if(currentBodyWidth <= 552) setIsInMobile(true);
    } , []);

    useEffect(() => {
        reqHandler('home/index')
            .then(data => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
    } , []);
    
    return (
        <>
            <HomeLoadingScreen loadingFinished={!loading} />
            {
                !loading && <div onMouseMove={mouseMoveHandler} className={`container-fluid home ${isInMobile ? "home--mobile" : ""}`}>
                    {
                        isInMobile 
                            ? <MobileHome model={data} /> 
                            : <DesktopHome 
                                cursorRef={cursor} 
                                currentBodyPos={currentBodyPos} 
                                setIsInHoverOfSomeGalleryItem={setIsInHoverOfSomeGalleryItem} 
                                model={data} 
                                isInHoverOfSomeGalleryItem={isInHoverOfSomeGalleryItem} 
                            />
                    }  
                </div>
            }
            
        </>
    )
}


export default Home;