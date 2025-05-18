import React from 'react'

function Toppinglist(props) {
  const {products,setAddTopping,total,CheckOut} = props 
  console.log(total())
  return (
    <div className='flex flex-col self-center '>
      {  products.map((el)=>  
        (<div key={el.name} className='flex justify-between w-96 p-2 items-baseline bg-amber-50 '> <label><input type="checkbox" className='checkbox checkbox-neutral checkbox-xs mr-2 ' name={el.name} checked={el.isAdd} onChange={(e)=>setAddTopping(e)} /> 
        {el.name}</label>
        <p>฿{el.price.toFixed(2)}</p>
        </div>)) }
        <hr />
        <div className='flex justify-between mt-4'>
          <p className='text-xl'>Total</p>
          <p className='text-xl'>฿{total().toFixed(2)}</p>
        </div>
        <button className='btn mt-2' onClick={CheckOut}>Check out</button>
        
    </div>
  )
}

export default Toppinglist