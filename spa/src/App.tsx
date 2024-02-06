import './App.css'
import navbar from "./Components/nav-bar/navbar"
import { useEffect, useState } from 'react';


interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
function App() {
    async function populateWeatherData() {
        const response = await fetch('https://localhost:5001/weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }

    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);


    const contents = forecasts === undefined
        ? <p>Loading... Please refresh once the ASP.NET backend has started </p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
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
