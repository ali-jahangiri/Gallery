import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import InnerPageSliderController from "../components/InnerPageSliderController";
import Spinner from "../components/Spinner";
import useDate from "../hooks/useDate";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleExhibition = ({ match : { params } }) => {
    const [exhibition, setExhibition] = useState(null);
    const fetcher = useRequest();
    const dateCreatorHandler = useDate();

    const sliderRef = useRef();


    useEffect(function getExhibitionHandler() {
        fetcher(`${reqUrl.getSingleExhibition}${params.id}`)
            .then(data => setExhibition(data[0]));
    } , []);


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


    return (
        <div className={`singleExhibition ${exhibition ? "singleExhibition--loaded" : ""}`}>
            <div className="container">
            {
                !exhibition ? <Spinner /> : <div className="container">
                        <div className="singleExhibition__details">
                            <h1>{exhibition.EnTitle}</h1>
                            <p>{exhibition.EnShortDescription}</p>
                            <p>{dateCreatorHandler(exhibition.CreateDate || "")}</p>
                        </div>
                        <div className="singleExhibition__slider nestedSlider">
                            <div>
                                <Slider {...sliderConfig} ref={sliderRef}>
                                    {
                                        ["https://www.fahimehheydari.ir/Uploades/BO5YOFWA47FEP6DMU2P4G3Z9P285MJVNKYH7YCB.png","https://www.fahimehheydari.ir/Uploades/BO5YOFWA47FEP6DMU2P4G3Z9P285MJVNKYH7YCB.png","https://www.fahimehheydari.ir/Uploades/BO5YOFWA47FEP6DMU2P4G3Z9P285MJVNKYH7YCB.png"].map((image , i) => (
                                            <div key={i}>
                                                <div className="singleExhibition__slide">
                                                    <img src={image} alt="archiveImage" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <InnerPageSliderController sliderRef={sliderRef} />
                            </div>
                        </div>
                </div>
            }

            </div>
        </div>
    )
}

export default SingleExhibition;