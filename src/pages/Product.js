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


    const orderHandler = () => {
        
    }


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
                            <p className="product__header__details__description">{Parser(product.EnDescription || "")}</p>
                        <div className="product__order">
                            <button onClick={orderHandler}>{isFa ? "سفارش" : "Order"}</button>
                        </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Product;