import { useState } from "react"
import toppings from "./data"
import Orderlist from "./Orderlist"
import Toppinglist from "./Toppinglist"
function App() {
  const newdata = toppings.map((el)=>
  {
    return {...el,isAdd:false}
  }
)
 const [products,setProducts]=useState(newdata)
 const setAddTopping = (e) => {
 let idx = products.findIndex((el)=> el.name == e.target.name)
 let newdata = [...products]
 newdata[idx].isAdd = e.target.checked
 setProducts(newdata)
 }
 const total=()=>{
   return products.reduce((pre,cur)=>{
              if(cur.isAdd){
                return pre+cur.price
              }
              else{
                return pre
              }
            },0)
 }
const [isCheckOut,setIsCheckOut] = useState(false)
const CheckOut = () =>{
  setIsCheckOut(!isCheckOut)
}
 return (
   <div className="app">
     <div className="flex flex-col p-6" >
      <h1 className="text-4xl mb-4">Select Topping</h1>
      <Toppinglist products={products} setAddTopping={setAddTopping} total={total} CheckOut={CheckOut}/>
     { isCheckOut && <Orderlist total={total} products={products}/> }
     </div>
   </div>
 )}
export default App
