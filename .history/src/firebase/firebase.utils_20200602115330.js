import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCbVVq-L_1XCuNeDDhLuGsUExMeIB6afxk",
  authDomain: "crwn-db-80fe0.firebaseapp.com",
  databaseURL: "https://crwn-db-80fe0.firebaseio.com",
  projectId: "crwn-db-80fe0",
  storageBucket: "crwn-db-80fe0.appspot.com",
  messagingSenderId: "892131642776",
  appId: "1:892131642776:web:89e94fe21903e079c06fed",
  measurementId: "G-0JHN35R5YG"
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  }

  try {} catch {}
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;