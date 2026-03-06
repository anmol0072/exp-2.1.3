const productDiv=document.getElementById("products");
const cartDiv=document.getElementById("cart");

async function loadProducts(){

const res=await fetch("/api/products");
const products=await res.json();

productDiv.innerHTML="";

products.forEach(p=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
`;

productDiv.appendChild(card);

});

}

async function addToCart(id){

await fetch("/api/cart",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({productId:id})

});

loadCart();

}

async function loadCart(){

const res=await fetch("/api/cart");

const cart=await res.json();

cartDiv.innerHTML="";

cart.forEach(item=>{

const p=document.createElement("p");

p.innerText=`${item.name} - ₹${item.price}`;

cartDiv.appendChild(p);

});

}

loadProducts();
loadCart();