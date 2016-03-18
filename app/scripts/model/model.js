var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var myMenu = require("../menu.json")

var Model = Backbone.Model.extend({
   idAttribute: "_id",
});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
  initialize: function(){},
});

var OrderModel = Backbone.Model.extend({
   idAttribute: "_id",
});

var OrderCollection = Backbone.Collection.extend({
  model:Model,
  initialize: function(){},
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Jake-Thai/"
})

module.exports = {
  "Model":Model,
  "ModelCollection":ModelCollection,
  "OrderModel":OrderModel,
  "OrderCollection":OrderCollection,
}
