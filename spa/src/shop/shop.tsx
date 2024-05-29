import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/products';
import ShopService from "../shared/services/shop.service";
import "./shop.css";
import PaginationModule from "../shared/modules/paginationModule";
import BrandsModule from "./brandsModule";
import TypesModule from "./typesModule";
import SortModule from "./sortModule";
import SearchModule from "../shared/modules/searchModule";
import ProductsModule from "./productsModule";
import PagingHeaderModule from "../shared/modules/pagingHeaderModule";
import { ShopParams } from "../shared/models/shopParams";

function Shop() {
    const [products, setProducts] = useState<IProduct[]>();
    const [totalCount = 0, setTotalCount] = useState<number>();

    const [shopParamsSelected, setShopParamsSelected] = useState<ShopParams>({
        brandId: 0,
        typeId: 0,
        sort: 'name',
        pageNumb: 1,
        pageSiz: 6,
        search: ''
    });

    useEffect(() => {
        (function () {
            try {
                getProducts();
                shopParamsSelected
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [shopParamsSelected, totalCount]);

    const getProducts = async () => {
        try {
            var response = await ShopService.getProducts(shopParamsSelected);
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
                        <SortModule
                            setShopParamsSelected={setShopParamsSelected}
                            getProducts={getProducts}>
                        </SortModule>
                    </div>

                    <h5 className="text-warning ml-3">Brands</h5>
                    <div>
                        <BrandsModule
                            brandIdSelected={shopParamsSelected.brandId}
                            setShopParamsSelected={setShopParamsSelected}
                            getProducts={getProducts}>
                        </BrandsModule>
                    </div>

                    <h5 className="text-warning ml-3">Types</h5>
                    <div>
                        <TypesModule
                            typeIdSelected={shopParamsSelected.typeId}
                            setShopParamsSelected={setShopParamsSelected}
                            getProducts={getProducts}>
                        </TypesModule>
                    </div>

                </section>

                <section className="col-9">
                    <div className="d-flex justify-content-between align-items-center pb-2">

                        <div>
                            <PagingHeaderModule
                                totalCount={totalCount}
                                pageNumber={shopParamsSelected.pageNumb}
                                pageSize={shopParamsSelected.pageSiz}>
                            </PagingHeaderModule>
                        </div>

                        <div className="form-inline mt-2">
                            <SearchModule
                                setShopParamsSelected={setShopParamsSelected}
                                getProducts={getProducts}>
                            </SearchModule>
                        </div>

                    </div>

                    <div>
                        <ProductsModule
                            prods={products}>
                        </ProductsModule>
                    </div>

                    <div>
                        <PaginationModule
                            totalcount={totalCount}
                            pageNumber={shopParamsSelected.pageNumb}
                            pageSize={shopParamsSelected.pageSiz}
                            setShopParamsSelected={setShopParamsSelected}
                            getProd={getProducts}>
                        </PaginationModule>
                    </div>
                </section>
            </div>
        </div >
    );
}
export default Shop;