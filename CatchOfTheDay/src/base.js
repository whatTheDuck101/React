import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "", //removed for security reasons,add your own firebase apiKey 
  authDomain: "", //removed for security reasons,add your own firebase authDomain 
  databaseURL: "" //removed for security reasons,add your own firebase databaseURL 
});

const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
