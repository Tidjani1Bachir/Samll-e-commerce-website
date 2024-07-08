import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

// Data Base

import products from "./db/data"
import Card from './componenets/Card';


function App() {

// the state of the category wether it's selected from radio color or radio price or radio category or even a button

  const [selectedCategory, setSelectedCategory] = useState(null)

  //---------------------------input filter
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  //------------get items that have the name that the user have typed in the search bar from database

  const filterdItemes = products.filter(prodact => prodact.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //----------------------Radio filter

  const handlerChangeRadio = (event) => {
    setSelectedCategory(event.target.value)
  }


  //----------------------buttuns filter

  const handlerButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selectedCategory, query) {
    // for all produncts input click
    let filterdProducts = products

    //Felltering input items depending on search
    if (query) {
      filterdProducts = filterdItemes;
    }

    //filtering selected items from radio from side bar or buttrons from recommended
    if (selectedCategory) {
      filterdProducts = filterdProducts.filter(({ category, color, title, newPrice, company }) =>
        category === selectedCategory||
        color === selectedCategory ||
        title === selectedCategory ||
        newPrice === selectedCategory ||
        company === selectedCategory
      )
    }

    return filterdProducts.map(({img,prevPrice,reviews,star,title,newPrice}) => (
      <Card
      key={Math.random()}
      img={img}
      prevPrice={prevPrice}
      reviews={reviews}
      star={star}
      title={title}
      newPrice={newPrice}

      ></Card>
    ))
  }

const result= filteredData(products,selectedCategory,query)

  return (
    <>
      <Sidebar handlerChangeRadio={handlerChangeRadio}></Sidebar>
      <Nav query={query} handleInputChange={handleInputChange}></Nav>
      <Recommended handlerButtonClick={handlerButtonClick}></Recommended>
      <Products result={result}></Products>
    </>
  )
}

export default App;
