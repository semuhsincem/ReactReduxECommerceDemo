import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../../redux/actions/productList";

import { Button, Table } from "reactstrap";
import { addCart } from "../../redux/actions/cartAction";
import alertify from 'alertifyjs';

class ProductList extends Component {
  componentDidMount = () => {
    this.props.actions.getProducts(this.props.currentCategory.id);
  };

  addProductAction=(product)=>{
    this.props.actions.addToCart({
      quantity: 1,
      product,
    })
    alertify.success(`${ product.productName } sepete eklendi.`);
  }

  render() {
    return (
      <>
        <div> ProductList </div>
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
            {this.props.productList.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.productName}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <th>
                  <Button
                    className="btn btn-success btn-xs"
                    onClick={()=>this.addProductAction(item)}
                  >
                    +
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.productListReducer,
    currentCategory: state.changeCategoryReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
