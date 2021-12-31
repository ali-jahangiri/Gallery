import useAppContext from "../hooks/useAppContext";

const AdditionalContact = () => {
    const { getContext : { lang }} = useAppContext()

    const isFa = lang === "fa";

    return (
        <div className="additionalContact">
            <div>
                <p>{isFa ? "شماره تماس" : "Number"}</p>
                <a href="tel:+98 914 4411463">+98 914 4411463</a>
            </div>
            <div>
                <p>{isFa ? "ایمیل" : "Email"}</p>
                <a href="mailto:fahimeh.he@gmail.com">fahimeh.he@gmail.com</a>
            </div>
        </div>
    )
}


export default AdditionalContact;