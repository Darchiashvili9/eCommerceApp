import './App.css'
import { IPagination } from './Components/models/pagination';
import { IProduct } from './Components/models/products';
import navbar from "./Components/nav-bar/navbar"
import { useEffect, useState } from 'react';



function App() {
    async function populateWeatherData() {
        const resp = await fetch('https://localhost:5001/api/products?pageSize=50');
        const response: IPagination = await resp.json();

        console.log(response.data)

        setForecasts(response.data);
    }

    const [products, setForecasts] = useState<IProduct[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);


    const contents = products === undefined
        ? <p>Loading... Please refresh once the ASP.NET backend has started </p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {products.map(products =>
                    <tr key={products.description}>
                        <td>{products.name}</td>
                        <td>{products.id}</td>
                        <td>{products.pictureUrl}</td>
                        <td>{products.productBrand}</td>
                        <td>{products.productType}</td>
                        <td>{products.price}</td>

                    </tr>
                )}
            </tbody>
        </table>;






    return (

        <div className="App">

            {navbar()}

            <div className="container">
                <h1>
                    spa
                </h1>

                <p>This component demonstrates fetching data from the server.</p>
                {contents}

            </div>

        </div>
    );
}

export default App
