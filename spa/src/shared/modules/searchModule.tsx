import { useState } from "react";

function SearchModule({ setShopParamsSelected, getProducts }: { setShopParamsSelected: Function, getProducts: Function }) {

    const [message, setMessage] = useState('');

    const onSearch = () => {
        setShopParamsSelected(message);
        getProducts();

        console.log('Value is:', message);
    };

    const onReset = (event: any) => {
        event.target.value = undefined;
        setShopParamsSelected("");
    };

    return (
        <div>
            <input className="form-control mr-2" placeholder="Search" type="text" style={{ width: 300 }}
                onChange={(ev) => {
                    setMessage(ev.target.value);
                }}
                value={message} />

            <button className="btn btn-outline-primary my-2"
                onClick={onSearch}>
                Search
            </button>

            <button className="btn btn-outline-success ml-2 my-2"
                onClick={onReset}>
                Reset
            </button>
        </div >
    );
}
export default SearchModule;