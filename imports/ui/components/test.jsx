import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Products, Products2 } from '../../api/database';


class Test extends React.Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
        this.test = this.test.bind(this);
    }

    renderRows() {
        const data = {
            columns: [{
                label: 'Description',
                field: 'Description',
                width: 270
            },
            {
                label: 'Price',
                field: 'Price',
                width: 100
            },
            {
                label: 'Quntity',
                field: 'Quntity',
                width: 100
            },
            {
                label: 'Discount',
                field: 'Discount',
                width: 100
            },
            {
                label: 'Image',
                field: 'Image',
                width: 250
            }],
        }
        let rows = [];
        this.props.products.map((prod) => {
            rows.push({
                'Description': prod._id, 'Price': prod._id, 'Quntity': prod._id,
                'Discount': prod._id, 'Image': prod._id
            });
        })
        //console.log(prod);
        data.rows = rows;
        return (
            <MDBDataTable responsive striped bordered small data={data} />
        )
    }

    test() {
        console.log('test')
        console.log(this.props);
        this.props.products.map((prod) => {
            console.log(prod);
        })
        return (
            <p>pppp</p>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="view zoom overlay">
                    <img className="img-fluid" src="images/product_1.png" alt="Sample" />
                    <a href="#!">
                        <div className="mask waves-effect waves-light">
                            <img className="img-fluid w-100" src="images/product_1.png" />
                            <div className="mask rgba-black-slight waves-effect waves-light"></div>
                        </div>
                    </a>
                </div>

                <div className="mt-4">
                    <div className="row">

                        <div className="col-md-${this.state.cla} mb-5">
                            <div className="card">
                                <div className="view zoom overlay">
                                    <img className="img-fluid" src="images/product_1.png" alt="Sample" />
                                    <a href="#!">
                                        <div className="mask waves-effect waves-light">
                                            <img className="img-fluid w-100" src="images/product_1.png" />
                                            <div className="mask rgba-black-slight waves-effect waves-light"></div>
                                        </div>
                                    </a>
                                </div>

                                <div className="card-body text-center pt-4">
                                    <h5>Blue denim shirt</h5>
                                    <p className="mb-2 text-muted text-uppercase small">Shirts</p>
                                    <ul className="rating">
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                    </ul>
                                    <hr />
                                    <p><span className="mr-1"><strong>$17.99</strong></span></p>
                                    <button type="button" className="btn btn-primary btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                                    <button type="button" className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-info-circle pr-2"></i>Details</button>
                                    <button type="button" className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withTracker(() => {
    Meteor.subscribe('products');
    Meteor.subscribe('images');
    return { products: Products2.find({}).fetch() };
})(Test);
