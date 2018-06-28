'use strict';
// Step - 1 require the mongoose module

const mongoose = require("mongoose");
const dbconfig = require("./dbconfig");
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 90000
};
// mongoose.createConnection(dbconfig.dburl, option).then(function(){
//     //connected successfully
// }, function(err) {
//     //err handle
// });

// Step -2 Connect to the DB
mongoose.createConnection(dbconfig.dburl);
// mongoose.Promise = require('q').Promise;
mongoose.Promise = global.Promise;

module.exports = mongoose;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://DishLive:DishLive2018@ds115931.mlab.com:15931/dishlive');
// var db = mongoose.connection;
