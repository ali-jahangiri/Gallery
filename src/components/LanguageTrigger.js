import useAppContext from "../hooks/useAppContext";

const LanguageTrigger = ({ isMenuOpen }) => {
    const { setContext , getContext } = useAppContext();

    const changeLanguageHandler = newLang => {
        setContext('lang' , newLang)
    }

    return (
        <div className={`languageTrigger ${isMenuOpen ? "languageTrigger--hide" : ""}`}>
            <div className="languageTriggerContainer">
                {
                    [{ label : "فارسی" , key : "fa" } , {label : "English" , key : "en"}].map((el , i) => (
                        <div 
                            key={i}
                            className={`languageTriggerItem ${getContext.lang !== el.key ? "languageTriggerItem--deActive" : ""}`} 
                            onClick={() => changeLanguageHandler(el.key)}>{el.label}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default LanguageTrigger;