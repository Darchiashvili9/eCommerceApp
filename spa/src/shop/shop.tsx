import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";
import ProductItem from "./product-item";
import { IBrand } from "../shared/models/brand";
import { IType } from "../shared/models/productType";
import Pagination from 'react-bootstrap/Pagination';
import "./shop.css";
//import { ShopParams } from '../shared/models/ShopParams';

function Shop() {
    const [products, setProducts] = useState<IProduct[]>();
    const [brands, setBrands] = useState<IBrand[]>();
    const [types, setTypes] = useState<IType[]>();

    const [typeIdSelected = 0, setTypeIdSelected] = useState<number>();
    const [brandIdSelected = 0, setbrandIdSelected] = useState<number>();
    const [sortSelected = "name", setSortSelected] = useState<string>();

    const [pageNumber = 1, setPageNumber] = useState<number>();
    const [pageSize = 6, setPageSize] = useState<number>();
    const [totalCount = 0, setTotalCount] = useState<number>();

    const sortOptions =
        [
            { name: "Alphabetical", value: "name" },
            { name: "Price: Low to High", value: "priceAsc" },
            { name: "Price: High to Low", value: "priceDesc" },
        ];

    useEffect(() => {
        (function () {
            try {
                getProducts();
                getBrands();
                getTypes();

                brandIdSelected;
                typeIdSelected;
                sortSelected;
                pageNumber;
                pageSize;
                totalCount;
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [brandIdSelected, typeIdSelected, sortSelected, pageNumber, pageSize, totalCount]);

    async function getProducts() {
        try {
            var response = await ShopService.getProducts(brandIdSelected, typeIdSelected, sortSelected, pageNumber, pageSize);
            setProducts(response.data);
            //  setPageNumber(response.pageIndex);
            //  setPageSize(response.pageSize);
            setTotalCount(response.count);
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

    function getPaginationItems() {
        let active = pageNumber;
        let items = [];
        let page = totalCount / pageSize < 1 ? 1 : totalCount / pageSize;

        for (let number = 1; number <= page; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}
                    onClick={(event) => {
                        const element = event.target as HTMLInputElement
                        var numb: number = + element.innerText;
                        setPageNumber(numb);
                        getProducts();
                    }}>
                    {number < 2 ? 1 : number}
                </Pagination.Item>
            );
        }
        return items;
    }

    return (
        <div className="container">
            <div className="row">
                <section className="col-3">
                    <h5 className="text-warning ml-3">Sort</h5>
                    <select className="custom-select mb-3"
                        onChange={(ev) => {
                            setSortSelected(ev.target.value);
                            getProducts();
                        }}>
                        {
                            sortOptions.map((srt, index) =>
                                <option key={index} value={srt.value}>{srt.name}</option>
                            )
                        }
                    </select>
                    <h5 className="text-warning ml-3">Brands</h5>
                    <ul className="list-group my-3">
                        {
                            brands?.map((brand, index) =>
                                <li className={`list-group-item ${brandIdSelected == brand.id && 'active'}`}
                                    key={index}
                                    onClick={() => {
                                        setPageNumber(1);
                                        setbrandIdSelected(brand.id);
                                        getProducts();
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
                                <li className={`list-group-item ${typeIdSelected == type.id && 'active'}`}
                                    key={index}
                                    onClick={() => {
                                        setPageNumber(1);
                                        setTypeIdSelected(type.id);
                                        getProducts();
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
                                {totalCount && totalCount > 0 ?
                                        <div>
                                            <span >
                                                Showing
                                                <strong>
                                                    <br />{(pageNumber - 1) * pageSize + 1} - {(pageNumber) * pageSize
                                                        > totalCount
                                                        ? totalCount
                                                        : pageNumber * pageSize}
                                                </strong>
                                            </span>
                                            <span> of </span>
                                            <span>
                                                <strong>
                                                    {totalCount}
                                                </strong>
                                            </span>
                                            <span> Results </span>
                                        </div>
                                    :
                                        <div>
                                            <span>
                                                There are <strong> 0 </strong> results for this.
                                            </span>
                                        </div>
                                }
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

                    {totalCount > 0 ?
                        <div className="d-flex justify-content-center">
                            <Pagination size="sm">
                                <Pagination.First key={1}
                                    onClick={() => {
                                        setPageNumber(1);
                                        getProducts();
                                    }}>
                                </Pagination.First>

                                <Pagination.Prev key={pageNumber > 1 ? pageNumber - 1 : 1}
                                    onClick={() => {
                                        setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
                                        getProducts();
                                    }}>
                                </Pagination.Prev>

                                {getPaginationItems()}
                                {/*<Pagination.Ellipsis />*/}

                                <Pagination.Next key={pageNumber < totalCount / pageSize ? pageNumber + 1 : totalCount / pageSize}
                                    onClick={() => {
                                        setPageNumber(pageNumber < totalCount / pageSize ? pageNumber + 1 : totalCount / pageSize);
                                        getProducts();
                                    }}>
                                </Pagination.Next>

                                <Pagination.Last key={999}
                                    onClick={() => {
                                        setPageNumber(totalCount / pageSize);
                                        getProducts();
                                    }}>
                                </Pagination.Last>
                            </Pagination>
                        </div>
                        :
                        <div></div>
                    }
                </section>
            </div>
        </div >
    );







}

export default Shop;