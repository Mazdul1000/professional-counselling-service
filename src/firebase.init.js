
import { initializeApp } from "firebase/app";       
import{getAuth}  from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyBjblfnG_sRSyA_Mc4x1nA4VZJszB_4ia4",
    authDomain: "professional-counselling-app.firebaseapp.com",
    projectId: "professional-counselling-app",
    storageBucket: "professional-counselling-app.appspot.com",
    messagingSenderId: "141095508446",
    appId: "1:141095508446:web:d64e7eb6745901c5e1654f"
  };


  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);

  export default auth;