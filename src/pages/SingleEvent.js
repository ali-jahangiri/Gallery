import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import Spinner from "../components/Spinner";
import useKeyDistributor from "../hooks/useKeyDistributor";

const SingleEvent = ({ match : { params } , history }) => {

    const [eventData, setEventData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetcher = useRequest();

    const distributor = useKeyDistributor();

    
    useEffect(function getEventDataHandler() {
        if(params?.id) {
            fetcher(`${reqUrl.getSingleEvent}${params.id}`)
                .then(data => {
                    setEventData(data[0]);
                    setLoading(false);
                });
        }
    } , []);




    return (
        <div className={`singleEvent ${!loading ? "singleEvent--loaded" : ""}`}>
            {
                loading ? <Spinner /> : <div className="container">
                    <div className="singleEvent__title">
                        <h1>{distributor(eventData , "EnTitle")}</h1>
                    </div>
                    <div className="singleEvent__desc">
                        <p>{parse(distributor(eventData , "EnDescription"))}</p>
                    </div>
                </div>
            }
        </div>
    )
}


export default SingleEvent;