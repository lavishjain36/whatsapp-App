import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBgklyKoyRSDyY8utQaDyZdvZpuXiZEx2s",
    authDomain: "whatsapp-6fdd4.firebaseapp.com",
    databaseURL: "https://whatsapp-6fdd4.firebaseio.com",
    projectId: "whatsapp-6fdd4",
    storageBucket: "whatsapp-6fdd4.appspot.com",
    messagingSenderId: "968545419794",
    appId: "1:968545419794:web:e316ed64f4419091760ecb",
    measurementId: "G-PPJVC2QQ4Y",
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {provider,auth};
  export default db;