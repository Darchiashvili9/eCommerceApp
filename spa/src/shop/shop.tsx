import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";
import "./shop.css";
import ProductItem from "./product-item";

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
        //<div>
        //    <table className="table table-striped" aria-labelledby="tabelLabel">
        //        <thead>
        //            <tr>
        //                <th>Date</th>
        //                <th>Temp. (C)</th>
        //                <th>Temp. (F)</th>
        //                <th>Summary</th>
        //                <th>Summary</th>
        //            </tr>
        //        </thead>
        //        <tbody>
        //            {products?.map(products =>
        //                <tr key={products.description}>
        //                    <td>{products.name}</td>
        //                    <td>{products.id}</td>
        //                    <td>{products.pictureUrl}</td>
        //                    <td>{products.productBrand}</td>
        //                    <td>{products.productType}</td>
        //                    <td>{products.price}</td>

        //                </tr>
        //            )}
        //        </tbody>
        //    </table>
        //</div>





        <div className="container">
            <div className="row">
                <section className="col-3">
                    <h5 className="text-warning ml-3">Sort</h5>

                    <select className="custom-select mb-3">
                        <option>Alphabetical</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>

                    <h5 className="text-warning ml-3">Brands</h5>
                    <ul className="list-group my-3">
                        <li className="list-group-item active" aria-current="true">An active item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                    <h5 className="text-warning ml-3">Types</h5>
                    <ul className="list-group my-3">
                        <li className="list-group-item active" aria-current="true">An active item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </section>
                <section className="col-9">
                    <div className="d-flex justify-content-between align-items-center pb-2">
                        <header>
                            <span>Showing <strong>10</strong> of <strong>16</strong> results</span>
                        </header>
                        <div className="form-inline mt-2">
                            <input className="form-control mr-2" placeholder="Search" type="text" style={{ width: 300 }}></input>
                            <button className="btn btn-outline-primary my-2">Search</button>
                            <button className="btn btn-outline-success ml-2 my-2">Reset</button>

                        </div>
                    </div>



                    <div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                products?.map((ind) =>
                                    <div key={ind.id} className="col">
                                        <ProductItem />
                                    </div>
                                )
                            }
                        </div>
                    </div>



                </section>
            </div>
        </div>
    );
}

export default Shop;