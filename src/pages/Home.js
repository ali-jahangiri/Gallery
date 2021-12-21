import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import HomeLoadingScreen from "../components/HomeLoadingScreen";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const RightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M7,24a1,1,0,0,1-.707-1.707l8.172-8.172a3,3,0,0,0,0-4.242L6.293,1.707A1,1,0,0,1,7.707.293l8.172,8.172a5.005,5.005,0,0,1,0,7.07L7.707,23.707A1,1,0,0,1,7,24Z"/></svg>
const LeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M17.172,24a1,1,0,0,1-.707-.293L8.293,15.535a5,5,0,0,1,0-7.07L16.465.293a1,1,0,0,1,1.414,1.414L9.707,9.879a3,3,0,0,0,0,4.242l8.172,8.172A1,1,0,0,1,17.172,24Z"/></svg>


const imageList = [
    "https://images.unsplash.com/photo-1639501945063-2e10f48ca1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
    "https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1639501158624-272ee4bb786d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1633114129669-78b1ff09902b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1639485731579-2818c52ebe7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
]

const Home = () => {
    const sliderRef = useRef();
    const [loading, setLoading] = useState(true);
    const [homeData, setHomeData] = useState({ post : [] , slider : [{ Id : "" , Title : "" , ImageList : [] , ShortDescription : "" }] });

    const fetcher = useRequest()

    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade : true,
        arrows : false
    }


    const nextSlidHandler = () => sliderRef.current.slickNext()
    const prevSlidHandler = () => sliderRef.current.slickPrev()


    useEffect(function getHomeData() {
        fetcher(reqUrl.getSlider)
            .then(slider => {
                fetcher(reqUrl.getPost)
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
                    <div className="home__slider__otherGoddamnContainerForNoPurpose">
                        
                    </div>
                </div>
            </div>
    </>
}


export default Home;