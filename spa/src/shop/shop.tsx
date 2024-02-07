import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";

function Shop() {
    var [products, setProducts] = useState<IProduct[]>();
    //const [, setError] = useState("");

    useEffect(() => {
        (async function () {
            try {
                setProducts(await ShopService.getProducts());
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(products =>
                        <tr key={products.description}>
                            <td>{products.name}</td>
                            <td>{products.id}</td>
                            <td>{products.pictureUrl}</td>
                            <td>{products.productBrand}</td>
                            <td>{products.productType}</td>
                            <td>{products.price}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>









    );
}

export default Shop;
