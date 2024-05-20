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

function ProductsModule({ prods }: { prods: IProduct[] | undefined }) {
    function currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                prods?.map((prod) =>
                    <div className="col-4 mb-4">
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
                    </div>
                )
            }
        </div>
    );
}
export default ProductsModule;