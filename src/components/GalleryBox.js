import { useRef, useState } from "react"

import Portal from '../provider/Portal'
import { selfClearTimeout } from "../utils"

const ItemColumn = ({ src , bodyScrollPos , cursorPos }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [passedStyle, setPassedStyle] = useState({});
    const [currentScrolled, setCurrentScrolled] = useState(0);
    const [test, setTest] = useState({ x : 0 , y : 0 });


    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const containerRef   = useRef();

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
            const details  = containerRef.current.getBoundingClientRect();
            return {
                position: "absolute",
                transition: ".9s",
                left : details.x,
                top : details.top + window.pageYOffset,
                width : 250 , 
                height: 400,
                backgroundSize : "cover",
                backgroundRepeat : "no-repeat",
                backgroundPosition : `0 ${currentScrolled}%`
            }
        }
    })();


    const selectHandler = () => {
        if(!isOpen) {
            setIsOpen(prev => !prev);
            document.body.style.overflow = "hidden";
            selfClearTimeout(() => {
                setPassedStyle({
                    left : x,
                    top : y + window.pageYOffset,
                    width : window.innerWidth,
                    height: window.innerHeight,
                    zIndex : 9999,
                    transform : "translate(-50%, -50%)",
                    // filter : "blur(3px) brightness(0.7)"
                })
            } , 600)
        }else {
            document.body.style.overflow = "auto";
            const details  = containerRef.current.getBoundingClientRect();
            setPassedStyle({
                    position: "absolute",
                    transition: ".6s",
                    left : details.x,
                    top : details.top + window.pageYOffset,
                    width : 250 ,
                    height: 400,
            })

            selfClearTimeout(() => {
                setIsOpen(false)
            } , 600)
        }
    }


    const onMouseMove = e => {
        const { x , y } = e.target.getClientRects()[0]
        console.log(e);
        const cursorX = Number(e.clientX)
        const cursorY = Number(e.clientY)
        setTest({x : cursorX - x , y : cursorY - y})
    }



    return (
        <div 
        ref={containerRef} 
        onClick={selectHandler}
        onWheel={scrollHandler}
        onMouseMove={onMouseMove}
        style={{ 
                backgroundImage : `url(${src})` , 
                width : 250 , 
                height : 400 , 
                opacity : isOpen ? 0 : 1 , 
                transform : `translateY(${bodyScrollPos / 20}px)`
        }} 
        className={`galleryBoxColumn ${isOpen ? "galleryBoxColumn--open" : ""}`}>
            <div style={{ left : test.x , top : test.y}} className="galleryBoxColumn__cursor"></div>
            {
                !!isOpen && <Portal>
                    <div className="galleryBoxPortal" style={{ ...portalStyle , ...passedStyle , backgroundImage :  `url(${src})`}}></div>
                </Portal>
            }
        </div>
    )
}

const GalleryBox = ({ imageList , title , desc , bodyScrollPos , cursorPos }) => {

    return (
        <div className="galleryBox">
            <div className="galleryBoxTitle">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
            <div className="galleryBoxImageContainer">
                <div className="galleryBoxLeftSide">
                    <ItemColumn cursorPos={cursorPos} bodyScrollPos={bodyScrollPos} src={imageList[0]} />
                </div>
                <div className="galleryBoxRightSide">
                    <ItemColumn cursorPos={cursorPos} bodyScrollPos={bodyScrollPos} src={imageList[1]} />
                    <ItemColumn cursorPos={cursorPos} bodyScrollPos={bodyScrollPos} src={imageList[2]} />
                </div>
            </div>
        </div>
    )
}


export default GalleryBox;