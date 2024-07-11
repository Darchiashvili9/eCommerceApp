import { useEffect, useState } from "react";
import ShopService from "../shared/services/shop.service";
import { IProduct } from "../shared/models/product";
import { useParams } from "react-router-dom";

function ProductDetailsModule() {

    const params = useParams();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        (function () {
            try {
                getProduct();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const getProduct = async function () {
        try {
            setProduct(await ShopService.getProduct(params!.id!.toString()));

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>{product?.name}</h1>
        </div>
    );
}
export default ProductDetailsModule;