import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";
import "./shop.css";

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


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked="1">
                            <div className="card shadow-sm" bis_skin_checked="1">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body" bis_skin_checked="1">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1">
                                        <div className="btn-group" bis_skin_checked="1">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>























    );
}

export default Shop;
