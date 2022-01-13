import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Archive = () => {
    const [archiveList, setArchiveList] = useState([]);
    const fetcher = useRequest();

    useEffect(function getArchiveHandler() {
        fetcher(reqUrl.getAllArchive)
            .then(setArchiveList);
    } , []);

    return (
        <div className="container">
            <Layout label={{ fa : "آرشیو" , en : "Archive" }}>
                {
                    archiveList.map((archive , index) => (
                        <LayoutItem
                            redirectBase="archive"
                            key={index}
                            createTime={archive.CreateTime}
                            title={archive.EnTitle}
                            images={archive.ImageList}
                            {...archive}
                        />
                    ))
                }
            </Layout>
        </div>
    )
}


export default Archive;