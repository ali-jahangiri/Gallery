import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import useDate from "../hooks/useDate";

const SingleEvent = ({ match : { params } , history }) => {

    const [eventData, setEventData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetcher = useRequest();

    const dateCreatorHandler = useDate();


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
                !loading && <div className="container">
                    <div className="singleEvent__title">
                        <h1>{eventData.EnTitle}</h1>
                        <div>
                            <p>{dateCreatorHandler(eventData.CreateDate)}</p>
                        </div>
                    </div>
                    <div className="singleEvent__desc">
                        <p>{parse(eventData.EnDescription)}</p>
                    </div>
                </div>
            }
        </div>
    )
}


export default SingleEvent;