import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Events = () => {

    const [eventData, setEventData] = useState([]);
    const fetcher = useRequest();

    useEffect(function getEventsHandler () {
        fetcher(reqUrl.getEvents)
            .then(setEventData)
    } , []);


    return (
        <div className="container events">
            <Layout label={{ fa : "رخداد ها" , en : "Events" }}>
                {
                   eventData
                    .map((singleEvent , index) =>
                         <LayoutItem
                            redirectBase="events"
                            key={index} 
                            title={singleEvent.EnTitle} 
                            createTime={singleEvent.CreateDate}
                            {...singleEvent}
                        />)
                }
            </Layout>
        </div>
    )
}


export default Events;