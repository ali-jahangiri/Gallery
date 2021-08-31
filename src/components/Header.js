import { useState } from "react"
import Portal from "../provider/Portal";
import FullScreenMenu from "./FullScreenMenu";
import LanguageTrigger from "./LanguageTrigger"
import { selfClearTimeout } from "../utils"

const BurgerSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
const CloseSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isInClosing, setIsInClosing] = useState(false);

    const toggleMenu = () => {
        if(menuOpen) {
            setIsInClosing(true)
            selfClearTimeout(() => {
                    setMenuOpen(false)
            } , 400);

        }else {
            setMenuOpen(true);
            setIsInClosing(false)
        }
    }

    return (
        <div className={`appHeader ${menuOpen ? "appHeader--menuOpen" : ""}`}>
            <LanguageTrigger isMenuOpen={menuOpen} />
            <div className="brandName">
                <p>Kombo</p>
            </div>
            <div onClick={toggleMenu} className="appHeaderIconContainer">
                <div className="headerOpenIcon">
                    {
                        menuOpen ? <CloseSvg /> : <BurgerSvg />
                    }
                </div>
            </div>
            {
                !!menuOpen && <Portal>
                    <FullScreenMenu isInClose={isInClosing} />
                </Portal>
            }
        </div>
    )
}


export default Header