import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
  Button,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
class CartSummary extends Component {
  deleteItem = (product) => {
    this.props.actions.deleteProductFromCart(product);
    alertify.error(`${product.productName} has been removed from yout cart...`);
  };
  renderEmpty = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {`My Cart ${this.props.cartList.length}`}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cartList.map((item) => (
            <DropdownItem key={item.product.id}>
              <Button
                className="btn btn-xs btn-danger"
                onClick={() => this.deleteItem(item.product)}
              >
                {" "}
                -{" "}
              </Button>
              {item.product.productName} -
              <Badge className="success" color="success" pill>
                {" "}
                {item.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="card">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  render() {
    return (
      <div>
        {this.props.cartList.length > 0 ? (
          this.renderEmpty()
        ) : (
          <NavItem>
            <NavLink>Cart is empty.</NavLink>
          </NavItem>
        )}
      </div>
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
      deleteProductFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
