import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
 apiKey: "AIzaSyB5dp-wfRqYEQZHnS--G94XVjmWGHqHtPI",
  authDomain: "projeto-71-42946.firebaseapp.com",
  databaseURL: "https://projeto-71-42946-default-rtdb.firebaseio.com",
  projectId: "projeto-71-42946",
  storageBucket: "projeto-71-42946.appspot.com",
  messagingSenderId: "269522714594",
  appId: "1:269522714594:web:1f6fd2b99518709dc883bb",
  measurementId: "G-5017YQW6E7"
};
  

  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


