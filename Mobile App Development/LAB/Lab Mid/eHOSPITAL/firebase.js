import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBlb7IZ-S0hfPYstHX8pfUtfv9YEx9GlTQ',
  authDomain: 'ehospital-546ea.firebaseapp.com',
  databaseURL: 'https://ehospital-546ea-default-rtdb.firebaseio.com',
  projectId: 'ehospital-546ea',
  storageBucket: 'ehospital-546ea.appspot.com',
  messagingSenderId: '716863309627',
  appId: '1:716863309627:web:bf6026dc89d09569e5991e',
  measurementId: 'G-WHNL62D32T',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const database = firebase.database();

export {auth, database};