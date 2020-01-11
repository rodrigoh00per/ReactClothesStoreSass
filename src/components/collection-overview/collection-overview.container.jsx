import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview); //finally the component that you will render

//this is the largue form
/* 
const CollectionOverViewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview) //HOC
); */

export default CollectionOverViewContainer;
