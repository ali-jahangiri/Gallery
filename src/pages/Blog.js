import { useEffect, useState } from "react";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import useAppContext from "../hooks/useAppContext";

const Blog = () => {
    const [blogItem, setBlogItem] = useState([]);
    const fetcher = useRequest();
    const { getContext : { lang } } = useAppContext()


    useEffect(function fetchInitialBlogItemHandler() {
        fetcher(reqUrl.getPost)
            .then(setBlogItem)
    } , []);

    const isFa = lang === "fa";

    return (
        <div className="container">
            <Layout isFa={isFa} label={isFa ? "انتشارات" : "publication"}>
                {
                    blogItem.map((item , index) => (
                        <LayoutItem
                            redirectBase="publication"
                            createTime={item.CreateDate}
                            images={item.ImageList}
                            title={item.EnTitle}
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