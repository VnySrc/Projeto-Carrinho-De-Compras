//import { setDocF , setDocProdutos} from "./firebase.js";

 //setDocItens   docNome-nome-preco-quantidade-tamanho
 //setDocProdutos ("camisaLsitrada" , "CamisaLisatrada" , 100 , 1 , "p")

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
 import { getFirestore ,collection, doc, setDoc,addDoc,updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
 
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
  
 
// simulador de id de usuario

localStorage.setItem("uid" , "nopqrstuvwassdagfsd" )// simular id de usuario logado



// funçao acrescentar ao preco a quantidade

let precoTxt = document.getElementById("preco");
var btnQuantidade= document.getElementById("btnQuantidade");
var precoInicial = precoTxt.textContent

var btnTamanho = document.getElementById("btnTamanho");
btnQuantidade.addEventListener ("change" , acrescentarQuantidade );

function acrescentarQuantidade () {
    let precoSoma = btnQuantidade.value * precoInicial;
    precoTxt.innerHTML =  precoSoma  

}

// funçao mudar imagem ao clicar

let imgPrincipal = document.getElementById("produtoImagem") //img principal que ficara mudando

let subImagem0 = document.getElementById("subImagem0");
subImagem0.addEventListener ("click" , mudarImagem )

let subImagem1 = document.getElementById("subImagem1");
subImagem1.addEventListener ("click" , mudarImagem )

let subImagem2 = document.getElementById("subImagem2");
subImagem2.addEventListener ("click" , mudarImagem )

let subImagem3 = document.getElementById("subImagem3");
subImagem3.addEventListener ("click" , mudarImagem )

function mudarImagem () {
    imgPrincipal.setAttribute("src" , this.src)
}


/* funçao btnMenu */



const navMenu = document.querySelector("#containerMenu");
const btnMenu = document.querySelector ("#btnMenu");
btnMenu.addEventListener ("click" , toggleMenu);
btnMenu.addEventListener ("toachstart" , toggleMenu);

function toggleMenu () {
    if (event.type == "toachstart") event.toggle.defaultPrevented()
    navMenu.classList.toggle ("menuVisivel")
}




/* Area Detalhes do Produto */
const nome = document.querySelector ("#produtoTexto")
const preco = document.querySelector ("#preco")

if (localStorage.getItem("itemId") == null) {localStorage.setItem("itemId" , 0)}
var itemId = localStorage.getItem("itemId")

/* sistema carrinho */
let btnCarrinho = document.querySelector("#btnCarrinho")
btnCarrinho.addEventListener ("click" , adicionarCarrinho  )



//salvar no carrinho

async function adicionarCarrinho () {

 // get uid
var uid = localStorage.getItem("uid")


  if (uid === null)
  {window.location.replace("/pages/login.html")} //validação id
 else {
   
 }

 const newProduct = await setDoc(doc(db, uid , `item${itemId}`),{
  nome: nome.textContent,
  preco: preco.textContent,
  quantidade: btnQuantidade.value,
  tamanho: btnTamanho.value
  
 })

 itemId++;
 localStorage.setItem("itemId" , itemId)

 alert(`Produto${nome.textContent}, foi adicionado ao carrinho`)
}
