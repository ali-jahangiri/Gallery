import { useHistory } from "react-router";
import client from "../client";
import useAppContext from "../hooks/useAppContext";
import { selfClearTimeout } from "../utils";
import MenuItem from "./MenuItem";



const pathClone = [
    "about",
    "exhibitions",
    "purchase",
    "archive",
    "publication",
    "events",
    "contact",
]

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
                    <div className="menu__author__name">
                        <p>{client.appName}</p>
                    </div>
                    <div className="menu__author__desc">
                        <p>{client.headerAfterAppNameDesc}</p>
                    </div>
                </div>
                <div className="menu__itemDirectory">
                    {
                        client.headerMenuList[getContext.lang].itemsList.map((el , i) => <MenuItem isInEn={isInEn} key={i} label={el} redirectHandler={redirectHandler} path={pathClone[i]} />)
                    }
                </div>
            </div>
        </div>
    )
}


export default FullScreenMenu;