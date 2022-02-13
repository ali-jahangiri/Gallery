import { useEffect, useState , useRef } from "react";
import Slider from "react-slick";
import Parser from "html-react-parser";
import Spinner from "../components/Spinner";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import useAppContext from "../hooks/useAppContext";
import ProductSliderController from "../components/ProductSliderController";
import useKeyDistributor from "../hooks/useKeyDistributor";


const Product = ({ match : { params } }) => {
    const [product, setProduct] = useState();
    const fetcher = useRequest();
    const { getContext : { lang } } = useAppContext();
    const sliderRef = useRef();
    const [_, setReRenderForcer] = useState(0);
    
    const distributer = useKeyDistributor();
    
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

    useEffect(function forceToReRenderHandler() {
        if(product) setReRenderForcer(Date.now);
    } , [product]);

    const isFa = lang === "fa";
    
    return (
        <div className="product">
            {
                !product ? <Spinner /> : <div className="container">
                    <div className="product__innerContainer">
                        <div className="product__images">
                            <ProductSliderController sliderRef={sliderRef.current} />
                            <Slider ref={sliderRef} {...sliderConfig}>
                                {
                                    product.ImageList.map((slide , index) => (
                                        <div key={index}>
                                            <div style={{ background : `url(${slide})` }} className="product__images__slide">
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="product__details">
                            <p className="product__details__title">{distributer(product , "EnName")}</p>
                            <span className="product__details__shortDescription">{distributer(product , "EnShortDescription")}</span>
                            <p className="product__details__description">{Parser(distributer(product , "EnDescription") || "")}</p>
                            <div className="product__price">
                                <p>{isFa ? "قیمت" : "Price"}</p>
                                <span>{product.Price} USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Product;