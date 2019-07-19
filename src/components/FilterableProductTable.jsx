import React, { useState } from "react";

import { Col, Row } from "reactstrap";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import listOfProducts from "../products.json";
import { stat } from "fs";

function FilterableProductTable({ products }) {
  const [state, setState] = useState({
    filterText: "",
    inStockOnly: false,
    page: 1
  });

  function handleChange(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  let filteredListOfProducts = 
    pagination(filterByStatus(filterByName(products))
  );

  function filterByName(products) {
    return products.filter(product => product.name.includes(state.filterText));
  }

  function filterByStatus(products) {
    if (!state.inStockOnly) {
      return products;
    } else {
      return products.filter(product => product.stocked === true);
    }
  }

  function pagination(products) {
    let lastIndex = state.page * 20;
    let firstIndex = lastIndex - 20;
    if (products.length <= 20) {
      return products;
    } else {
      return products.filter((product, i) => i >= firstIndex && i <= lastIndex);
    }
  }

  return (
    <div className="FilterableProductTable d-flex flex-column align-items-center border p-4">
      <h1>Welcome to our Webstore!</h1>
      <Row>
        <SearchBar
          filterText={state.filterText}
          inStockOnly={state.inStockOnly}
          handleChange={ (e) => handleChange(e)}
        />
      </Row>
      <ProductTable products={filteredListOfProducts} />
    </div>
  );
}

export default FilterableProductTable;
