import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCbW_u6g2AJuJ2aYa7DsXJal2kwBgrB9mA",
  authDomain: "miroom-25c73.firebaseapp.com",
  databaseURL:
    "https://miroom-25c73-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "miroom-25c73",
  storageBucket: "miroom-25c73.appspot.com",
  messagingSenderId: "106437787386",
  appId: "1:106437787386:web:4abbfbb0d4cbe54f199343",
  measurementId: "G-69GZJP6MMK",
};

const Database = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = ref(getDatabase(), "MiRoom/item1/img");
  const [finalData, setFinalData] = useState();
  useEffect(() => {
    onValue(database, (snapshot) => {
      const data = snapshot.val();
      setFinalData(data);
    });
  }, []);
  return finalData;
};

export default Database;
