import './App.css'
import Navbar from "./core/nav-bar/navbar"
import Routing from './routing';
import Shop from './shop/shop';




function App() {
    return (
        <div className="App">




            <Navbar />

            <Routing />


            <div className="container">
                <Shop />
            </div>

        </div>
    );
}

export default App
