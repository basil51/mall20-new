import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Categories, Products2 } from '../../api/database';
import { Session } from 'meteor/session';
import { MDBRangeInput, MDBRow, MDBContainer } from "mbd";

class Searchp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cla: '4' , search :this.props.location.state.search };

        this.onRangeValueChange = this.onRangeValueChange.bind(this)
    }

    displayProducts() {
        console.log(this.props.products)
        return this.props.products.map(prod => {
            return (
                <div className={`col-md-${this.state.cla} mb-5`} key={prod._id}>
                    <div className="card">
                        <div className="view zoom overlay" style={{ height: 95 * this.state.cla - 30 }}>
                            <span className="badge1">Sale</span>
                            <img className="img-fluid w-100" src={prod.images.img0} style={{ height: "100%" }} />
                        </div>
                        <div className="card-body pt-2 mylink">
                            <a className="mylink" href="#">{prod.form.descrition}</a>
                            <div className="my-1 text-muted text-uppercase small d-flex justify-content-between">
                                {this.props.categories[prod.form.cat - 1].en}
                                <div> <i className="fas fa-star fa-sm text-primary"></i>4.7</div>
                            </div>
                            <hr />
                            <span className="mr-1"><strong>US ${(Math.round(prod.form.price * 100) / 100).toFixed(2)}</strong></span>
                            <button type="button" className="btn btn-primary btn-md px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fas fa-cart-plus"></i></button>
                            <button type="button" className="btn btn-danger btn-md px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    onRangeValueChange() {
        alert(
            'hello'
        )
    }

    render() {

        return (
            <div className="container">
                <div className="my-4">
                    <div className="row">
                        <div className="col-sm">One of three columns</div>
                        <div className="col-sm">One of three columns</div>
                        <div className="d-flex justify-content-center">
                            <MDBRow center>
                                <span className="font-weight-bold indigo-text mr-2">0</span>
                                <MDBRangeInput
                                    min={2}
                                    max={6}
                                    value={4}
                                    formClassName="w-25"
                                    rangeValueChange={this.onRangeValueChange}
                                />
                                <span className="font-weight-bold indigo-text ml-2">100</span>
                            </MDBRow>


                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        {this.displayProducts()}
                        <div className={`col-md-${this.state.cla} mb-5`}>
                            <div className="card">
                                <div className="view zoom overlay maxh">
                                    <img className="img-fluid w-100" src="images/product_1.png" alt="Sample" />
                                    <a href="#!">
                                        <div className="mask waves-effect waves-light">
                                            <img className="img-fluid w-100" src="images/product_1.png" />
                                            <div className="mask rgba-black-slight waves-effect waves-light"></div>
                                        </div>
                                    </a>
                                </div>

                                <div className="card-body text-center pt-2 mylink">
                                    <a className="mylink" href="#">Blue denim shirt</a>
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
                        <div className={`col-md-${this.state.cla} mb-5`}>
                            <div className="card">
                                <div className="view zoom overlay maxh">
                                    <img className="img-fluid w-100" src="images/product_16.png" alt="Sample" />
                                </div>

                                <div className="card-body text-center pt-2 mylink">
                                    <a className="mylink" href="#">Blue Hodies</a>
                                    <p className="mb-2 text-muted text-uppercase small">Hoodies</p>
                                    <ul className="rating">
                                        <li>
                                            <i className="fas fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-primary"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-primary"></i>
                                        </li>
                                    </ul>
                                    <hr />
                                    <p><span className="mr-1"><strong>$35.99</strong></span></p>
                                    <button type="button" className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-info-circle pr-2"></i>Details</button>
                                    <button type="button" className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>

                                </div>

                            </div>


                        </div>
                        <div className={`col-md-${this.state.cla} mb-5`}>
                            <div className="card">
                                <div className="view zoom overlay maxh">
                                    <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" alt="Sample" />

                                </div>
                                <div className="card-body text-center pt-2 mylink">
                                    <a className="mylink" href="#">Nice Sweaters</a>
                                    <p className="mb-2 text-muted text-uppercase small">Sweaters</p>
                                    <ul className="rating">
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li>4.5</li>
                                    </ul>
                                    <hr />
                                    <p><span className="text-danger mr-1"><strong>$21.99</strong></span><span className="text-grey"><strong><s>$36.99</s></strong></span></p>
                                    <button type="button" className="btn btn-primary btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                                    <button type="button" className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-info-circle pr-2"></i>Details</button>
                                    <button type="button" className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-${this.state.cla} mb-5`}>
                            <div className="card">
                                <div className="view zoom overlay maxh">
                                    <img className="img-fluid w-100" src="images/new.jpg" alt="Sample" />

                                </div>
                                <div className="card-body text-center pt-2 mylink">
                                    <a className="mylink" href="#">Grey sweater</a>
                                    <p className="mb-2 text-muted text-uppercase small">Sweaters</p>
                                    <ul className="rating">
                                        <li><i className="fas fa-star fa-sm text-primary"></i></li>
                                        <li>4.2</li>

                                    </ul>
                                    <hr />
                                    <p><span className="text-danger mr-1"><strong>$21.99</strong></span><span className="text-grey"><strong><s>$36.99</s></strong></span></p>
                                    <button type="button" className="btn btn-primary btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                                    <button type="button" className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i className="fas fa-info-circle pr-2"></i>Details</button>
                                    <button type="button" className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker((props) => {
    let search ='';
    if (props.location.state.search) search= props.location.state.search;
    console.log(search);
    Meteor.subscribe('categories');
    Meteor.subscribe('products', search);
    return {
        categories: Categories.find({}).fetch(),
        products: Products2.find({}).fetch(),
    };
})(Searchp);