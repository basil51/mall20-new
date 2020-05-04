import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'product.save': function (form, images) {
    return Images.insert(images, (err, _id) => {
      return Products.insert({
        form, imagesId: _id
      });
    })
  },

  'images.save': function (images) {
    images.foreach(image => {
      console.log('image:', image);
    })
    return 'Yes'
    //return Images.insert({   data:file   });
  },
  'image.remove': function (_id) {
    return Images.remove(_id)
  },

  'image.fetch': function (_id) {
    return Images.findOne(_id, { fields: { im0: 1 } });
  },

  'pro.save': function (form, images) {}

});

export const Categories = new Mongo.Collection('categories');
export const Sub = new Mongo.Collection('sub');
export const Products = new Mongo.Collection('products');
export const Images = new Mongo.Collection('images');
export const Products2 = new Mongo.Collection('products_view');