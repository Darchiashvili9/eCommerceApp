import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";
import ProductItem from "./product-item";
import { IBrand } from "../shared/models/brand";
import { IType } from "../shared/models/productType";

function Shop() {
    const [products, setProducts] = useState<IProduct[]>();
    const [brands, setBrands] = useState<IBrand[]>();
    const [types, setTypes] = useState<IType[]>();
    let brandIdSelected: number;
    let typeIdSelected: number;

  //  let [typeIdSelected, setTypeIdSelected] = useState<number>();


    const [active, setActive] = useState<any>();



    useEffect(() => {
        (function () {
            try {
                getProducts();
                getBrands();
                getTypes();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    async function getProducts() {
        try {
            setProducts(await ShopService.getProducts(brandIdSelected, typeIdSelected));
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getBrands() {
        try {
            setBrands([{ id: 0, name: "All" }, ...await ShopService.getBrands()]);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getTypes() {
        try {
            setTypes([{ id: 0, name: "All" }, ...await ShopService.getTypes()]);
        }
        catch (error) {
            console.log(error);
        }
    }

    const onBrandSelected = (id: number) => {
        brandIdSelected = id;
        getProducts();
    }

    const onTypeSelected = (id: number) => {
        typeIdSelected = id;
        getProducts();
    }

    return (
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
                        {
                            brands?.map((brand, index) =>
                                <li className={`list-group-item ${active == brand && 'active'}`}
                                    key={index}
                                    onClick={() => {
                                        onBrandSelected(brand.id);
                                        setActive(brand);
                                    }}>
                                    {brand.name}
                                </li>
                            )
                        }
                    </ul>
                    <h5 className="text-warning ml-3">Types</h5>
                    <ul className="list-group my-3">
                        {
                            types?.map((type, index) =>
                                <li className={`list-group-item ${active == type && 'active'}`}
                                    key={index}
                                    onClick={() => {
                                        onTypeSelected(type.id);
                                        getProducts();
                                        setActive(type);
                                    }}>
                                    {type.name}
                                </li>
                            )
                        }
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
                                products?.map((product, index) =>
                                    <div className="col-4 mb-4">
                                        <ProductItem prod={product} key={index} />
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