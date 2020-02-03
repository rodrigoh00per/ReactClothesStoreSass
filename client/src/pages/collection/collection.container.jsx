import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionIsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionIsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

//this is the largue form
/* 
const CollectionContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage) //HOC
); */

export default CollectionContainer;
