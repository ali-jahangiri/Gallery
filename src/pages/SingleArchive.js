import { useEffect, useState } from "react";
import Parser from 'html-react-parser';

import Spinner from "../components/Spinner";
import TagBar from "../components/TagBar";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import ImageLightBox from "../components/ImageLightBox";
import useKeyDistributor from "../hooks/useKeyDistributor";

const SingleArchive = ({ match : { params } }) => {
    const [archive, setArchive] = useState(null);
    const fetcher = useRequest();
    const [selectedImage, setSelectedImage] = useState("");

    const distributer = useKeyDistributor();
    
    useEffect(function getArchiveHandler() {
        fetcher(`${reqUrl.getSingleArchive}${params.id}`)
            .then(data => setArchive(data[0]));
    } , []);



    const openLightBox = imagePath => setSelectedImage(imagePath);

    return (
        <div className={`singleArchive ${archive ? "singleArchive--loaded" : ""}`}>
            {
                !archive ? <Spinner /> : <div className="container">
                        <div className="singleArchive__details">
                            <h1>{distributer(archive , "EnTitle")}</h1>
                            <p>{Parser((distributer(archive , "EnShortDescription")))}</p>
                            <TagBar 
                                style={{ backgroundColor : "white" , border : "none" }} 
                                items={archive.KeyWords.split(" ").map(tag => tag[0] === "#" ? tag.slice(1) : tag)}
                            />
                        </div>
                        <div className="singleArchive__images">
                            {
                                archive.ImageList.map((image , i) => (
                                    <div key={i}>
                                        <img onClick={() => openLightBox(image)} src={image} alt="archiveImage" />
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
    )
}


export default SingleArchive;