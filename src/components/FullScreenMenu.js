import { useHistory } from "react-router";
import useAppContext from "../hooks/useAppContext";
import { selfClearTimeout } from "../utils";
import MenuItem from "./MenuItem";

const content = {
    en : {
        title :"Menu",
        itemsList : [
            "About",
            "Exhibition",
            "Purchase",
            "Archive",
            "Publication",
            "Events",
            "Contact",
        ]
    },
    fa : {
        title : "منو",
        itemsList : [
            "درباره",
            "نمایشگاه",
            "خرید",
            "آرشیو",
            "نوشته ها و انتشارات",
            "رخداد ها",
            "تماس",
        ]
    }
}

const pathClone = [
    "about",
    "exhibition",
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
                <div className="menu__title">
                    <p>{content[getContext.lang].title}</p>
                </div>
                <div className="menu__itemDirectory">
                    {
                        content[getContext.lang].itemsList.map((el , i) => <MenuItem isInEn={isInEn} key={i} label={el} redirectHandler={redirectHandler} path={pathClone[i]} />)
                    }
                </div>
            </div>
        </div>
    )
}


export default FullScreenMenu;