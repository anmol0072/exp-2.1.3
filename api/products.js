export default function handler(req, res) {

const products = [

{
id:1,
name:"Wireless Headphones",
price:2999,
category:"audio",
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Bluetooth Speaker",
price:1999,
category:"audio",
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Gaming Mouse",
price:999,
category:"computer",
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Laptop Stand",
price:1499,
category:"accessories",
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Mechanical Keyboard",
price:3499,
category:"computer",
image:"https://picsum.photos/300?5"
}

]

res.status(200).json(products)

}