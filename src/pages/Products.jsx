

function Products({product}) {
   
  return (
    <div className='flex gap-2'>
        {
            product.map((item)=>(
                <div className='bg-sky-300 mt-5 w-70 h-50 rounded-xl flex flex-col justify-center items-center gap-3 shadow-2xl shadow-sky-700 ml-2 hover:bg-sky-200'>
                    <p className='text-xl text-black font-bold'>ID: {item.id}</p>
                    <h1 className='text-xl font-extralight text-black'>Name: {item.name}</h1>
                    <p className='font-bold'>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Category: {item.category}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Products