  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getFirestore ,collection, doc, setDoc,addDoc,updateDoc,getDoc,getDocs, arrayUnion, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
 
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

  

//var uid = localStorage.getItem("uid")
const uid = localStorage.getItem("uid")
var itemId = localStorage.getItem("itemId")
var productList = document.getElementById("productList")
console.log(uid)

var precoTotal = document.getElementById("precoTotal")
var somaTotal = 0

onload = async function visitDb () {

    let collectionSnapshot = await getDocs(collection(db, uid))
   console.log(collectionSnapshot)


   collectionSnapshot.forEach((doc) => {
    var novoItem = `<tr click.delegate ="remove.removeThis()" id="${doc.id}"> <td id='nomeL0'>${doc.data().nome}</td> <td id='precoL0'> R$${doc.data().preco}.00</td> <td id='quantidadeL0'>${doc.data().quantidade}</td> <td id='tamanhoL0' class='ajusteTamanho'>${doc.data().tamanho}</td> </tr>`
    productList.innerHTML += novoItem

    // lista de produtos
    var listaProdutos = "Lista de Produtos - "
    listaProdutos += `||**Produto ${doc.data().nome} || ${doc.data().preco}.00 || Quantidade: ${doc.data().quantidade} || Tamanho: ${doc.data().tamanho} ||** `

    // soma valor total
    somaTotal += parseInt(doc.data().preco)
    precoTotal.innerHTML = `Preço Total: R$${somaTotal}.00  `
  });
}

const btnRemoverItem = document.getElementById("btnRemoverItem")
btnRemoverItem.addEventListener("click" , limparCarrinho)


async function limparCarrinho () {
    
    if  (confirm("Limpar Carrinho?") === true) {
    for (let i = 0; i < 20; i++) {
         deleteDoc(doc(db, uid, "item"+i)) //looping pra apagar todods produtos do db
        }
        productList.innerHTML = "<tr><th scope='col'>Nome Item</th><th scope='col'>Preço</th><th scope='col'>Quantidade</th><th scope='col'>Tamanho</th></tr> "

    
    localStorage.setItem("itemId" , "0");//setar id do item para 0 para readicionar ao carrinho
    alert("Carrinho Limpo!")
    precoTotal.innerHTML =  " Preço Total: R$0.00 "
}

}
