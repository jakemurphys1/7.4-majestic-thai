var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

//local
var MenuList = require("./components/react.js");
var model = require("./model/model.js");

var OrderModel = new model.Model();
var OrderCollection = new model.ModelCollection()


ReactDOM.render(<MenuList collection = {OrderCollection} model = {OrderModel} />,document.getElementById("container"))
