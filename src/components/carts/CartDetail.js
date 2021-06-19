import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import {Table, Button} from 'reactstrap';
import alertify from "alertifyjs";

class CartDetail extends Component {


  deleteItemFromCart=(cartItem)=>{
    this.props.actions.deleteFromCart(cartItem.product);
    alertify.error(`${cartItem.product.productName} has been removed from your cart...`);
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Units Price</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cartList.map((item, index) => (
            <tr key={item.product.id}>
              <th scope="row">{item.product.id}</th>
              <td>{item.product.productName}</td>
              <td>{item.product.quantityPerUnit}</td>
              <td>{item.product.unitPrice}</td>
              <td>{item.product.unitsInStock}</td>
              <th>
                <Button
                  className="btn btn-danger btn-xs"
                  onClick={() => this.deleteItemFromCart(item)}
                >
                  -
                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartList: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
