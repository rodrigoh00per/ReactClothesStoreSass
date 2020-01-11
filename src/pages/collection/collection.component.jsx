import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "../collection/collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const renderCollectionContent = () =>
    collection !== null ? renderContent() : <div>Espere...</div>;
  const renderContent = () => {
    const { title, items } = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => (
            <CollectionItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  };
  return renderCollectionContent();
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
