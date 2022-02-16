const MenuItem = ({ label , path , isInEn , isActive , redirectHandler }) => (
    <div className={`menuItem ${isActive ? "menuItem--active" : ""} ${isInEn ? "menuItem--en" : ""}`}>
        <button onClick={() => redirectHandler(path)}>
            <p>
                <span>{label}</span>
            </p>
        </button>
    </div>
)


export default MenuItem;