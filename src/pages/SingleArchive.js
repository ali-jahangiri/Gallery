import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Parser from 'html-react-parser';

import Spinner from "../components/Spinner";
import TagBar from "../components/TagBar";
import useDate from "../hooks/useDate";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import ImageLightBox from "../components/ImageLightBox";
import InnerPageSliderController from "../components/InnerPageSliderController";

const SingleArchive = ({ match : { params } }) => {
    const [archive, setArchive] = useState(null);
    const fetcher = useRequest();
    const [selectedImage, setSelectedImage] = useState("");
    const dateCreatorHandler = useDate();
    const sliderRef = useRef();


    useEffect(function getArchiveHandler() {
        fetcher(`${reqUrl.getSingleArchive}${params.id}`)
            .then(data => setArchive(data[0]));
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

    const openLightBox = imagePath => setSelectedImage(imagePath);

    return (
        <div className={`singleArchive ${archive ? "singleArchive--loaded" : ""}`}>
            {
                !archive ? <Spinner /> : <div className="container">
                        <div className="singleArchive__details">
                            <h1>{archive.EnTitle}</h1>
                            <p>{Parser(archive.EnShortDescription)}</p>
                            <p>{dateCreatorHandler(archive.CreateDate || "")}</p>
                            <TagBar 
                                style={{ backgroundColor : "white" , border : "none" }} 
                                items={archive.KeyWords.split(" ").map(tag => tag[0] === "#" ? tag.slice(1) : tag)}
                            />
                        </div>
                        <div className="singleArchive__slider">
                            <Slider ref={sliderRef} {...sliderConfig}>
                                {
                                    archive.ImageList.map((image , i) => (
                                        <div key={i}>
                                            <div className="singleArchive__slide">
                                                <img onClick={() => openLightBox(image)} src={image} alt="archiveImage" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                            <InnerPageSliderController sliderRef={sliderRef} />
                        </div>
                </div>
            }
            {
                selectedImage && <ImageLightBox onClose={setSelectedImage} src={selectedImage} /> 
            }
        </div>
    )
}


export default SingleArchive;