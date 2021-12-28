const AboutImageContainer = ({ images = [] , desc , imageStyle = {} }) => {
    return (
        <div className="aboutImageContainer">
            <div className="aboutImageContainer__imageDirectory">
                {
                    images.map((img , i) => <img style={imageStyle} src={img} key={i} alt={`work-${i}`} />)
                }
            </div>
            {
                desc && <div className="aboutImageContainer__desc">
                    <span>{desc}</span>
                </div>
            }
        </div>
    )
}

export default AboutImageContainer;