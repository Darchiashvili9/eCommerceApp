import Card from "react-bootstrap/esm/Card";
import { IProduct } from "../shared/models/products";
import { CardImg } from "react-bootstrap";



function ProductItem({ prod }: { prod: IProduct }) {
    function currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    return (

        <Card className="card h-100 shadow-sm">
            <CardImg className=" card-img-top" role="img" src={prod.pictureUrl} style={{ maxHeight: "300px" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <a href="#" className='text-uppercase'>
                        {prod.name}
                    </a>
                </Card.Title>
                <Card.Title className="mb-2">{currencyFormat(prod.price)}</Card.Title>
                <div className="btn-group mt-auto">
                    <button type="button" className="btn  btn-outline-secondary fa fa-shopping-cart mr-2"></button>
                    <button type="button" className="btn  btn-outline-secondary">View</button>
                </div>
            </Card.Body>
        </Card>





        //<div className="card h-100 shadow-sm">
        //    <img src={prod.pictureUrl} alt={prod.name} className="card-img-top"/>

        //    <div className="card-body d-flex flex-column">
        //        <a href="#">
        //            <h6 className="text-uppercase">{prod.name}</h6>
        //        </a>
        //        <span className="card-title mb-2">{currencyFormat(prod.price)}</span>

        //        <div className="btn-group mt-auto">
        //            <button type="button" className="btn  btn-outline-secondary fa fa-shopping-cart mr-2"></button>
        //            <button type="button" className="btn  btn-outline-secondary">View</button>
        //        </div>

        //    </div>
        //</div>







    );
}

export default ProductItem;