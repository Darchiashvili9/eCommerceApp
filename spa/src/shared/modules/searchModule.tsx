import { useState } from "react";

function SearchModule({ setSearch, getProducts }: { setSearch: Function, getProducts: Function }) {

    const [message, setMessage] = useState('');

    const onSearch = () => {
        setSearch(message);
        getProducts();

        console.log('Value is:', message);
    };

    const onReset = (event: any) => {
        event.target.value = undefined;
        setSearch("");
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