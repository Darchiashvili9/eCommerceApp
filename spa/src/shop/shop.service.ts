import { IPagination } from "../shared/models/pagination";




const ShopService = {
    getProducts: async function () {
        const resp = await fetch(baseUrl + '/products?pageSize=50');
        const response: IPagination = await resp.json();
        return response.data;
    },

    secondValidationMethod: function () {




    },

    thirdValidationMethod: function () {




    }
};



export const baseUrl = 'https://localhost:5001/api';
export default ShopService;