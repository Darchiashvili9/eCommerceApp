import './App.css'
import Navbar from "./core/nav-bar/navbar"
import Routing from './core/routing';

function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="container">

                <Routing />

            </div>
        </div>
    );
}

export default App