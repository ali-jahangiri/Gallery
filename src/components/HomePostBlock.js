import useAppContext from "../hooks/useAppContext";
import useDate from "../hooks/useDate";

const HomePostBlock = ({ EnTitle , CreateDate = "" , EnDescription , }) => {

    // const dateCreatorHandler = useDate();

    const { getContext : { lang } } = useAppContext()

    const redirectHandler = () => {

    }

    return (
        <div className="homePostBlock">
            <div className="homePostBlock__title">
                <div>
                    <p>{EnTitle}</p>
                </div>
                {/* <span>{dateCreatorHandler(CreateDate)}</span> */}
            </div>
            <div>
                <p>{EnDescription}</p>
            </div>
            <div className="homePostBlock__trigger">
                <button onClick={redirectHandler}>{lang === "fa" ? "بیشتر" : "Read"}</button>
            </div>
        </div>
    )
}


export default HomePostBlock;