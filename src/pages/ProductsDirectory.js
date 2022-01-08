import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const ProductsDirectory = ({ match : { params } }) => {
    const [allProduct, setAllProduct] = useState([]);
    const fetcher = useRequest();

    useEffect(function getAllProductsHandler() {
        fetcher(`${reqUrl.getAllProducts}${params.categoryId}`)
            .then(setAllProduct)
    } , []);


    return (
        <div className="productsDirectory container">
            <Layout label={{ fa : "محصولات" , en : "Products" }}>
                {
                    allProduct.map((product , i) => (
                        <LayoutItem 
                            key={i} 
                            title={product.EnName} 
                            images={product.ImageList}
                            redirectBase="product"
                            {...product}
                            createTime={product.CreateDate}
                        />
                    ))
                }
            </Layout>
        </div>
    )
}


export default ProductsDirectory;