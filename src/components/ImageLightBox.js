import { useLayoutEffect } from "react";
import useAppContext from "../hooks/useAppContext";
import Portal from "../provider/Portal";

const ImageLightBox = ({ src , onClose }) => {

    const { getContext : { lang } } = useAppContext();

    useLayoutEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = "scroll";
        }
    } , []);

    return (
        <Portal>
            <div onClick={() => onClose("")} className="imageLightBox">
                <p>{lang === "fa" ? "بستن" : "Close"}</p>
                <img src={src} alt="lightbox-img" />
            </div>
        </Portal>
    )
}


export default ImageLightBox;