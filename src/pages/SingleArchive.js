import { useEffect, useState } from "react";
import Slider from "react-slick";
import Spinner from "../components/Spinner";
import TagBar from "../components/TagBar";
import useDate from "../hooks/useDate";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleArchive = ({ match : { params } }) => {
    const [archive, setArchive] = useState(null);
    const fetcher = useRequest();
    const dateCreatorHandler = useDate()

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
        fade : true,
        arrows : false,
        autoplay : true,
    }

    return (
        <div className={`singleArchive ${archive ? "singleArchive--loaded" : ""}`}>
            {
                !archive ? <Spinner /> : <div className="container">
                        <div className="singleArchive__details">
                            <h1>{archive.EnTitle}</h1>
                            <p>{archive.EnShortDescription}</p>
                            <p>{dateCreatorHandler(archive.CreateDate || "")}</p>
                            <TagBar style={{ backgroundColor : "white" , border : "none" }} items={archive.KeyWords.split(" ")} />
                        </div>
                        <div className="singleArchive__slider">
                            <Slider {...sliderConfig}>
                                {
                                    archive.ImageList.map((image , i) => (
                                        <div key={i}>
                                            <div className="singleArchive__slide">
                                                <img src={image} alt="archiveImage" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                </div>
            }
        </div>
    )
}


export default SingleArchive;