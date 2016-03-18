var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var myMenu = require("../menu.json")

var model = require("../model/model.js");


var ItemList = React.createClass({
  handleGetInfo:function(){
var thisModel = new model.Model(this.props.object);
    this.props.collection.add(thisModel)
    console.log("The Model you just clicked is: " , thisModel)
$(".confirmForm").removeClass("invisible");
setTimeout(function(){
  $(".confirmForm").addClass("invisible");
},2000)


  },
  render:function(){
    var object = this.props.object;
    var Names = object.Name;
      var Price = "$" + (object.cost/100).toFixed(2);
    return(
      <div className="row">
        <div className="col-md-4 col-xs-4">
          <p onClick = {this.handleGetInfo} className="checkoutItem">Add to Order</p>
        </div>
        <div className="name col-md-6 col-xs-6">
          <p>{Names}</p>
        </div>
        <div className="name col-md-2 col-xs-2">
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
          <div className = "row">
              <div className="col-md-4 col-xs-4">
                <h3>Add to Order</h3>
              </div>
              <div className="col-md-6 col-xs-6">
                <h3>Entry</h3>
              </div>
              <div className="col-md-2 col-xs-2">
                <h3>Price</h3>
              </div>
          </div>
        {Items}
      </div>
    )

  },
})

var TotalMenu = React.createClass({
  getInitialState:function(){
    return{
      TotalBill: "$0",
    }
  },
  componentWillMount: function(){
    var myCollection = this.props.collection;
    var updateState = function(){
      //find total price
      var currentBill=0;
      myCollection.forEach(function(model){
        currentBill+=model.get("cost");
      });
      currentBill= "$" + (currentBill/100).toFixed(2);

        this.setState({TotalBill: currentBill});
          console.log("New Bill is: " + currentBill)

    }
//update total price
    myCollection.on("add remove", updateState, this);
},
  handleCheckout:function(){
    Backbone.history.navigate("checkout",{trigger:true})
  },
  render: function(){
    //create category components
    var Collection = this.props.collection;
  var Menu = Object.keys(myMenu).map(function(key){
    return <CategoryList collection = {Collection} key = {key} name = {key} object = {myMenu[key]}/>
  });


    return (
      <div>
        <h1>Menu</h1>
        <div className="row">{Menu}</div>
        <div className="row">
          <div className = "col-sm-6 col-xs-12 Total"><span>Total: {this.state.TotalBill}</span></div>
          <div className = "col-sm-6 col-xs-12"><button onClick = {this.handleCheckout} className = "Checkout btn btn-primary">Check Out</button></div>

          </div>
      </div>
    )
  },
})

module.exports= TotalMenu;
