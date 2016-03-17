var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var myMenu = require("../menu.json")

var Model = Backbone.Model.extend({

});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
})

module.exports = {
  "Model":Model,
  "ModelCollection":ModelCollection
}
