import { useHistory } from "react-router";
import client from "../client";
import useAppContext from "../hooks/useAppContext";
import { selfClearTimeout } from "../utils";
import MenuItem from "./MenuItem";
import BrandIcon from "../static/logo.jpg"

const FullScreenMenu = ({ isInClose , setMenuOpen , setIsInClosing }) => {
    const history = useHistory();
    const { getContext } = useAppContext()
    
    const isInEn = getContext.lang === "en";
    

    const redirectHandler = (path) => {
        history.push(`/${path}`);
        setIsInClosing(true);
        selfClearTimeout(() => {
            setMenuOpen(false)
        } , 500)
    };

    return (
        <div className={`menu ${isInEn ? "menu--en" : ""} ${isInClose ? "menu--close" : ""}`}>
            <div className="menu__container">
                <div className="menu__author">
                    <div className="menu__brandIcon">
                        <img src={BrandIcon} alt="brand-icon" />
                    </div>
                    <div className="menu__author__name">
                        <p>{client.appName}</p>
                    </div>
                </div>
                <div className="menu__itemDirectory">
                    {
                        client.headerMenuList[getContext.lang]
                            .itemsList
                            .map((el , i) => <MenuItem
                                isActive={history.location.pathname.includes(el.path) || el?.nestedPath?.some(nestedPath => history.location.pathname.includes(nestedPath))}
                                isInEn={isInEn} 
                                key={i} 
                                label={el.title} 
                                redirectHandler={redirectHandler} 
                                path={el.path}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}


export default FullScreenMenu;