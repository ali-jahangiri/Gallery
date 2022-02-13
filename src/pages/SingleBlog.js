import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";
import Spinner from "../components/Spinner";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import useKeyDistributor from "../hooks/useKeyDistributor";

const SingleBlog = ({ match : { params } , history }) => {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState({});
    const fetcher = useRequest();
    const distributor = useKeyDistributor();


    useEffect(function fetchSpecificBlogItemHandler() {
        if(params.id && !isNaN(params.id)) {
            fetcher(`${reqUrl.getSinglePost}${params.id}`)
                .then(data => {
                    setBlogData(data[0]);
                    setLoading(false);
                })
        }else history.push("")
    } , []);


    return (
        <div className={`singleBlog ${!loading ? "singleBlog--loaded" : ""}`}>
            <div className="container">
                {
                    loading ? <Spinner /> : <React.Fragment>
                        <div className="singleBlog__intro">
                            <h1>
                                {distributor(blogData , "EnTitle")}
                            </h1>
                            <p>{distributor(blogData , "EnShortDescription")}</p>
                        </div>
                        <div>
                            {Parser(distributor(blogData ,"EnDescription"))}
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}


export default SingleBlog;