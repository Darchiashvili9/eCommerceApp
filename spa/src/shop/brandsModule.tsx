import { useEffect, useState } from "react";
import { IBrand } from "../shared/models/brand";
import ShopService from "../shared/services/shop.service";

function BrandsModule({ brandIdSelected, setPageNumber, setbrandIdSelected, getProducts }
    : { brandIdSelected: number, setPageNumber: Function, setbrandIdSelected: Function, getProducts: Function }) {

    const [brands, setBrands] = useState<IBrand[]>();

    useEffect(() => {
        (function () {
            try {
                getBrands();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const getBrands = async () => {
        try {
            setBrands([{ id: 0, name: "All" }, ...await ShopService.getBrands()]);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
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
    );
}
export default BrandsModule;