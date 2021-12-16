const MenuItem = ({ label , path , isInEn , redirectHandler }) => (
    <div className={`menuItem ${isInEn ? "menuItem--en" : ""}`}>
        <button onClick={() => redirectHandler(path)}>
            <p>
                <span>{label}</span>
            </p>
        </button>
    </div>
)


export default MenuItem;