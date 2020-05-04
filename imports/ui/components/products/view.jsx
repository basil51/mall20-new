import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../../../api/database';

class Viewimages extends React.Component {
    removeImage(id) {
        Meteor.call('image.remove', id)
    }
    renderimages() {
        console.log(this.props.images);
        return this.props.images.map((image) => {
            return (
                <div key={image._id} >
                    <img src={image.img0} />
                    <img src={image.test} />

                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <ul className="w-100" >
                    <div className="user-list">
                        {this.renderimages()}
                    </div>
                </ul>
            </div>
        );
    }
};

export default withTracker(() => {
    Meteor.subscribe('images');
    return { images: Images.find({}).fetch() };
})(Viewimages);