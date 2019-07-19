import React, { useState, useEffect } from "react";

import { Col, Row } from "reactstrap";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";



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
      page: 1,
      [name]: value,
    });
  }

  let filteredListOfProducts = filterByStatus(filterByName(products));
  let arrOfPages =  calculateNumberOfPages(filteredListOfProducts)
  let paginatedListOfProducts = pagination(filteredListOfProducts);

  console.log(arrOfPages)

  function filterByName(products) {
    return products.filter(product => product.name.toUpperCase().includes(state.filterText.toUpperCase()));
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
    let firstIndex = Number(state.page) === 1 ? 0 : lastIndex - 19;
    if (products.length <= 20) {
      return products;
    } else {
      return products.filter((product, i) => i >= firstIndex && i <= lastIndex);
    }
  }

  function calculateNumberOfPages(filteredListOfProducts) {
    let maxPage = Math.ceil(filteredListOfProducts.length / 20 )
    let arrOfPages =[] 
    for (let i = 1; i <= maxPage; i++) {arrOfPages.push(i)}
    return arrOfPages
  
  }

  return (
    <div className="FilterableProductTable d-flex flex-column align-items-center border p-4">
      <h1>Welcome to our Webstore!</h1>
      <pre>{JSON.stringify(state, null,2)}</pre> <br />
      <Row>
        <SearchBar
          filterText={state.filterText}
          inStockOnly={state.inStockOnly}
          handleChange={ (e) => handleChange(e)}
          page = {state.page}
          numberOfPages = {arrOfPages}
        />
      </Row>
      <ProductTable products={paginatedListOfProducts} />
    </div>
  );
}

export default FilterableProductTable;
