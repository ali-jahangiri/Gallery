import useAppContext from "../hooks/useAppContext";
import Portal from "../provider/Portal";

const ImageLightBox = ({ src , onClose }) => {

    const { getContext : { lang } } = useAppContext();

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