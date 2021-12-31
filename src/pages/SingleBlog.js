import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TagBar from "../components/TagBar";
import { makeLeanDate, _date } from "../utils";
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
                    !loading && <React.Fragment>
                        <div className="singleBlog__intro">
                            <h1>
                                {/* {blogData.EnTitle} */}
                                At nihil vel. Ratione quasi in totam quae quia dolor enim esse voluptates. Sunt dolores alias.
                            </h1>
                            <div>
                                <TagBar style={{ backgroundColor : "white" , border : "none" }} items={["ArtWork" , "Paint"]} />
                                <p>{_date(makeLeanDate(blogData.CreateDate)).format("YYYY/MM/DD")}</p>
                            </div>
                        </div>
                        <div className="singleBlog__description">
                            {/* <p>{blogData.EnDescription}</p> */}
                            <p>
                                Distinctio esse ut modi minima libero dolor beatae nobis nostrum. Similique dolorem a. Voluptates quasi eum ut omnis eum. Dolor pariatur ducimus dolorum fugit totam.
 
Incidunt sit odit eos nam dolorum et. Odio eveniet delectus. Aut et ut qui illo consectetur itaque et inventore. Voluptatem sunt rerum culpa aut illo est provident tempora.
 
Est similique illo veniam laudantium non sint. Sapiente pariatur dolore quasi. Et non odio neque porro maxime sed illo consequatur. Eius omnis temporibus magnam officiis. Est quibusdam est autem.
                                Distinctio esse ut modi minima libero dolor beatae nobis nostrum. Similique dolorem a. Voluptates quasi eum ut omnis eum. Dolor pariatur ducimus dolorum fugit totam.
 
Incidunt sit odit eos nam dolorum et. Odio eveniet delectus. Aut et ut qui illo consectetur itaque et inventore. Voluptatem sunt rerum culpa aut illo est provident tempora.
 
Est similique illo veniam laudantium non sint. Sapiente pariatur dolore quasi. Et non odio neque porro maxime sed illo consequatur. Eius omnis temporibus magnam officiis. Est quibusdam est autem.
                            </p>
                        </div>
                        <div className="singleBlog__slider">
                            <Slider {...sliderConfig}>
                                {
                                   blogData.ImageList.map((item , i) => (
                                       <div>
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