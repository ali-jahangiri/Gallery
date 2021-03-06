import { useEffect, useState } from "react";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import useKeyDistributor from "../hooks/useKeyDistributor";

const Blog = () => {
    const [blogItem, setBlogItem] = useState([]);
    const fetcher = useRequest();
    const distributer = useKeyDistributor();
    

    useEffect(function fetchInitialBlogItemHandler() {
        fetcher(reqUrl.getPost)
            .then(setBlogItem)
    } , []);

    return (
        <div className="container">
            <Layout label={{ fa : "انتشارات" , en : "publication"}}>
                {
                    blogItem.map((item , index) => (
                        <LayoutItem
                            redirectBase="publication"
                            createTime={item.CreateDate}
                            images={item.CoverImage}
                            title={distributer(item , "EnTitle")}
                            {...item}
                            key={index}
                        />
                    ))
                }
            </Layout>
        </div>
    )
}


export default Blog;