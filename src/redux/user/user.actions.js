import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInError = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_ERROR,
  payload: error
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START
});
export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInError = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_ERROR,
  payload: error
});
