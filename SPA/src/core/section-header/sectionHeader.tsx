function SectionHeader() {


    return (

        <div>

            <section className="py-5" style={{ marginTop: 105, backgroundColor: "aqua" }}>

                <div className="d-flex justify-content-between align-items-center my-2 my-md-0 mr-md-3 text-uppercase ">
                    <div className="col-9">

                        <h1>
                            esaa satauri
                        </h1>
                    </div>

                    <div className="col-3">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>



                    </div>

                </div>


            </section>



        </div>


    )


}

export default SectionHeader;