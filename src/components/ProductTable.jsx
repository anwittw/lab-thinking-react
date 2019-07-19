import React from 'react';

import ProductRow from './ProductRow'

import { Table } from 'reactstrap';

import { Col, Row } from "reactstrap";

function ProductTable(props) {

  let ProductsToDisplay = props.products


  return (
    <div className="ProductTable">
    {ProductsToDisplay.map((product) => <ProductRow key={product.name} price={product.price} stocked={product.stocked} name={product.name} />)}
    </div>
  );
}

export default ProductTable;

