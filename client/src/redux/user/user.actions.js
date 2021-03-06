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

export const signOutStart = () => ({ type: UserActionTypes.SIGN_OUT_START });

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutError = () => ({ type: UserActionTypes.SIGN_OUT_ERROR });

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, aditionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, aditionalData }
});

export const signUpError = error => ({
  type: UserActionTypes.SIGN_UP_ERROR,
  payload: error
});
