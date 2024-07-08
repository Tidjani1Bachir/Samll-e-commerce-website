import React from 'react'

const Input = ({handlerChangeRadio,value,title,name,color}) => {
  return (
    <>
    <label className='sidebar-label-container'>
        <input onChange={handlerChangeRadio} type='radio' value={value} name={name}></input>
        <span className='checkmark' style={{backgroundColor:color}}></span> {title}
        </label>
    </>
  )
}

export default Input