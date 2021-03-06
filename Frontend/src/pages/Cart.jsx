import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import sl from "../components/selector";
import { BASE_URL } from "../constants";
import * as actions from "../redux/actions";

function Cart(props) {
  const { cartedProduct, clearCartProduct } = staticSelector.select(props);

  const handlePayment = () => {
    alert("Your payment is done sucessfully.");
    clearCartProduct();
  };
  const getTotalCost = ()=>{
    let total =0;
    cartedProduct.forEach((product, key)=>{
      total += product.price;
    });
    return total;
  };

  return (
    <>
      <div className="checkout">
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>Items</th>
                    <th>Prices</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {cartedProduct.map((product, key) => (
                    <tr>
                      <td className="name">
                        <img src={`${BASE_URL}${product.picture}`} alt="" />
                        <p>{product.name}</p>
                      </td>
                      <td>Rs{product.price}</td>
                      <td>1</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2" className ="font weight-bold">
                      Total</td>
                      <td>{getTotalCost()}</td>
                    
                  </tr>
                </tbody>
              </Table>
              <div className="text-center">
                <Button variant="primary" type="submit" onClick={handlePayment}>
                  Proceed to payment
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    </>
  );
}

const staticSelector = sl.object({
  cartedProduct: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      picture: sl.string(""),
      description: sl.string(""),
      category: sl.string(""),
      price: sl.number(),
    })
  ),
  clearCartProduct: sl.func(),
});

const mapStateToProps = (state) => {
  return {
    cartedProduct: state.cartedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCartProduct: () => dispatch(actions.clearCartProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
