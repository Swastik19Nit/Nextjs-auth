    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCu2fVNchGLShpsZvguKhzu8-AhmduPqvM",
    authDomain: "nextjs-a7324.firebaseapp.com",
    projectId: "nextjs-a7324",
    storageBucket: "nextjs-a7324.appspot.com",
    messagingSenderId: "439864538344",
    appId: "1:439864538344:web:677dede48dea4b7234455d",
    measurementId: "G-69NHESD6BG"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);


