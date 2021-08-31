import { useRef, useState } from "react"

import Portal from '../provider/Portal'
import { selfClearTimeout } from "../utils"

const ItemColumn = ({ src }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [passedStyle, setPassedStyle] = useState({});

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const containerRef   = useRef();

    
    const portalStyle = (() => {
        if(containerRef.current) {
            const details  = containerRef.current.getBoundingClientRect();
            return {
                position: "absolute",
                transition: ".3s",
                left : details.x,
                top : details.top + window.pageYOffset,
                width : 250 , 
                height: 400,
                backgroundSize : "cover",
                backgroundRepeat : "no-repeat",

            }
        }
    })();


    const selectHandler = () => {
        if(!isOpen) {
            setIsOpen(prev => !prev);
            selfClearTimeout(() => {
                setPassedStyle({
                    left : x,
                    top : y + window.pageYOffset,
                    width : window.innerWidth,
                    height: window.innerHeight,
                    transform : "translate(-50%, -50%)",
                    filter : "blur(3px) brightness(0.7)"
                })
            } , 300)
        }else {
            const details  = containerRef.current.getBoundingClientRect();
            setPassedStyle({
                    position: "absolute",
                    transition: ".3s",
                    left : details.x,
                    top : details.top + window.pageYOffset,
                    width : 250 ,
                    height: 400,
            })

            selfClearTimeout(() => {
                setIsOpen(false)
            } , 300)
        }
    }


    return (
        <div ref={containerRef} onClick={selectHandler} style={{ backgroundImage : `url(${src})` , width : 250 , height : 400 }} className={`galleryBoxColumn ${isOpen ? "galleryBoxColumn--open" : ""}`}>
            {
                !!isOpen && <Portal>
                    <div className="galleryBoxPortal" style={{ ...portalStyle , ...passedStyle , backgroundImage :  `url(${src})`}}></div>
                </Portal>
            }
        </div>
    )
}

const GalleryBox = ({ imageList , title , desc }) => {

    return (
        <div className="galleryBox">
            <div className="galleryBoxTitle">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
            <div className="galleryBoxImageContainer">
                <div className="galleryBoxLeftSide">
                    <ItemColumn src={imageList[0]} />
                </div>
                <div className="galleryBoxRightSide">
                    <ItemColumn src={imageList[1]} />
                    <ItemColumn src={imageList[2]} />
                </div>
            </div>
        </div>
    )
}


export default GalleryBox;