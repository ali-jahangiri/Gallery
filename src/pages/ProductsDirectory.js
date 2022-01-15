import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LayoutItem from "../components/LayoutItem";
import ProductCover from "../components/ProductCover";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const test = [
    "https://www.fahimehheydari.ir/Uploades/SQOIU3IGD7WFKVD0NVIKBLMX.png",
    "https://www.fahimehheydari.ir/Uploades/DIDWQF10P27OQGTUNXUWSCP.png",
    "https://www.fahimehheydari.ir/Uploades/BY0UHXSOEM7KRVXGAGOS9LQ69COW26IQX70YT8Y.png",
]


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
                            renderCoverImage={(redirectHandler) => <ProductCover onClick={redirectHandler} images={test.slice(0 , 3)} />}
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