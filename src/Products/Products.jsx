import React from 'react'


import "./products.css"
const Products = ({result}) => {
  return (
    <>
  {/* ⁡⁢⁣⁢Start Carts Container (products)⁡ */}
      <section className='cards-container'>
        {result}
      </section>

      {/* ⁡⁢⁣⁢end⁡ ⁡⁢⁣⁢Carts (products) Container⁡ */}
    </>
  )
}

export default Products