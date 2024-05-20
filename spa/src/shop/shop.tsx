import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "./shop.service";
import "./shop.css";
import PaginationModule from "./paginationModule";
import BrandsModule from "./brandsModule";
import TypesModule from "./typesModule";
import SortModule from "./sortModule";
import ItemsPerPageShowing from "./itemsPerPageShowing";
import SearchModule from "./searchModule";
import ProductsModule from "./productsModule";

function Shop() {
    const [products, setProducts] = useState<IProduct[]>();

    const [typeIdSelected = 0, setTypeIdSelected] = useState<number>();
    const [brandIdSelected = 0, setbrandIdSelected] = useState<number>();
    const [sortSelected = "name", setSortSelected] = useState<string>();

    const [pageNumber = 1, setPageNumber] = useState<number>();
    const [pageSize = 6, setPageSize] = useState<number>();
    const [totalCount = 0, setTotalCount] = useState<number>();

    useEffect(() => {
        (function () {
            try {
                getProducts();

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

    const getProducts = async () => {
        try {
            var response = await ShopService.getProducts(brandIdSelected, typeIdSelected, sortSelected, pageNumber, pageSize);
            setProducts(response.data);
            setTotalCount(response.count);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <section className="col-3">

                    <h5 className="text-warning ml-3">Sort</h5>
                    <div>
                        <SortModule setSortSelected={setSortSelected} getProducts={getProducts} />
                    </div>

                    <h5 className="text-warning ml-3">Brands</h5>
                    <div>
                        <BrandsModule brandIdSelected={brandIdSelected} setPageNumber={setPageNumber}
                            setbrandIdSelected={setbrandIdSelected} getProducts={getProducts} />
                    </div>

                    <h5 className="text-warning ml-3">Types</h5>
                    <div>
                        <TypesModule typeIdSelected={typeIdSelected} setPageNumber={setPageNumber}
                            setTypeIdSelected={setTypeIdSelected} getProducts={getProducts} />
                    </div>

                </section>
                <section className="col-9">
                    <div className="d-flex justify-content-between align-items-center pb-2">
                        <div>
                            <ItemsPerPageShowing totalCount={totalCount} pageNumber={pageNumber} pageSize={pageSize} />
                        </div>

                        <div className="form-inline mt-2">
                            <SearchModule/>
                        </div>
                    </div>

                    <div>
                            <ProductsModule prods={products} />
                    </div>

                    <div>
                        <PaginationModule totalcount={totalCount} pageNumber={pageNumber} pageSize={pageSize}
                            setPageNumb={setPageNumber} getProd={getProducts} />
                    </div>
                </section>
            </div>
        </div >
    );
}
export default Shop;