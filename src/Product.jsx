import React, {Component} from "react";

//Homework -class component-

class Product extends Component{
    constructor(props){
      super(props);
    }



    render(){

        return(
            <div>Product
                <p>Product Name {this.props.ProductName}</p>
                <p>Price { this.props.Price}</p>
                <p>Description {this.props.Description}</p>
            </div>
        )
      }
  }







export {Product}