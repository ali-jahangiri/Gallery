import useAppContext from "../hooks/useAppContext";

const LanguageTrigger = ({ isMenuOpen }) => {
    const { setContext , getContext } = useAppContext();

    const changeLanguageHandler = () => {
        const newLang = getContext.lang === "fa" ? "en" : 'fa';
        setContext('lang' , newLang);
        localStorage.setItem("userLang" , newLang);
    }

    return (
        <div className={`languageTrigger ${isMenuOpen ? "languageTrigger--hide" : ""}`}>
            <div className="languageTriggerContainer">
                <p onClick={changeLanguageHandler}>{getContext.lang === "fa" ? "English" : "فارسی"}</p>
            </div>
        </div>
    )
}


export default LanguageTrigger;