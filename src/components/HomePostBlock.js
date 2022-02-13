import useAppContext from "../hooks/useAppContext";

const HomePostBlock = ({ title , EnDescription , Keyword }) => {

    const { getContext : { lang } } = useAppContext()

    
    return (
        <div className={`homePostBlock ${lang === "fa" ? "homePostBlock--fa" : ""}`}>
            <div className="homePostBlock__title">
                <div>
                    <p>{title}<span /></p>
                </div>
            </div>
            <div>
                <p>{EnDescription}</p>
            </div>
            <a href={Keyword} className="homePostBlock__trigger">{lang === "fa" ? "بیشتر" : "Read"}</a>
        </div>
    )
}


export default HomePostBlock;