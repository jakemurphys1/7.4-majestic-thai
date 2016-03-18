var Backbone = require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

//local
var myMenu = require("../menu.json")
console.log("Menu from JSON: " , myMenu)
var model = require("../model/model.js");
var MyModel = new model.OrderCollection();

var CheckoutView = React.createClass({
  handleCheckout:function(){
    var TotalBill = 0;
    var Items= this.props.collection.map(function(model){
      TotalBill+=model.get("cost");
        return {"Name":model.get("Name"),"Cost":model.get("cost")}
    });
    TotalBill = "$" + (TotalBill/100).toFixed(2)

//prevents empty orders from being uploaded
    if(Items.length==0){
      return;
    }

    var TotalOrder = {"Date":Date.now(),"Bill":TotalBill,"Order":Items}
    console.log("The Total Order is: " + TotalOrder)
  MyModel.create(TotalOrder)
  Backbone.history.navigate("menu",{trigger:true})

//remove all items from local collections
  var modelItem;
while (modelItem = this.props.collection.first()) {
  modelItem.destroy();
}
  },
  render:function(){
    var TotalBill = 0;
    var Items= this.props.collection.map(function(model){
      TotalBill+=model.get("cost");
        return (
              <div key={model.get("_id")} className="col-md-6 col-sm-12">
                <div className = "Items col-xs-9 ">{model.get("Name")}</div>
                <div className = "Items col-xs-3"> {"$" + (model.get("cost")/100).toFixed(2)}</div>
              </div>)
    });
    TotalBill = "$" + (TotalBill/100).toFixed(2)
    if(Items.length==0){
      Items = <p className = "Empty">Your order is empty.</p>
    }
    return(
      <div className="ItemList">
            <div className= "row"><h1>Checkout</h1></div>
            <div className= "row">{Items}</div>
            <div className="row">
              <div className="Total col-sm-6 col-xs-12">Total: {TotalBill}</div>
              <div className="PayDiv col-sm-6 col-xs-12"><button onClick = {this.handleCheckout} className="Pay btn btn-primary">Check OUT</button></div>
            </div>
    </div>
    )
  },
})

module.exports= CheckoutView;
