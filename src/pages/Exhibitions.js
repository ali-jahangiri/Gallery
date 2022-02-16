import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import useKeyDistributor from "../hooks/useKeyDistributor";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);
    const fetcher = useRequest();
    const distributor = useKeyDistributor();

    useEffect(function getAllExhibitionsHandler() {
        fetcher(reqUrl.getAllExhibitions)
            .then(setExhibitions)
    } , []);

    

    return (
        <div className="container">
            <Layout label={{ fa : "نمایشگاه ها" , en : "Exhibitions" }}>
                {
                    [...exhibitions , ...exhibitions.slice(2)].map((exhibition , i) => (
                        <LayoutItem
                            redirectBase="exhibition"
                            key={i}
                            title={distributor(exhibition , "EnTitle")}
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