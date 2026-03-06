let products=[]
let cart=[]

async function loadProducts(){

const res = await fetch("/api/products")
.then(res => res.json())
.then(data => {
products = data
displayProducts(products)
})
.catch(err => console.log(err))

products = await res.json()

displayProducts(products)

}

function displayProducts(list){

const container=document.getElementById("products")

container.innerHTML=""

list.forEach(p=>{

const div=document.createElement("div")

div.className="card"

div.innerHTML=`
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
`

container.appendChild(div)

})

}

function addToCart(id){

const item=products.find(p=>p.id===id)

cart.push(item)

updateCart()

}

function updateCart(){

document.getElementById("cartCount").innerText=cart.length

}

function openCart(){

document.getElementById("cart").classList.remove("hidden")

renderCart()

}

function closeCart(){

document.getElementById("cart").classList.add("hidden")

}

function renderCart(){

const cartDiv=document.getElementById("cartItems")

cartDiv.innerHTML=""

cart.forEach(item=>{

const div=document.createElement("div")

div.innerHTML=`${item.name} - ₹${item.price}`

cartDiv.appendChild(div)

})

}

loadProducts()