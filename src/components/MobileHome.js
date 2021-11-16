import { useRef } from "react";
import Slider from "react-slick";

const MobileHome = ({
    model = [], 

}) => {
    const sliderRef = useRef();

    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        autoplay : true,
    }


    return (
        <div className="mobileHome">
            {
                model.map((el , i) => (
                    <div key={i} className="mobileHome__post">
                        <Slider {...sliderConfig} ref={sliderRef} >
                            {
                                el.imageList.map((img , index) => (
                                    <div key={index}>
                                        <div className="mobileHome__post__container">
                                            <img src={img} alt="img-path" />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                        <div className="mobileHome__details">
                            <p>{el.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default MobileHome;