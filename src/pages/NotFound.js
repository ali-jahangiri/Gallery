import useAppContext from "../hooks/useAppContext";

const NotFound = ({ history }) => {
    const { getContext : { lang } } = useAppContext();

    return (
        <div className="notFound">
            <p>404</p>
            <p onClick={() => history.push("/")}>{lang === "fa" ? "آیا گمشده اید ؟" : "Are you lost ?"}</p>
        </div>
    )
}


export default NotFound;