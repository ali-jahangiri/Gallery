const ProductSliderDots = ({ slideCount , sliderRef , activeDot }) => {

    const slideHandler = index => {
        sliderRef.current.slickGoTo(index)
    }

    return (
        <div className="productSliderDots">
            {
                new Array(slideCount).fill("").map((_ , i) => (
                    <div style={{ background : activeDot === i ? "grey" : "lightgrey" }} onClick={() => slideHandler(i)}></div>
                ))
            }
        </div>
    )
}


export default ProductSliderDots;