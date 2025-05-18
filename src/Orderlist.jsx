import React from 'react'

function Orderlist(props) {
   const {products,total} = props
  if(total()) {
  return (
    <div className='mt-4 flex flex-col'>
    {
      products.map((el)=>  {
     if(el.isAdd){
     return(<div className='flex justify-between bg-cyan-200 p-2'>
      <p>{el.name}</p>
      <p>฿{el.price.toFixed(2)}</p>
      </div>)
     }
      }
       )
    
    }
     <div className='flex justify-between mt-4 p-2'>
          <p className='text-xl'>Total</p>
          <p className='text-xl'>฿{total().toFixed(2)}</p>
        </div>
    </div>
  ) }
  else{
    return(
      <div className='text-7xl m-auto mt-12'>There is no order.</div>
    )
    
  }

}

export default Orderlist