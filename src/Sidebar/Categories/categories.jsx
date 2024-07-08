import React from 'react'
import "./categories.css"
import Input from '../../componenets/Input'
const Categories = ({ handlerChangeRadio }) => {
  return (
    <div>
      <h2 className='sidebar-title'>Categories</h2>

      <div>
        <label className='sidebar-label-container'>
          <input onChange={handlerChangeRadio} type='radio' value="" name="test"></input>
          <span className='checkmark'></span> all
        </label>

        <Input
          handlerChangeRadio={handlerChangeRadio}
          value="sneakers"
          title="Sneakers"
          name="test"
        ></Input>

        <Input
          handlerChangeRadio={handlerChangeRadio}
          value="flats"
          title="Flats"
          name="test"
        ></Input>

        <Input
          handlerChangeRadio={handlerChangeRadio}
          value="sandals"
          title="Sandals"
          name="test"
        ></Input>

        <Input
          handlerChangeRadio={handlerChangeRadio}
          value="heels"
          title="Heels"
          name="test"
        ></Input>

      </div>
    </div>
  )
}

export default Categories