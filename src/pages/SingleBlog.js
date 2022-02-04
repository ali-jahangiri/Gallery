import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Spinner from "../components/Spinner";
import TagBar from "../components/TagBar";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleBlog = ({ match : { params } , history }) => {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState({});

    const fetcher = useRequest();
    useEffect(function fetchSpecificBlogItemHandler() {
        if(params.id && !isNaN(params.id)) {
            fetcher(`${reqUrl.getSinglePost}${params.id}`)
                .then(data => {
                    setBlogData(data[0]);
                    setLoading(false);
                })
        }else history.push("")
    } , []);


    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        autoplay : true,
    }


    return (
        <div className={`singleBlog ${!loading ? "singleBlog--loaded" : ""}`}>
            <div className="container">
                {
                    loading ? <Spinner /> : <React.Fragment>
                        <div className="singleBlog__intro">
                            <h1>
                                {blogData.EnTitle}
                            </h1>
                            <div>
                                <TagBar style={{ backgroundColor : "white" , border : "none" }} items={["ArtWork" , "Paint"]} />
                            </div>
                        </div>
                        <div className="singleBlog__description">
                            <p>{blogData.EnDescription}</p>
                            <p>
                            </p>
                        </div>
                        <div className="singleBlog__slider">
                            <Slider {...sliderConfig}>
                                {
                                   blogData.ImageList.map((item , i) => (
                                        <div key={i}>
                                            <div style={{ background : `url(${item})` }} className="singleBlog__slider__item" />
                                        </div>
                                   )) 
                                }
                            </Slider>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}


export default SingleBlog;