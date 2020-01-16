import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { googleSignInSuccess, googleSignInError } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInError(error));
  }
}

export function* onGoogleSingInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export default function* userSagas() {
  yield all([call(onGoogleSingInStart)]);
}
