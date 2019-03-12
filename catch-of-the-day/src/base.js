import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "", //From firebase add your own api
  authDomain: "",//From firebase add your own authDomain
  databaseURL: ""// From firebase add your own databaseURL
});

const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
