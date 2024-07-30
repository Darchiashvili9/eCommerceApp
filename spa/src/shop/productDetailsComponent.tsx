import { useEffect, useState } from "react";
import ShopService from "../shared/services/shop.service";
import { IProduct } from "../shared/models/product";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import useAxios from "../core/interceptors/error.interceptor";

function ProductDetailsComponent() {

    const params = useParams();
    const [product, setProduct] = useState<IProduct>();
    const { axiosInstance } = useAxios();

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
            const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/products/' + +params.id!)).data;
            setProduct(await response);
        }
        catch (error) {
            console.log(error);
        }
    }
    function currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return product ? (
        <div className="row">
            <div className="col-6">
                <Image src={product.pictureUrl} alt={product.name} fluid width="100%" height="auto" style={{ maxHeight: "1000px" }} ></Image>
            </div>
            <div className="col-6">
                <h3>{product.name}</h3>
                <p>{currencyFormat(product.price)}</p>
                <div className="d-flex justify-content-start align-item-center">
                    <i className="fa fa-minus-circle text-warning mr-2" style={{ cursor: "pointer", fontSize: "2em" }}></i>
                    <span className="font-weight-bold" style={{ fontSize: "1.5em" }}>2</span>
                    <i className="fa fa-plus-circle text-warning mx-2" style={{ cursor: "pointer", fontSize: "2em" }}></i>
                    <button className="btn btn-outline-secondary btn-lg ml-4">Add to Cart</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 ml-3">
                    <h4>Describtion</h4>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    ) : (
        <div>


        </div>
    );
}
export default ProductDetailsComponent;