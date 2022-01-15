import { useState } from "react";

const ProductCover = ({ images , onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="productCover">
            {
                images.map((img , i) => (
                    <div
                        onClick={onClick}
                        onMouseEnter={setIsHovered}
                        onMouseLeave={() => setIsHovered(false)} 
                        style={{ left : i * (isHovered ? 20 : 10) , top : i * (isHovered ? 20 : 10) }} key={i}>
                        <img src={img} alt="cover" />
                    </div>
                ))
            }
        </div>
    )
}



export default ProductCover;