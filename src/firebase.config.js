import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBbaROYZoR3JiQTXDLb6CHM8hIOj8HvTuE",
    authDomain: "food-delivery-38414.firebaseapp.com",
    databaseURL: "https://food-delivery-38414-default-rtdb.firebaseio.com",
    projectId: "food-delivery-38414",
    storageBucket: "food-delivery-38414.appspot.com",
    messagingSenderId: "742348162679",
    appId: "1:742348162679:web:fdf6cc1ee7a6d5e861a872"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };