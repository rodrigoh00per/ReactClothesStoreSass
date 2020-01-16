import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailandPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailandPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInError = error => ({
  type: UserActionTypes.SIGN_IN_ERROR,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
