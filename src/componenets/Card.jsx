import React from 'react'
import { CiStar } from "react-icons/ci";

import { IoBagAdd } from "react-icons/io5";

const Card = ({img,prevPrice,reviews,star,title,newPrice}) => {
  return (

  <>
<section className='card'>
     <img className='card-img' src={img}
     alt={title}></img>
     <div className='card-details'>
       <h3 className='card-title'>{title}</h3>
       <section className='card-reviews'>

         {star} {star} {star} {star}
         <span className='total-reviews'>4</span>
       </section>
        <section className='card-price'>
          <div className='price'>
           <del> {prevPrice} </del> {newPrice}
          </div>
          <div className='bag'>
            <IoBagAdd className='bag-icon' />
          </div>
        </section>
     </div>
   </section>
   {/* ⁡⁢⁣⁣this is the end a Cart (product)⁡⁡ */}
</>

  )
}

export default Card