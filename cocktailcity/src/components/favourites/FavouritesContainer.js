import React from 'react'
// import CockCard from '../cockcard/CockCard'
import Favourites from './Favourites'

export default function FavouritesContainer({drinks, cocktailsToDisplay, addToFavorites}) {
  let cockCards = drinks.map((drink)=>(<Favourites 
  title = {drink.strDrink} 
  drinkThumb = {drink.strDrinkThumb}  
  drinkId = {drink.id}
  key={drink.id} 
  drink={drink} 
  drinks = {cocktailsToDisplay}
  addToFavorites={addToFavorites} 
  
  />)) 
  return (
    <div className="poems-container">
    <p>Favourites Container</p>
    {cockCards}
        {/* <CockCard/> */}
    </div>
  )
}
