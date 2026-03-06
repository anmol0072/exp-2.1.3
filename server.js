
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cart = [];

const products = [
{ id:1,name:"Wireless Headphones",price:2999,image:"https://picsum.photos/200?1"},
{ id:2,name:"Smart Watch",price:4999,image:"https://picsum.photos/200?2"},
{ id:3,name:"Bluetooth Speaker",price:1999,image:"https://picsum.photos/200?3"},
{ id:4,name:"Gaming Mouse",price:999,image:"https://picsum.photos/200?4"},
{ id:5,name:"Laptop Stand",price:1499,image:"https://picsum.photos/200?5"}
];

app.get("/api/products",(req,res)=>{
res.json(products);
});

app.post("/api/cart",(req,res)=>{

const {productId}=req.body;

const product=products.find(p=>p.id===productId);

if(!product){
return res.status(404).json({message:"Product not found"});
}

cart.push(product);

res.json({message:"Added to cart",cart});

});

app.get("/api/cart",(req,res)=>{
res.json(cart);
});

app.use(express.static(__dirname));

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"));
});

export default app;