import React from 'react'

const Buttons = ({handlerButtonClick,value,title}) => {
  return (
<button onClick={handlerButtonClick} value={value} className='btns'>{title}</button>
  )
}

export default Buttons