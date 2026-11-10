
import { Link, Route, Routes } from "react-router"

import Home from "./pages/Home"
import Coustomer from "./pages/Coustomer"
import Products from "./pages/Products"
import React, { useState } from 'react'

function App() {
   const [product,setProduct] = useState([{
        id:1,
        name:'Mac Book',
        price:15000,
        stock:6,
        category:'Laptop'
    },{
        id:2,
        name:'Dell persision',
        price:25000,
        stock:2,
        category:'Laptop'
    }])
  return (
    <main className="bg-slate-200 h-screen flex flex-col w-full">

      <section className="flex w-full h-full">

        
        <article className="w-60 bg-slate-200 flex flex-col gap-4 mt-10 p-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/coustomer">Customer</Link>
        </article>

       
        <article className="flex-1 bg-slate-300">

          <h1 className="w-full bg-sky-200 h-20 text-3xl p-4">
            E-Commerce
          </h1>

          <Routes>
            <Route path="/" element={<Home product={product}/>} />
            <Route path="/products" element={<Products product={product} />} />
            <Route path="/coustomer" element={<Coustomer />} />
          </Routes>

        </article>

        
        <article className="h-screen w-40 bg-slate-500">
          kj
        </article>

      </section>
    </main>
  )
}

export default App
