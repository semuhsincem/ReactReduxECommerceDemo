import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from '../categories/CategoryList';
import Navi from '../navi/Navi';
import ProductList from '../products/ProductList';

export default class Dashboard extends Component {
  render() {
    return (
         <Row>
             <Col xs="3">
                 <CategoryList />
             </Col>
             <Col xs="9">
                 <ProductList />
             </Col>
         </Row>
    );
  }
}
