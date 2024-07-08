import React from 'react'

import "./Sidebar.css"
import Categories from './Categories/categories'
import Price from './Price/price'
import Colors from './Colors/colors'

const Sidebar = ({handlerChangeRadio}) => {
    return (
        <>
            <section className='sidebar'>
                <div className='logo-container'>
                    <h1>
                        🛒
                    </h1>
                </div>
                <Categories handlerChangeRadio={handlerChangeRadio}></Categories>

                <Price handlerChangeRadio={handlerChangeRadio}></Price>
                <Colors handlerChangeRadio={handlerChangeRadio}></Colors>
            </section>
        </>
    )
}

export default Sidebar