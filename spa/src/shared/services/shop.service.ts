import { IBrand } from "../models/brand";
import { IPagination } from "../models/paginationModel";
import { IType } from "../models/productType";
import { IProduct } from "../models/product";
import { ShopParams } from "../models/shopParams";
import useAxios from "../../core/interceptors/error.interceptor";




const ShopService = {


    getProducts: async function (shopParams: ShopParams) {


        const { axiosInstance } = useAxios();

        console.log(axiosInstance.getUri())
        const params = new URLSearchParams(axiosInstance.getUri());



        if (shopParams.brandId !== 0) {
            params.append("brandId", shopParams.brandId.toString());
        }

        if (shopParams.typeId !== 0) {
            params.append("typeId", shopParams.typeId.toString());
        }

        if (shopParams.search) {
            params.append("search", shopParams.search.toString());
        }

        params.append("sort", shopParams.sort);
        params.append("pageIndex", shopParams.pageNumb.toString());
        params.append("pageSize", shopParams.pageSiz.toString());

        const resp: IPagination = (await axiosInstance.get(axiosInstance.getUri() + "/products?" + params.toString())).data;
        return resp;
    },

    getBrands: async function () {

        const { axiosInstance } = useAxios();

        const response: IBrand[] = (await axiosInstance.get(axiosInstance.getUri() + '/products/brands')).data;
        return response;
    },

    getTypes: async function () {

        const { axiosInstance } = useAxios();

        const response: IType[] = (await axiosInstance.get(axiosInstance.getUri() + '/products/types')).data;
        return response;
    },

    getProduct: async function (id: number) {

        const { axiosInstance } = useAxios();

        const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/products/' + id)).data;
        return response;
    }
};
export default ShopService;