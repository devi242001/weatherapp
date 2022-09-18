import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';

const firebaseConfig = {
    apiKey: "AIzaSyBWDljQAMJLLsKEnOqVW72KuUgVeQ-VXe8",
    authDomain: "authentication-d7c96.firebaseapp.com",
    projectId: "authentication-d7c96",
    storageBucket: "authentication-d7c96.appspot.com",
    messagingSenderId: "726008931514",
    appId: "1:726008931514:web:437fa15f375d6c108f8e83"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = app.auth();
  
  function signup(){
    const email = document.getElementById("signinemail").value
    const password = document.getElementById("signinpassword").value
    auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
    alert("user created");
}

function login(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  auth.signInWithEmailAndPassword(email, password)
  .catch((error)=>{
      document.getElementById("error").innerHTML = error.message
  })
}