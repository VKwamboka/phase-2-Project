import React from 'react'
import CockCard from '../cockcard/CockCard'

export default function FavouritesContainer({drinks, addToFavorites}) {
  
  let cockCards = drinks.map((drink)=>(<CockCard
  drinkName = {drink.strDrink} 
  drinkThumb = {drink.strDrinkThumb}  
  drinkId = {drink.idDrink}
  key={drink.idDrink} 
  drink={drink.idDrink} 
  // drinks = {cocktailsToDisplay}
  addToFavorites={addToFavorites} 
  
  />)) 
  return (
    <div className='container'>
    <div className="poems-container">
    <p className='info'>Favourites Container</p>
    {cockCards}
    </div>
    </div>
  )
}
