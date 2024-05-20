import { useEffect, useState } from "react";
import { IType } from "../shared/models/productType";
import ShopService from "./shop.service";

function TypesModule({ typeIdSelected, setPageNumber, setTypeIdSelected, getProducts }:
    { typeIdSelected: number, setPageNumber: Function, setTypeIdSelected: Function, getProducts: Function }) {
    const [types, setTypes] = useState<IType[]>();

    useEffect(() => {
        (function () {
            try {
                getTypes();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    async function getTypes() {
        try {
            setTypes([{ id: 0, name: "All" }, ...await ShopService.getTypes()]);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
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
    );
}
export default TypesModule;