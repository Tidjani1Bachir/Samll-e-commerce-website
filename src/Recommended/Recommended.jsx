import React from 'react'
import "./recommended.css"
import "../styles.css"
import Buttons from '../componenets/buttons'
const Recommended = ({ handlerButtonClick }) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>

        <div className='recommended-flex'>

          <Buttons handlerButtonClick={handlerButtonClick} value="" title="All Products"></Buttons>

          <Buttons handlerButtonClick={handlerButtonClick} value="Nike" title="Nike"></Buttons>

          <Buttons handlerButtonClick={handlerButtonClick} value="Adidas" title="Adidas"></Buttons>

          <Buttons handlerButtonClick={handlerButtonClick} value="Puma" title="Puma"></Buttons>

          <Buttons handlerButtonClick={handlerButtonClick} value="Vans" title="Vans"></Buttons>
        </div>
      </div>

    </>
  )



}

export default Recommended