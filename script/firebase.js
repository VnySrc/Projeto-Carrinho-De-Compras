   
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getFirestore ,collection, doc, setDoc,addDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJ0vuqvaNp_AxjwA5B_iLRBH7llCCpQRo",
    authDomain: "projetoloja-4f2e8.firebaseapp.com",
    projectId: "projetoloja-4f2e8",
    storageBucket: "projetoloja-4f2e8.appspot.com",
    messagingSenderId: "1088347169904",
    appId: "1:1088347169904:web:9a1cba0e08b998a12980b5",
    measurementId: "G-Y5DYXVNJ6G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);





  
 export const setDocF = function (title , description) {setDoc (doc(db, title , description))} 

 export const setDocProdutos = function (description  , nome, preco, quantidade, tamanho) {setDoc (doc(db, "produtos" ,description), //collection itens pre definida colocar so descriçao e itens
    {nome:nome, preco:preco, quantidade:quantidade, tamanho:tamanho}) } 
