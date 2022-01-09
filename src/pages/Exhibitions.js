import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);
    const fetcher = useRequest();

    useEffect(function getAllExhibitionsHandler() {
        fetcher(reqUrl.getAllExhibitions)
            .then(setExhibitions)
    } , []);

    return (
        <div className="container">
            <Layout label={{ fa : "نمایشگاه ها" , en : "Exhibitions" }}>
                {
                    exhibitions.map((exhibition , i) => (
                        <LayoutItem
                            redirectBase="exhibition"
                            key={i}
                            title={exhibition.EnTitle}
                            createTime={exhibition.CreateDate}
                            images={exhibition.ImageList}
                            {...exhibition}
                        />
                    ))
                }
            </Layout>
        </div>
    )
}


export default Exhibitions;