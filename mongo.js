var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

var ObjectId = require('mongodb').ObjectID;



var insertDocument = function(db, callback) {
       db.collection('restaurants').insertOne( {
                 "address" : {
                              "street" : "2 Avenue",
                    "zipcode" : "10075",
                    "building" : "1480",
                    "coord" : [ -73.9557413, 40.7720266 ]
                 },
                 "borough" : "Hemulin perse",
                 "cuisine" : "Italian",
                 "grades" : [
                    {
                                    "date" : new Date("2014-10-01T00:00:00Z"),
                       "grade" : "A",
                       "score" : 11
                    },
                    {
                                    "date" : new Date("2014-01-16T00:00:00Z"),
                       "grade" : "B",
                       "score" : 17
                    }
             ],
                       "name" : "Vella",
                             "restaurant_id" : "41704620"
                                    }, function(err, result) {
                                            assert.equal(err, null);
                                                console.log("Inserted a document into the restaurants collection.");
                                                    callback();
                                                      });
};


//Find from a array:

var findRestaurants = function(db, callback) {
       var cursor =db.collection('restaurants').find( { "grades.grade": "B" } );
          cursor.each(function(err, doc) {
                    assert.equal(err, null);
                          if (doc != null) {
                                       console.dir(doc);
                                             } else {
                                                          callback();
                                                                }
                             });
};

MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);

        findRestaurants(db, function() {
                  db.close();
                    });
})



//Find Restaurants with specific data
var findRestaurants = function(db, callback) {
       var cursor =db.collection('restaurants').find( { "borough": "Manhattan" } );
          cursor.each(function(err, doc) {
                    assert.equal(err, null);
                          if (doc != null) {
                                       console.dir(doc);
                                             } else {
                                                          callback();
                                                                }
                             });
};


//MongoClient.connect(url, function(err, db) {
//      assert.equal(null, err);
//        insertDocument(db, function() {
//                  db.close();
//                    });
//});

//MongoClient.connect(url, function(err, db) {
//      assert.equal(null, err);
//        findRestaurants(db, function() {
//                  db.close();
//                    });
//});


//var findRestaurants = function(db, callback) {
//       var cursor =db.collection('restaurants').find( { "address.zipcode": "10075" } );
//          cursor.each(function(err, doc) {
//                    assert.equal(err, null);
//                          if (doc != null) {
//                                       console.dir(doc);
//                                             } else {
//                                                          callback();
//                                                                }
//                             });
//};
//
//MongoClient.connect(url, function(err, db) {
//      assert.equal(null, err);
//
//        findRestaurants(db, function() {
//                  db.close();
//                    });
//});



//var findRestaurants = function(db, callback) {
//       var cursor =db.collection('restaurants').find( );
//          cursor.each(function(err, doc) {
//                    assert.equal(err, null);
//                          if (doc != null) {
//                                       console.dir(doc);
//                                             } else {
//                                                          callback();
//                                                                }
//                             });
//};

//MongoClient.connect(url, function(err, db) {
//      assert.equal(null, err);
//      findRestaurants(db, function() {
//                  db.close();
//                    });
//});
