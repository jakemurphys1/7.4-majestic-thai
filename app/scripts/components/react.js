var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var myMenu = require("../menu.json")

var model = require("../model/model.js");


var ItemList = React.createClass({
  handleGetInfo:function(){
var thisModel = new model.Model(this.props.object);
    console.log(this.props.collection)
    thisModel.save()
    console.log(this.props.collection)
  },
  render:function(){
    var object = this.props.object;
    var Names = object.Name;
      var Price = "$" + (object.cost/100).toFixed(2);
    return(
      <div className="row">
        <div className="col-md-4 col-xs-4">
          <h3>Add to Order</h3>
          <p onClick = {this.handleGetInfo} className="checkoutItem">Add to Order</p>
        </div>
        <div className="name col-md-6 col-xs-6">
          <h3>Entry</h3>
          <p>{Names}</p>
        </div>
        <div className="name col-md-2 col-xs-2">
            <h3>Price</h3>
          <p>{Price}</p>
        </div>
      </div>
    )
  },
})

var CategoryList = React.createClass({
  render:function(){
    var Collection = this.props.collection;
      var Category=this.props.name;
      var object = this.props.object;

      var Items = Object.keys(this.props.object).map(function(key){
        return <ItemList collection = {Collection} key = {key} name = {key} object = {object[key]} />
      });
    return(
      <div className="col-md-6 foodlist">
        <div className="row"><h2>{Category}</h2></div>
        {Items}
      </div>
    )

  },
})

var TotalMenu = React.createClass({
  render: function(){
    var Collection = this.props.collection;
  var Menu = Object.keys(myMenu).map(function(key){
    return <CategoryList collection = {Collection} key = {key} name = {key} object = {myMenu[key]}/>
  });
    return (
      <div>
        <h1>Menu</h1>
        {Menu}
      </div>
    )
  },
})

module.exports= TotalMenu;
