import useAppContext from "../hooks/useAppContext";
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

const FullScreenMenu = ({ isInClose }) => {
    const { getContext } = useAppContext()
    
    const isInEn = getContext.lang === "en";
    
    return (
        <div className={`menu ${isInEn ? "menu--en" : ""} ${isInClose ? "menu--close" : ""}`}>
            <p className="menu__title">{content[getContext.lang].title}</p>
            <div className="menu__itemDirectory">
                {
                    content[getContext.lang].itemsList.map((el , i) => <MenuItem isInEn={isInEn} key={i} label={el} path={pathClone[i]} />)
                }
            </div>
        </div>
    )
}


export default FullScreenMenu;