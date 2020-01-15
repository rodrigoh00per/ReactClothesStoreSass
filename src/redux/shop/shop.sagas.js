import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchCollectionsError,
  fetchCollectionsSuccess
} from "../shop/shop.actions";
import ShopTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
//(put)  dispatch actions normal forma
// call normal functions exect
//takeEvery listen the action that was dispatched

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.errorMessage));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
