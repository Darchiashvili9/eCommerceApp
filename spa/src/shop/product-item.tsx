import Card from "react-bootstrap/esm/Card";
import { IProduct } from "../shared/models/products";
import { CardImg } from "react-bootstrap";

var styles = {
    btnGroup: {
        width: '100%'
    },
    btn: {
        width: '50%'
    }
};

function ProductItem({ prod }: { prod: IProduct }) {
    function currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Card className="card h-100 shadow-sm">
            <CardImg className="card-img-top img-fluid bg-info" role="img" src={prod.pictureUrl} style={{ maxHeight: "300px" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <a href="#" className='text-uppercase'>
                        {prod.name}
                    </a>
                </Card.Title>
                <Card.Title className="mb-2">{currencyFormat(prod.price)}</Card.Title>
                <div className="btn-group mt-auto" style={styles.btnGroup}>
                    <button type="button" className="btn  btn-outline-secondary fa fa-shopping-cart mr-2" style={styles.btn}></button>
                    <button type="button" className="btn  btn-outline-secondary" style={styles.btn}>View</button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductItem;