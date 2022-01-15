import { useEffect, useState } from "react";
import Slider from "react-slick";
import Parser from "html-react-parser";
import Spinner from "../components/Spinner";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Product = ({ match : { params } }) => {
    const [product, setProduct] = useState();
    const fetcher = useRequest();
    const { getContext } = useAppContext();
    
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade : true,
        arrows : false,
        autoplay : true,
    }


    useEffect(function getProductHandler() {
        fetcher(`${reqUrl.getSingleProduct}${params.id}`)
            .then(data => setProduct(data[0]));
    } , []);


    
    const isFa = getContext.lang === "fa";

    return (
        <div className="product">
            {
                !product ? <Spinner /> : <div className="container">
                    <div className="product__header">
                        <div className="product__header__images">
                            <Slider {...sliderConfig}>
                                {
                                    product.ImageList.map((slide , index) => (
                                        <div key={index}>
                                            <div style={{ background : `url(${slide})` }} className="product__header__images__slide">
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="product__header__details">
                            <p className="product__header__details__name">{product.EnName}</p>
                            <p className="product__header__details__description">{Parser(product.EnDescription || `Libero eligendi laboriosam. Autem consequatur non molestias aut rerum qui. Eos maiores ut. Voluptate reprehenderit minus. Nulla quisquam voluptates est aut. Ab et et consequuntur nobis labore odit.
 
Repudiandae est nesciunt eum alias ut dolore. Ut vel quo nobis voluptatem provident excepturi. Velit temporibus facilis. Et perspiciatis occaecati et. Harum ex temporibus ducimus.
 
Repellat sunt doloribus enim ipsum voluptas doloribus expedita. Vero aut voluptate eaque vel suscipit dolorem facilis et nemo. Non molestiae at cupiditate repellendus sit blanditiis. Cupiditate et necessitatibus.`)}</p>
                        </div>
                    </div>
                    <div className="product__price">
                        <p>{isFa ? "قیمت" : "Price"}</p>
                        <span>20000</span>
                    </div>
                </div>
            }
        </div>
    )
}


export default Product;