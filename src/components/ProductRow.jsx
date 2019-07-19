import React from "react";

import { Col, Row } from "reactstrap";

function ProductRow(props) {
  let price = props.price;
  let stocked = props.stocked;
  let name = props.name;
  let id = props.id;
  return (
    <div className="ProductRow">
      <Row>
        <Col sm="10">
          <span className={stocked ? "" : "text-danger"}>{id} {name}</span>
        </Col>
        <Col sm="2">{price}</Col>
      </Row>
    </div>
  );
}

export default ProductRow;
