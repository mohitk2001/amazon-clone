import firebase from "firebase"

const firebaseApp=firebase.initializeApp({
  
        apiKey: "AIzaSyCss-8fZqh6ApUsB3NvRCTuBs7T9IxU3S4",
        authDomain: "clone-41cf4.firebaseapp.com",
        projectId: "clone-41cf4",
        storageBucket: "clone-41cf4.appspot.com",
        messagingSenderId: "290348362268",
        appId: "1:290348362268:web:73f217f5d21739eeeacdd9",
        measurementId: "G-SKWRH7H223"
     
})


const auth=firebase.auth()
export {auth}