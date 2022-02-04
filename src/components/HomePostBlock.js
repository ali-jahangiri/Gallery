import useAppContext from "../hooks/useAppContext";

const HomePostBlock = ({ EnTitle , EnDescription , }) => {

    const { getContext : { lang } } = useAppContext()

    
    return (
        <div className={`homePostBlock ${lang === "fa" ? "homePostBlock--fa" : ""}`}>
            <div className="homePostBlock__title">
                <div>
                    <p>{EnTitle}<span /></p>
                </div>
            </div>
            <div>
                <p>{EnDescription}</p>
            </div>
            <button className="homePostBlock__trigger">{lang === "fa" ? "بیشتر" : "Read"}</button>
        </div>
    )
}


export default HomePostBlock;