import { useEffect, useState } from "react";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const SingleExhibition = ({ match : { params } }) => {
    const [exhibition, setExhibition] = useState(null);
    const fetcher = useRequest();

    useEffect(function getExhibitionHandler() {
        fetcher(`${reqUrl.getSingleExhibition}${params.id}`)
            .then(data => {
                console.log(data);
            })
    } , []);


    return (
        <div className="singleExhibition">

        </div>
    )
}

export default SingleExhibition;