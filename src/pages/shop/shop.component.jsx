import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends Component {
  componentDidMount() {
    //Se comenta para que no este consumiendo servicios de firebase
    this.props.fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
