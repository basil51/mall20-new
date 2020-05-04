import React from 'react';
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBDataTable, MDBInput, MDBBtn } from "mbd";
import Upload from './uploader'
import { withTracker } from 'meteor/react-meteor-data';
import { Categories, Sub, Products2 } from '../../../api/database';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

class Tabs2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeB: "2", fo: {} };
        this.saveProduct = this.saveProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle = tab => e => {
        if (this.state.activeB != tab) {
            this.setState({ activeB: tab });
        }
    };

    handlesub(e) {
        Session.set('cat', e.target.value);
    }

    handleChange() {
        const target = event.target, value = target.value, name = target.name;
        if (name)
            this.setState(state => {
                let fo = state.fo;
                Object.assign(fo, { [name]: value });
                return { fo }
            })
    }

    productList() {
        const data = {
            columns: [
                { label: 'Description', field: 'Description', width: 270 },
                { label: 'Price', field: 'Price', width: 100 },
                { label: 'Quntity', field: 'Quntity', width: 100 },
                { label: 'Image', field: 'Image', width: 250 }],
            rows: []
        }
        this.props.products.map(prod => {
            data.rows.push({
                'Description': prod.form.descrition, 'Price': prod.form.price, 'Quntity': prod.form.quntity,
                'Image': <img src={prod.images.img0} width="80px" />
            });
        })
        return (<MDBDataTable responsive striped bordered small data={data} />
        )
    }

    saveProduct(e) {
        e.preventDefault();
        const divs = document.getElementById('gallery').childNodes; let images = {};
        divs.forEach((div, index) => {
            const imag = div.getElementsByTagName('IMG')[0];
            const ind = 'img' + index;
            Object.assign(images, { [ind]: imag.src })
        });
        Meteor.call('product.save', this.state.fo, images, (err, prodId) => {
            if (err) alert(err)
            else {
                alert('Your Product Saved Successfully');
                document.getElementById('proform').reset();
            }
        });

    }

    renderproduct() {
        return (
            <div className="section">
                <h5 className="mt-3">Product Information</h5><hr />
                <label>Description:</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                            <i className="fas fa-pencil-alt prefix"></i>
                        </span>
                    </div>
                    <textarea name="descrition" className="form-control" rows="2"></textarea>
                </div>
                <div className="d-flex justify-content-between">
                    <MDBInput name="price" label="Price" outline />
                    <MDBInput name="quntity" label="Quntity" outline />
                    <MDBInput name="discount" label="Discount" outline />
                </div>
                <div>
                    <h5 className="mt-3">Product Images</h5><hr />
                    <Upload />
                </div>
            </div>
        )
    }


    rendersub() {
        return (
            <div className="p-2">
                <div className="text-bold mt-2">Sub Category</div>
                <select name="sub" defaultValue="#">
                    <option disabled value="#">-- Select Sub Category --</option>
                    {this.props.sub.map((sub) => {
                        return (<option value={sub._id} key={sub._id}>{sub.en}</option>)
                    })}
                </select>
            </div>
        )
    }

    rendercat() {
        return (
            <div className="p-2">
                <div className="text-bold">Categories</div>
                <select name="cat" data-role="select" onChange={this.handlesub} defaultValue="#">
                    <option disabled value="#">-- Select Category --</option>
                    {this.props.categories.map((cat) => {
                        return (<option value={cat._id} key={cat._id}>{cat.en}</option>)
                    })}
                </select>
            </div>
        )
    }

    render() {
        return (
            <>
                <h4>Store Name</h4>
                <MDBNav className="nav-tabs mt-2" >
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeB === "1"} onClick={this.toggle('1')} role="tab" >
                            Store Settings
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeB === "2"} onClick={this.toggle('2')} role="tab" >
                            Products
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeB === "3"} onClick={this.toggle('3')} role="tab" >
                            Add products
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>

                <MDBTabContent activeItem={this.state.activeB} >
                    <MDBTabPane tabId="1" role="tabpanel">
                        <p>test</p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                        {this.productList()}
                    </MDBTabPane>
                    <MDBTabPane tabId="3" role="tabpanel">
                        <form name="proform" onSubmit={this.saveProduct} onChange={this.handleChange} className="w-100">
                            <div className="">
                                <div className="d-flex align-items-baseline flex-wrap">
                                    {this.rendercat()}
                                    {this.rendersub()}
                                </div>
                                {this.renderproduct()}
                                <div className="mt-4 text-center">
                                    <MDBBtn type="submit" color="primary" rounded>Save Product</MDBBtn>
                                </div>
                            </div>
                        </form>
                    </MDBTabPane>
                </MDBTabContent>
            </>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('categories');
    Meteor.subscribe('products');
    Tracker.autorun(() => { Meteor.subscribe('sub', { cat: Session.get('cat') }); })
    return {
        categories: Categories.find({}).fetch(),
        sub: Sub.find({}).fetch(),
        products: Products2.find({}).fetch(),
    };
})(Tabs2);