import React from 'react'
import "./price.css"
import Input from '../../componenets/Input'
const Price = ({handlerChangeRadio}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
     <div>
     <label className='sidebar-label-container'>
          <input onChange={handlerChangeRadio} type='radio' value="" name="test"></input>
          <span className='checkmark'></span> all
        </label>

   <Input
handlerChangeRadio={handlerChangeRadio}
value={50}
title={"$0 - 50"}
name="test"

   ></Input>

   <Input
handlerChangeRadio={handlerChangeRadio}
value={100}
title="$50 - 100"
name="test"

   ></Input>

   <Input
handlerChangeRadio={handlerChangeRadio}
value={150}
title="$100 - 150"
name="test2"

   ></Input>

   <Input
handlerChangeRadio={handlerChangeRadio}
value={200}
title="Over $150"
name="test"

   ></Input>

     </div>
    </div>
  )
}

export default Price