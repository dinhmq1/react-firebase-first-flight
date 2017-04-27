import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBGbWZczs9XMK07CFmOb8FEYZ6KxM4KKkY',
  authDomain: 'first-flight-with-friend-30815.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-30815.firebaseio.com',
  projectId: 'first-flight-with-friend-30815',
  storageBucket: 'first-flight-with-friend-30815.appspot.com',
  messagingSenderId: '340439958413'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
