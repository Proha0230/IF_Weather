import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAj6CFSvKRXrGMvKzBwQpjPYlJNBK4nbKs",
    authDomain: "if-weather.firebaseapp.com",
    databaseURL: "https://if-weather-default-rtdb.firebaseio.com",
    projectId: "if-weather",
    storageBucket: "if-weather.appspot.com",
    messagingSenderId: "963714257382",
    appId: "1:963714257382:web:03aaec97362e37decfc627",
    measurementId: "G-45SQBZF0M5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);