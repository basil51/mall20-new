import { Meteor } from 'meteor/meteor';
import { Categories, Sub, Images, Products, Products2 } from "../imports/api/database";


Meteor.startup(() => {

  Meteor.publish('categories', function () {
    return Categories.find({});
  });

  Meteor.publish('images', function () {
    return Images.find({});
  });
  /*
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:3001/";

    MongoClient.connect(url,{ useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("meteor");
      dbo.collection("products_view").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
    */

  Meteor.publish('sub', function (req) {
    //if (this.changed) console.log(req.cat);
    return Sub.find({ cat: { $eq: req.cat } })
  });

  Meteor.publish('products', function(req) {
    console.log(req)
    if (!req) return Products2.find({})
   return Products2.find({ 'form.descrition': {$regex: req , $options:"i"}})
  });

});

    //return Products.aggregate([{ $lookup: { from: 'images', localField: 'imagesId', foreignField: '_id', as: 'images' }}]).find({})

/*      var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:3001/", { useUnifiedTopology: true }, (err, db) => {
      if (err) throw err;
      var dbo = db.db("meteor");
      dbo.collection('products').aggregate([
        {
          $lookup:
          {
            from: 'images',
            localField: 'imagesId',
            foreignField: '_id',
            as: 'images'
          }
        }
      ]).toArray(function (err, res) {

      //});
        return (res);
      });
    });
    */
