import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import sl from "../components/selector";

import { BASE_URL } from "../constants";

function SingleProduct(props) {
  const { detail, storeSelectedProduct } = staticSelector.select(props);

  return (
    <>
      <Link to="/productlist/one" onClick={() => storeSelectedProduct(detail)}>
        <div className="singleProduct">
          <div className="singleProduct__img">
            <img src={`${BASE_URL}${detail.picture}`} alt="" />
          </div>
          <p>{detail.name}</p>
          <h3>{detail.price}</h3>
        </div>
      </Link>
    </>
  );
}

const staticSelector = sl.object({
  detail: sl.object({
    _id: sl.string(""),
    name: sl.string(""),
    picture: sl.string(""),
    description: sl.string(""),
    category: sl.string(""),
    price: sl.number(),
  }),
  storeSelectedProduct: sl.func(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    storeSelectedProduct: (product) =>
      dispatch(actions.storeSelectedProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(SingleProduct);
