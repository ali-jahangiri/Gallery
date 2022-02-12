import { useState } from "react";

const ProductCover = ({ images , onClick , cover }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="productCover">
            {
                images.map((img , i) => (
                    <div
                        onClick={onClick}
                        onMouseEnter={setIsHovered}
                        onMouseLeave={() => setIsHovered(false)} 
                        style={{ left : i * (isHovered ? 20 : 10) , top : i * (isHovered ? 20 : 10) }} 
                        key={i}
                    >
                        <img style={{ opacity : .4 }} src={img} alt="cover" />
                    </div>
                ))
            }
            <div
                onClick={onClick}
                onMouseEnter={setIsHovered}
                onMouseLeave={() => setIsHovered(false)} 
                style={{ left : 2 * (isHovered ? 20 : 10) , top : 2 * (isHovered ? 20 : 10) }} 
            >
                <img src={cover} alt="cover" />
            </div>
        </div>
    )
}



export default ProductCover;