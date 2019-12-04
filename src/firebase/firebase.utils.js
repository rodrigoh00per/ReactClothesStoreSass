import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5FbpjzcmoMalSe3lHtBNRla9Uc3dt6Tk",
  authDomain: "chatfirebase-39f18.firebaseapp.com",
  databaseURL: "https://chatfirebase-39f18.firebaseio.com",
  projectId: "chatfirebase-39f18",
  storageBucket: "chatfirebase-39f18.appspot.com",
  messagingSenderId: "272082040993",
  appId: "1:272082040993:web:e4cbad45b0bf00fcbb18e0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
