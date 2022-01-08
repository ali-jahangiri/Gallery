import { useEffect, useState } from "react";
import Slider from "react-slick";
import Spinner from "../components/Spinner";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const TEST_PATH = 'https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

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
                                    [TEST_PATH ,TEST_PATH ,TEST_PATH ,TEST_PATH ,TEST_PATH].map((slide , index) => (
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
                            <p className="product__header__details__description">Amet enim laborum occaecati consequatur id consequatur similique optio. Est temporibus inventore molestiae a praesentium numquam sed consequatur nobis. Harum hic consequatur fugiat itaque voluptatum rerum itaque.
 
Odio culpa provident necessitatibus esse dolorem. Facere qui voluptatem et sed repellat. Asperiores non est nihil. Consectetur nesciunt quo ratione sunt.
 
Ex provident consectetur et et recusandae inventore quidem ratione porro. Ut aut hic ut enim voluptatem perspiciatis officiis similique quia. Aut unde sit. Eum sit tempora voluptatem eum. Voluptatem ipsam alias. Tenetur mollitia ipsum numquam atque architecto id quod.</p>

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