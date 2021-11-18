import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { selfClearTimeout } from "../utils";


const RightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"/></svg>

const MobileHome = ({
    model = [], 

}) => {
    const [currentActiveDetails, setCurrentActiveDetails] = useState()
    const [isInDetailsSwitching, setIsInDetailsSwitching] = useState(false);
    const [showRedirectionTrigger, setShowRedirectionTrigger] = useState(false);

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


    const flattedListModelImage = model.map(el => el.imageList).flat();

    useEffect(function initialDetailsSetter () {
        setCurrentActiveDetails(model.find(item => item.imageList.find(img => img === flattedListModelImage[0])))
        selfClearTimeout(() => {
            setShowRedirectionTrigger(true);
        } , 2500);
    } , []);

    const onSliderChangeHandler = currentIndex => {
        const currentActiveItem = model.find(item => item.imageList.find(img => img === flattedListModelImage[currentIndex]));
        if(currentActiveItem.id !== currentActiveDetails.id) {
            setIsInDetailsSwitching(true);
            setShowRedirectionTrigger(false);
            selfClearTimeout(() => {
                setCurrentActiveDetails(currentActiveItem);
                setIsInDetailsSwitching(false);
            } , 500)
            selfClearTimeout(() => {
                setShowRedirectionTrigger(true);
            } , 900)
        }
    }


    return (
        <div className="mobileHome">
            <div className="mobileHome__post">
                <Slider {...sliderConfig} afterChange={onSliderChangeHandler} ref={sliderRef} >
                    {
                        flattedListModelImage.map((img , index) => (
                            <div key={index}>
                                <img className="mobileHome__post__image" src={img} alt="img-path" />
                            </div>
                        ))
                    }
                </Slider>
                <div className={`mobileHome__details ${isInDetailsSwitching ? "mobileHome__details--hide" : ""}`}>
                    <div className="mobileHome__details__innerContainer">
                        <p>{currentActiveDetails?.title}</p>
                        <div className={`mobileHome__details__divider ${showRedirectionTrigger ? "mobileHome__details__divider--getFull" : ""}`} />
                        <p>{currentActiveDetails?.desc}</p>
                        <button className={`mobileHome__details__trigger ${showRedirectionTrigger ? "mobileHome__details__trigger--shrink" : ""}`}>
                            <p>Show more </p>
                            <RightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MobileHome;