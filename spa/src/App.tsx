import './App.css'
import Navbar from "./core/nav-bar/navbar"
import Shop from './shop/shop';




function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="container">

                <Shop />
            </div>

        </div>
    );
}

export default App
