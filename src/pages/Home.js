import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import HomeLoadingScreen from "../components/HomeLoadingScreen";
import HomePostBlock from "../components/HomePostBlock";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const RightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M7,24a1,1,0,0,1-.707-1.707l8.172-8.172a3,3,0,0,0,0-4.242L6.293,1.707A1,1,0,0,1,7.707.293l8.172,8.172a5.005,5.005,0,0,1,0,7.07L7.707,23.707A1,1,0,0,1,7,24Z"/></svg>
const LeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M17.172,24a1,1,0,0,1-.707-.293L8.293,15.535a5,5,0,0,1,0-7.07L16.465.293a1,1,0,0,1,1.414,1.414L9.707,9.879a3,3,0,0,0,0,4.242l8.172,8.172A1,1,0,0,1,17.172,24Z"/></svg>


const Home = () => {
    const sliderRef = useRef();
    const [loading, setLoading] = useState(true);
    const [homeData, setHomeData] = useState({ post : [] , slider : [{ Id : "" , Title : "" , ImageList : [] , ShortDescription : "" }] });

    const fetcher = useRequest();

    const { getContext : { lang } } = useAppContext();

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


    const nextSlidHandler = () => sliderRef.current.slickNext()
    const prevSlidHandler = () => sliderRef.current.slickPrev()


    useEffect(function getHomeData() {
        if(homeData)
        fetcher(reqUrl.getSlider)
            .then(slider => {
                fetcher(reqUrl.getHomeFooterData)
                    .then(post => {
                        setHomeData({ post , slider });
                        setLoading(false);
                    })
            })
    } , []);


    return <>
            <HomeLoadingScreen loadingFinished={!loading} />
            <div className="home">
                <div className="home__sliderContainer">
                    <Slider {...sliderConfig} ref={sliderRef} className="home__slider">
                        {
                            homeData.slider.map(slide => slide.ImageList).flat().map((el , i) => (
                                <div key={i}>
                                    <div style={{ backgroundImage : `url(${el})` }} className="home__slider__item">
                                        <div className="home__slider__item__innerContainer" />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="home__slider__controller">
                        <div onClick={prevSlidHandler}>
                            <LeftIcon />
                        </div>
                        <div onClick={nextSlidHandler}>
                            <RightIcon />
                        </div>
                    </div>
                    <div className={`home__otherGoddamnContainerForNoPurpose ${lang === "fa" ? "home__otherGoddamnContainerForNoPurpose--fa" : ""}`}>
                        <div className="home__otherGoddamnContainerForNoPurpose__intro">
                            <p>{lang === "fa" ? "مقالات های برگزیده" : "Suggested Post"}</p>
                        </div>
                        <div style={{ justifyContent : lang === "fa" ? "flex-end" : "flex-start" }} className="home__otherGoddamnContainerForNoPurpose__itemContainer">
                            {
                                homeData.post.slice(0 , 2).map((item , index) => <HomePostBlock {...item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
    </>
}


export default Home;