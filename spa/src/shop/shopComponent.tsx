import { useState, useEffect } from "react";
import { IProduct } from '../shared/models/product';
import "./shop.css";
import PaginationComponent from "../shared/Components/paginationComponent";
import BrandsComponent from "./brandsComponent";
import TypesComponent from "./typesComponent";
import SortModule from "./sortComponent";
import SearchComponent from "../shared/Components/searchComponent";
import ProductsComponent from "./productsComponent";
import PagingHeaderComponent from "../shared/Components/pagingHeaderComponent";
import { ShopParams } from "../shared/models/shopParams";
import useAxios from "../core/interceptors/error.interceptor";
import { IPagination } from "../shared/models/paginationModel";

function ShopComponent() {
    const [products, setProducts] = useState<IProduct[]>();
    const [totalCount = 0, setTotalCount] = useState<number>();
    const { axiosInstance } = useAxios();

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
                console.log('i fire once');
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [shopParamsSelected/*, totalCount*/]);

    const getProducts = async function () {
        try {
            const params = new URLSearchParams(axiosInstance.getUri());

            if (shopParamsSelected.brandId !== 0) {
                params.append("brandId", shopParamsSelected.brandId.toString());
            }

            if (shopParamsSelected.typeId !== 0) {
                params.append("typeId", shopParamsSelected.typeId.toString());
            }

            if (shopParamsSelected.search) {
                params.append("search", shopParamsSelected.search.toString());
            }

            params.append("sort", shopParamsSelected.sort);
            params.append("pageIndex", shopParamsSelected.pageNumb.toString());
            params.append("pageSize", shopParamsSelected.pageSiz.toString());

            const resp: IPagination = (await axiosInstance.get(axiosInstance.getUri() + "/products?" + params.toString())).data;
            setProducts(resp.data);
            setTotalCount(resp.count);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
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
                        <BrandsComponent
                            brandIdSelected={shopParamsSelected.brandId}
                            setShopParamsSelected={setShopParamsSelected}
                            getProducts={getProducts}>
                        </BrandsComponent>
                    </div>

                    <h5 className="text-warning ml-3">Types</h5>
                    <div>
                        <TypesComponent
                            typeIdSelected={shopParamsSelected.typeId}
                            setShopParamsSelected={setShopParamsSelected}
                            getProducts={getProducts}>
                        </TypesComponent>
                    </div>

                </section>

                <section className="col-9">
                    <div className="d-flex justify-content-between align-items-center pb-2">

                        <div>
                            <PagingHeaderComponent
                                totalCount={totalCount}
                                pageNumber={shopParamsSelected.pageNumb}
                                pageSize={shopParamsSelected.pageSiz}>
                            </PagingHeaderComponent>
                        </div>

                        <div className="form-inline mt-2">
                            <SearchComponent
                                setShopParamsSelected={setShopParamsSelected}
                                getProducts={getProducts}>
                            </SearchComponent>
                        </div>

                    </div>

                    <div>
                        <ProductsComponent
                            prods={products}>
                        </ProductsComponent>
                    </div>

                    <div>
                        <PaginationComponent
                            totalcount={totalCount}
                            pageNumber={shopParamsSelected.pageNumb}
                            pageSize={shopParamsSelected.pageSiz}
                            setShopParamsSelected={setShopParamsSelected}
                            getProd={getProducts}>
                        </PaginationComponent>
                    </div>
                </section>
            </div>
        </div >
    );
}
export default ShopComponent;