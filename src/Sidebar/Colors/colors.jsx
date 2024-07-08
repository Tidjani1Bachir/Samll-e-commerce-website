import React from 'react'
import "./colors.css"
import Input from '../../componenets/Input'
const Colors = ({handlerChangeRadio}) => {
  return (
    <div className='ml2'>
<h2 className='sidebar-title price-title'>Colors</h2>

<label className='sidebar-label-container'>
          <input onChange={handlerChangeRadio} type='radio' value="" name="test"></input>
          <span className='checkmark all'></span> all
        </label>

<Input
handlerChangeRadio={handlerChangeRadio}
value="black"
title="Black"
name="test1"
color="black"
></Input>

<Input
handlerChangeRadio={handlerChangeRadio}
value="blue"
title="Blue"
name="test1"
color="blue"
></Input>

<Input
handlerChangeRadio={handlerChangeRadio}
value="red"
title="Red"
name="test1"
color="red"
></Input>

<Input
handlerChangeRadio={handlerChangeRadio}
value="green"
title="Green"
name="test1"
color="green"
></Input>

<label className='sidebar-label-container'>
          <input onChange={handlerChangeRadio} type='radio' value="white" name="test1"></input>
          <span className='checkmark' style={{backgroundColor:"white",border:"2px solid black"}}></span>white
        </label>


    </div>
  )
}

export default Colors