
function SearchModule({ setSearch }: { setSearch: Function }) {

    const onSearch = (event: any) => {
        setSearch(event.target.value);
        
        console.log('Value is:', event.target.value);
    };

    const onReset = (event: any) => {
        event.target.value = undefined;
        setSearch("");
    };

    return (
        <div>

            <input className="form-control mr-2" placeholder="Search" type="text" style={{ width: 300 }}
                onChange={onSearch}>
            </input>

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