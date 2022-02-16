import { useHistory } from "react-router";
import useAppContext from "../hooks/useAppContext";

const RightIconSvg = ({ onClick }) => <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg>
const LeftIconSvg = ({ onClick }) => <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"/></svg>

const LayoutItem = ({ title , redirectBase , Id , CoverImage , renderCoverImage }) => {
    const history = useHistory();
    const { getContext } = useAppContext();


    const redirectHandler = () => {
        history.push(`/${redirectBase}/${Id}`);
    }

    return (
        <div className={`layoutItem ${getContext.lang === "fa" ? "layoutItem--fa" : ""} `}>
            {
                renderCoverImage?.(redirectHandler) || <div onClick={redirectHandler} className="layoutItem__imageCover">
                    <img src={CoverImage} alt="" />
                </div>
            }
            <div className="layoutItem__details">
                <div>
                    <p onClick={redirectHandler}>{title}</p>
                    <div>
                        {
                            getContext.lang === "fa" ? <LeftIconSvg onClick={redirectHandler} /> : <RightIconSvg onClick={redirectHandler} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LayoutItem;