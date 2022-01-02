import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Events = () => {
    const { getContext : { lang } } = useAppContext();
    const [eventData, setEventData] = useState([]);
    const fetcher = useRequest();

    useEffect(function getEventsHandler () {
        fetcher(reqUrl.getEvents)
            .then(setEventData)
    } , []);

    const isFa = lang === "fa";

    console.log(eventData);

    return (
        <div className="container events">
            <Layout isFa={isFa} label={isFa ? "رخداد ها" : "Events"}>
                {
                   eventData
                    .map((singleEvent , index) =>
                         <LayoutItem
                            redirectBase="events"
                            renderImageAs={<div className="events__cover"></div>}
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