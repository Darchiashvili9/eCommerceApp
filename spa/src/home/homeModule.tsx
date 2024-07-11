import Card from "react-bootstrap/esm/Card";
import CardImg from "react-bootstrap/esm/CardImg";

function HomeModule() {

    return (
        <div className="container">
            <div className="row">
                <section className="col-3">

                    <h5 className="text-warning ml-3">Sort</h5>
                    <div>
                        <select className="custom-select mb-3">
                        </select>



                    </div>

                    <h5 className="text-warning ml-3">Brands</h5>
                    <div>
                        aaaaaaaaa
                    </div>

                    <h5 className="text-warning ml-3">Types</h5>
                    <div>
                        bbbbbbbbbbbbbbbbb
                    </div>

                </section>

                <section className="col-9">
                    <div className="d-flex justify-content-between align-items-center pb-2">

                        <div>
                            
                        </div>

                        <div className="form-inline mt-2">
                            <input className="form-control mr-2" placeholder="Search" type="text" style={{ width: 300 }}
                            ></input>


                            <button className="btn btn-outline-primary my-2"
                            >
                                Search
                            </button>

                            <button className="btn btn-outline-success ml-2 my-2"
                            >
                                Reset
                            </button>
                        </div>

                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col-4 mb-4" >
                            

                            </div>

                        </div>
                    </div>

                    <div>
                        dddddddddddd
                    </div>
                </section>
            </div>
        </div >
    );
}
export default HomeModule;