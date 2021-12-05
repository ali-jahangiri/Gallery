import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Portal from '../provider/Portal';
import { selfClearTimeout } from "../utils";

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>

const ItemColumn = ({ src , bodyScrollPos , setIsHovered , title , setOneItemSelected , desc , restModelImgs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [passedStyle, setPassedStyle] = useState({});
    const [currentScrolled, setCurrentScrolled] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const introContainerRef = useRef();
    const [isInOpening, setIsInOpening] = useState(false);
    const [currentActiveNextPostImage, setCurrentActiveNextPostImage] = useState(-1);
    const [isInIntroSectionHover, setIsInIntroSectionHover] = useState(false);
    const [forceToReRenderOnResize, setForceToReRenderOnResize] = useState(0)
    const [isInTransforming, setIsInTransforming] = useState(false);

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const containerRef = useRef();

    useLayoutEffect(() => {
        window.addEventListener("resize" , () => setForceToReRenderOnResize(Math.random()))
    } , [])


    const scrollHandler = (e) => {
        if(e.deltaY > 0) {
            if(currentScrolled !== 100) setCurrentScrolled(prev => prev + 10);
        }else {
            if(currentScrolled !== 0) {
                setCurrentScrolled(prev => prev - 10)
            }
        }
    }
    
    const portalStyle = (() => {
        if(containerRef.current) {
            const details = containerRef.current.getBoundingClientRect();
            return {
                position: "absolute",
                transition: ".9s",
                left : details.x,
                top : details.top + window.pageYOffset,
                width : 250 , 
                height: 400,
            }
        }
    })();
    
    useEffect(() => {
        if(isOpen && forceToReRenderOnResize) {
            setPassedStyle({
                left : x,
                top : y + window.pageYOffset,
                width : window.innerWidth,
                height: window.innerHeight,
                zIndex : 9999,
                transform : "translate(-50%, -50%)",
            })
        }
    } , [forceToReRenderOnResize , isOpen])

    const selectHandler = () => {
        if(!isInTransforming) {
            if(!isOpen) {
                setIsInTransforming(true);
                setIsOpen(prev => !prev);
                setOneItemSelected(true);
                setIsInOpening(true);
                
                selfClearTimeout(() => setShowDetails(true) , 1600);
                selfClearTimeout(() => {
                    setIsInTransforming(false)
                    setIsInOpening(false)
                } , 2500);
                
                document.body.style.overflow = "hidden";
                selfClearTimeout(() => {
                    setPassedStyle({
                        left : x,
                        top : y + window.pageYOffset,
                        width : window.innerWidth,
                        height: window.innerHeight,
                        zIndex : 9999,
                        transform : "translate(-50%, -50%)",
                    });
                } , 600)
            }else {
                setIsInTransforming(true);
                setOneItemSelected(false);
                document.body.style.overflow = "auto";
                const details = containerRef.current.getBoundingClientRect();
                setShowDetails(false)
                setPassedStyle({
                        position: "absolute",
                        transition: ".6s",
                        left : details.x,
                        top : details.top + window.pageYOffset,
                        width : 250 ,
                        height: 400,
                })
    
                selfClearTimeout(() => {
                    setIsOpen(false);
                    setIsInTransforming(false)
                } , 1500)
            }

        }
    }


    const afterOpenClickHandler = e => {
        e.stopPropagation();
        if(!isInTransforming) {
            selfClearTimeout(() => setCurrentScrolled(0) , 1000)
            if(currentActiveNextPostImage === 1) {
                setCurrentActiveNextPostImage(-1)
            }else setCurrentActiveNextPostImage(prev => prev + 1);
        }

    }


    const closePortalHandler = e => {
        e.stopPropagation();
        const haveBeenGoToNextPostItem = currentActiveNextPostImage > -1;
        if(haveBeenGoToNextPostItem) {
            setCurrentActiveNextPostImage(-1);
            selfClearTimeout(() => setShowDetails(false) , 1500)
        }else setShowDetails(false);
        
        selfClearTimeout(() => {
            selectHandler();
        } , haveBeenGoToNextPostItem ? 2000 : 900);
    }

    return (
        <div 
            ref={containerRef} 
            onClick={selectHandler}
            onMouseEnter={() => !isInIntroSectionHover && setIsHovered(true)}
            style={{ 
                    backgroundImage : `url(${src})` ,
                    // backgroundSize : "110% 110%",
                    // backgroundAttachment : "fixed",
                    width : 250 , 
                    height : 400 , 
                    opacity : isOpen ? 0 : 1 ,
                    transform : `translateY(${bodyScrollPos / 20}px)`
            }} 
            className={`galleryBoxColumn ${isOpen ? "galleryBoxColumn--open" : ""}`}>
            <div className="galleryBoxColumn__InitialOverlayAnimator" />
            <Portal>
                <div onMouseLeave={() => !isOpen && !isInIntroSectionHover && setIsHovered(false)} style={{ ...portalStyle , ...passedStyle , cursor : "pointer"}} />
            </Portal>
            {
                !!isOpen && <Portal>
                    <div className="galleryBoxPortal" style={{ ...portalStyle , ...passedStyle}}>
                        <div
                            className={`${currentActiveNextPostImage >= 0 && showDetails ? "previousItem" : ""}`} 
                            style={{
                            backgroundImage : `url(${src})`,
                            width: "100%",
                            transition: ".9s",
                            backgroundSize : "cover",
                            backgroundRepeat : "no-repeat",
                            height : isInOpening ? "100%" : showDetails ? `calc(100% - ${introContainerRef.current?.getClientRects()?.[0]?.height || 0}px)` : "100%",
                            backgroundPosition : `0 ${currentScrolled}%`
                        }} />
                        {
                            showDetails && restModelImgs.map((el , i) => (
                                <div className={`${i < currentActiveNextPostImage ? "previousItem" : ""}`} key={i} style={{
                                    backgroundImage : `url(${el})`,
                                    position : "fixed",
                                    left: currentActiveNextPostImage >= i ? 0 : "100%" ,
                                    top: 0,
                                    width: "100%",
                                    transition: ".9s",
                                    backgroundSize : "cover",
                                    backgroundRepeat : "no-repeat",
                                    height : isInOpening ? "100%" : `calc(100% - ${introContainerRef.current?.getClientRects()?.[0]?.height || 0}px)`,
                                    backgroundPosition : `0 ${currentScrolled}%`
                                }} />
                            ))
                        }
                        <div
                            onClick={e => e.stopPropagation()}
                            ref={introContainerRef} 
                            className={`galleryBoxPortal__introDetails ${showDetails ? "galleryBoxPortal__introDetails--show" : ""}`}>
                                <div className="galleryBoxPortal__introDetails__header">
                                    <p className="galleryBoxPortal__introDetails__title">{title}</p>
                                    <div onClick={closePortalHandler}>
                                        <CloseIcon />
                                    </div>
                                </div>
                                <p className="galleryBoxPortal__introDetails__desc">{desc}</p>
                        </div>
                        <Portal>
                            <div
                                onMouseEnter={() => {
                                    setIsHovered(true);
                                    setIsInIntroSectionHover(false)
                                }} 
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                    setIsInIntroSectionHover(true)
                                }} 
                                onClick={afterOpenClickHandler} 
                                onWheel={scrollHandler} 
                                style={{ width : "100%" , height : `calc(100% - ${introContainerRef.current?.getClientRects()?.[0]?.height || 0}px)` , position : "fixed" , left : 0 , top : 0  , zIndex : 99999 }} />
                        </Portal>
                    </div>
                </Portal>
            }
        </div>
    )
}

const GalleryBox = ({ 
    ImageList = [], 
    EnTitle ,
    EnShortDescription , 
    bodyScrollPos , 
    setIsHovered , 
    isSomeOneInHover ,
    setOneItemSelected,
}) => {

    const ItemWrapper = index => (
        <ItemColumn 
            restModelImgs={ImageList.filter((_ , i) => i !== index)} 
            desc={EnShortDescription} 
            setOneItemSelected={setOneItemSelected} 
            title={EnTitle} 
            setIsHovered={setIsHovered} 
            isSomeOneInHover={isSomeOneInHover} 
            bodyScrollPos={bodyScrollPos} 
            src={ImageList[index]} />
    )

    return (
        <div className="galleryBox">
            <div className="galleryBoxTitle">
                <p>{EnTitle}</p>
                <p>{EnShortDescription}</p>
            </div>
            <div className="galleryBoxImageContainer">
                <div className="galleryBoxLeftSide">
                    {ItemWrapper(0)}
                </div>
                <div className="galleryBoxRightSide">
                    {ItemWrapper(1)}
                    {ItemWrapper(2)}
                </div>
            </div>
        </div>
    )
}


export default GalleryBox;