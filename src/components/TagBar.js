const TagBar = ({ items = [] , style = {} }) => {
    return (
        <div style={style} className="tagbar">
            {
                items.map((item , i) => (
                    <div key={i}>
                        <p>{item}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TagBar;