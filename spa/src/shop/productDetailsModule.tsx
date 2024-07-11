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
            setProduct(await ShopService.getProduct(+params.id!));
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="row" >

            <div className="col-6">
                <img src={product?.pictureUrl} alt={product?.name} className="img-fluid w-100"></img>


            </div>




        </div>
    );
}
export default ProductDetailsModule;