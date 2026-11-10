import React from 'react'

function Home({product}) {
  return (
    <div className=' flex gap-5'> 
         
            {
                 product.map((item)=>(
                <div className='bg-sky-300 mt-5 w-70 h-70 rounded-xl flex flex-col justify-center items-center gap-3 shadow-2xl shadow-sky-700 ml-2 hover:bg-sky-200'>
                    <p className='text-xl text-black font-bold'>ID: {item.id}</p>
                    <h1 className='text-xl font-extralight text-black'>Name: {item.name}</h1>
                    <p className='font-bold'>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Category: {item.category}</p>
                    <button className='bg-green-600 rounded w-30 h-15'>Add To Basket</button>
                </div>
            ))
            }
        
    </div>
  )
}

export default Home