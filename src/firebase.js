// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDM1LfH_Bc0YlmKLOkOu68fxJHTwh5a2nw",
//   authDomain: "live-location-770d7.firebaseapp.com",
//   projectId: "live-location-770d7",
//   storageBucket: "live-location-770d7.firebasestorage.app",
//   messagingSenderId: "254117588252",
//   appId: "1:254117588252:web:82a8752cde7096c304ded9",
//   measurementId: "G-TJ1P6KP7DJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM1LfH_Bc0YlmKLOkOu68fxJHTwh5a2nw",
  authDomain: "live-location-770d7.firebaseapp.com",
  databaseURL: "https://live-location-770d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "live-location-770d7",
  storageBucket: "live-location-770d7.appspot.com",
  messagingSenderId: "254117588252",
  appId: "1:254117588252:web:82a8752cde7096c304ded9"
};

const app = initializeApp(firebaseConfig);

// Disable Analytics for Expo to avoid native errors
app.analytics = () => null;

export const db = getDatabase(app);

