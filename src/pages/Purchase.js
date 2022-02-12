import { useEffect, useState } from "react";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";


const Purchase = () => {
    const [categoryList, setCategoryList] = useState([]);
    const fetcher = useRequest();


    useEffect(function getProductCategory(){
        fetcher(reqUrl.getCategories)
            .then(setCategoryList)
    } , []);

    return (
        <div className="purchase container">
            <Layout label={{ fa : "دسته بندی" , en : "Categories" }}>
                {
                    categoryList.map((category , index) => 
                        <LayoutItem
                            redirectBase="products"
                            key={index}
                            images={category.ImageList}
                            {...category} 
                            title={category.CategoryName} />)
                }
            </Layout>
        </div>
    )
}

export default Purchase;