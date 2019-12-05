import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";

const CartIcon = ({toogleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <label className="item-count">0</label>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
