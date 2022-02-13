import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import useKeyDistributor from "../hooks/useKeyDistributor";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleExhibition = ({ match : { params } }) => {
    const [exhibition, setExhibition] = useState(null);
    const fetcher = useRequest();    
    
    const distributor = useKeyDistributor();

    useEffect(function getExhibitionHandler() {
        fetcher(`${reqUrl.getSingleExhibition}${params.id}`)
            .then(data => setExhibition(data[0]));
    } , []);


    return (
        <div className={`singleExhibition ${exhibition ? "singleExhibition--loaded" : ""}`}>
            <div className="container">
            {
                !exhibition ? <Spinner /> : <div className="container">
                        <div className="singleExhibition__details">
                            <h1>{distributor(exhibition , "EnTitle")}</h1>
                            <p>{distributor(exhibition , "EnShortDescription")}</p>
                        </div>
                        <div className="singleExhibition__images">
                            {HTMLReactParser(distributor(exhibition , "EnDescription"))}
                        </div>
                </div>
            }
            </div>
        </div>
    )
}

export default SingleExhibition;