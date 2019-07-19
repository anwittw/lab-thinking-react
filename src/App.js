import React from 'react';
import './App.css';

import { Container } from 'reactstrap'

import FilterableProductTable from './components/FilterableProductTable'
import listOfProducts from "./products2";

function App() {
  console.log(listOfProducts)
  return (
    <div className="App">
    <Container className="mt-5 d-flex flex-column align-items-center">
    <FilterableProductTable products={listOfProducts} />
    </Container>
    </div>
  );
}

export default App;
