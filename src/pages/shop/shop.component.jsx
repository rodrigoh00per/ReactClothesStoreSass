import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

class ShopPage extends Component {
  componentDidMount() {
    const { updateCollections } = this.props;
     //Se comenta para que no este consumiendo servicios de firebase
    /*  const collectionRef = firestore.collection("collections");

    collectionRef.get().then(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    }); */
  }
  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});
export default connect(null, mapDispatchToProps)(ShopPage);
