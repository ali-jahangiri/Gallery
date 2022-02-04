import useAppContext from "../hooks/useAppContext";
import Spinner from "./Spinner";

const Layout = ({ children , label = { fa : "" , en : "" } }) => {
    const { getContext } = useAppContext();

    const isFa = getContext.lang === "fa";



    return (
        <div className={`layout ${isFa ? "layout--fa" : ""}`}>
            <div className="layout__label">
                <p>{label[getContext.lang]}</p>
            </div>
            {
                !Boolean(children.length) && <Spinner />
            }
            <div 
                style={{ justifyContent : isFa ? "flex-end" : "flex-start" }} 
                className={`layout__container ${children.length ? "layout__container--haveChild" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;