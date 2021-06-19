import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import {
  changeCategory,
  getCategories,
} from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productList";

class CategoryList extends Component {
  componentDidMount = () => {
    this.props.actions.getCategories();
    console.log(this.props.categories.length);
  };

  render() {
    return (
      <>
        <div> CategoryList</div>
        <ListGroup>
          {this.props.categories.map((item, index) => (
            <ListGroupItem
              active={
                this.props.currentCategory.categoryName === item.categoryName
              }
              onClick={() => {
                this.props.actions.changeCategory(item);
                this.props.actions.getProducts(item.id);
              }}
              key={index}
            >
              {item.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch),
      getProducts: bindActionCreators(getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
