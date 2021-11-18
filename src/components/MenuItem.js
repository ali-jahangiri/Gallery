import { useHistory } from "react-router";

const MenuItem = ({ label , path , isInEn }) => {
    const history = useHistory();

    const redirectHandler = () => history.push(`/${path}`)

    return (
        <div className={`menuItem ${isInEn ? "menuItem--en" : ""}`}>
            <button onClick={redirectHandler}>
                <p>
                    <span>{label}</span>
                </p>
            </button>
        </div>
    )
}


export default MenuItem;