const Layout = ({ children , label , isFa }) => {
    return (
        <div className={`layout ${isFa ? "layout--fa" : ""}`}>
            <div className="layout__label">
                <p>{label}</p>
            </div>
            <div className="layout__container">
                {children}
            </div>
        </div>
    )
}


export default Layout;