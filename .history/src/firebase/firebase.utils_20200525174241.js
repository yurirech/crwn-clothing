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

firebase.initializeApp(config);

export const auth = firebase.auth