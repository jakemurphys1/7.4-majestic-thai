var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

//local
var MenuList = require("./components/react.jsx");
var model = require("./model/model.js");
var MyCheckout = require("./components/Checkout.jsx");

var OrderModel = new model.Model();
var OrderCollection = new model.ModelCollection()



var MenuRouter = Backbone.Router.extend({
  routes:{
    "":"menu",
    "checkout":"checkout",
    "menu":"menu"
  },
  initialize:function(){

  },
  menu:function(){
ReactDOM.render(<MenuList collection = {OrderCollection} model = {OrderModel} router={this} />,document.getElementById("container"))
  },
  checkout:function(){
ReactDOM.render(<MyCheckout collection = {OrderCollection} model = {OrderModel} router={this}/>,document.getElementById("container"))
  },
})

var router = new MenuRouter();


  ReactDOM.render(<MenuList collection = {OrderCollection} model = {OrderModel} router={router} />,document.getElementById("container"))
  //ReactDOM.render(<MyCheckout collection = {OrderCollection} model = {OrderModel}/>,document.getElementById("container"))


Backbone.history.start();
