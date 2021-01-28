import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByQmOEPPj3Hm2bbahwDT46t1_2cUxjH9k",
  authDomain: "matsonbros.firebaseapp.com",
  databaseURL: "https://matsonbros.firebaseio.com",
  projectId: "matsonbros",
  storageBucket: "matsonbros.appspot.com",
  messagingSenderId: "211895810110",
  appId: "1:211895810110:web:0563643ea315bae92b796f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
