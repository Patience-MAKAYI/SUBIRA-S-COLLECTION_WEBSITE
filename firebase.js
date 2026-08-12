import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_NHnimxCj3KSk3oUHS4xcyyYGqJ2x9dA",
  authDomain: "subira-s-collection.firebaseapp.com",
  projectId: "subira-s-collection",
  storageBucket: "subira-s-collection.firebasestorage.app",
  messagingSenderId: "1059752058697",
  appId: "1:1059752058697:web:d47b6563de3e664a324498"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {

    const productsContainer =
        document.getElementById("products-container");

    productsContainer.innerHTML = "";

    const querySnapshot =
        await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {

        const product = doc.data();

        productsContainer.innerHTML += `
            <div class="product">
                <img src="images/${product.image}"
                     alt="${product.name}">
                <h3>${product.name}</h3>
                <p>K${product.price}</p>
                <p>Stock: ${product.stock}</p>
            </div>
        `;
    });
}

loadProducts();