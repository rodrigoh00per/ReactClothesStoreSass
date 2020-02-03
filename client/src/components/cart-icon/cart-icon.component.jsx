import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toogleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <label className="item-count">{itemsCount}</label>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});
const mapStateToProps = state => {
  return {
    itemsCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
