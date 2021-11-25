import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DesktopHome from "../components/DesktopHome";
import MobileHome from "../components/MobileHome";
import HomeLoadingScreen from "../components/HomeLoadingScreen";
import useRequest from "../utils/useRequest";

const model = [
    {
        title : "VIoew lore",
        shortDescription : "dolore-corrupti-sint",
        desc : "Vero quae placeat omnis sed. Impedit amet temporibus aut fugiat et. Illo voluptatem atque cum nam. Provident soluta ipsa enim inventore occaecati placeat quia. Ipsum recusandae dolore fugit eos aut. Et in sed enim iusto dicta assumenda.",
        imageList : ['https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80' , "https://images.unsplash.com/photo-1588260835465-6a819eff1455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80" , "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"],
        id : Math.random()
    },
    {
        title : "VIoew loreOthr test",
        shortDescription : "dolore-corrupti-sint",
        desc : "Vero quae placeat omnis sed. Impedit amet temporibus aut fugiat et. Illo voluptatem atque cum nam. Provident soluta ipsa enim inventore occaecati placeat quia. Ipsum recusandae dolore fugit eos aut. Et in sed enim iusto dicta assumenda.",
        imageList : ['https://images.unsplash.com/photo-1637152740336-da2baefdbf2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80' , "https://images.unsplash.com/photo-1636926587706-6ef4bf952e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1412&q=80" , "https://images.unsplash.com/photo-1598476217250-9c08fb122fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"],
        id : Math.random()
    },
]

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