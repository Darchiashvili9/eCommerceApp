
function SortModule({ setSortSelected, getProducts }: { setSortSelected: Function, getProducts: Function }) {

    const sortOptions =
        [
            { name: "Alphabetical", value: "name" },
            { name: "Price: Low to High", value: "priceAsc" },
            { name: "Price: High to Low", value: "priceDesc" },
        ];

    return (
        <select className="custom-select mb-3"
            onChange={(ev) => {
                setSortSelected(ev.target.value);
                getProducts();
            }}>
            {
                sortOptions.map((srt, index) =>
                    <option key={index} value={srt.value}>{srt.name}</option>
                )
            }
        </select>
    );
}
export default SortModule;