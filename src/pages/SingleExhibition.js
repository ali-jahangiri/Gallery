import { useEffect, useState } from "react";
import ImageLightBox from "../components/ImageLightBox";
import Spinner from "../components/Spinner";
import useDate from "../hooks/useDate";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleExhibition = ({ match : { params } }) => {
    const [exhibition, setExhibition] = useState(null);
    const fetcher = useRequest();
    const dateCreatorHandler = useDate();
    const [selectedImage, setSelectedImage] = useState("");




    useEffect(function getExhibitionHandler() {
        fetcher(`${reqUrl.getSingleExhibition}${params.id}`)
            .then(data => setExhibition(data[0]));
    } , []);



    const openLightBox = imagePath => setSelectedImage(imagePath);



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
                        <div className="singleExhibition__images">
                            {
                                exhibition.ImageList.map((image , i) => (
                                    <div key={i}>
                                        <img onClick={() => openLightBox(image)} src={image} alt="exhibitionImage" />
                                    </div>
                                ))
                            }
                        </div>
                </div>
            }
            {
                selectedImage && <ImageLightBox onClose={setSelectedImage} src={selectedImage} /> 
            }
            </div>
        </div>
    )
}

export default SingleExhibition;