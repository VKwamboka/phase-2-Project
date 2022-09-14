import React, {useEffect, useState} from 'react'
import Favourites from '../favourites/Favourites';
import ReciContainer from './ReciContainer';
import RecipeForm from './RecipeForm';

const RECIPE_URL = "http://localhost:8004/drinks"

function Displayrecipe() {

  const [drinks, setDrinks] = useState([]);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const drinksToDisplay = drinks.filter((drink) => favoriteVisible || drink.isFavorite);

 
  //load drinks from db
  const drinkFetcher = () =>{
    fetch(RECIPE_URL)
    .then((r) => r.json())
    .then((data) =>{
      setDrinks (data)
    })
  }

  useEffect(
    drinkFetcher, []
  )
  function handleDeleteClick(drinkRemove) {
    setDrinks(drinks.filter(drink => drink.id !== drinkRemove.id))
  }
    
  function addDrink(newDrink) {
    setDrinks([...drinks, newDrink]);
  }

  function addToFavorites(favDrink) {
    setDrinks(drinks.map(drink => {
      return drink.id === favDrink.id ? {...favDrink, isFavorite: !favDrink.isFavorite} : drink
      }  
    ))
  }
  
  let drinkCards =drinks.map((drink) => ( <ReciContainer 
    title={drink.strDrink} 
    drinkThumb={drink.strDrinkThumb} 
    drinkId={drink.id}
    drinkk ={drink.idDrink}
     key ={drink.id}
     handleDeleteClick = {handleDeleteClick}
     addToFavorites={addToFavorites}
     />))
  return (
    <div className='container'>
      <p className='info'>Add your personal cocktail recipes here</p>
      <div className='app'>
        <div className='row'>
          <RecipeForm addDrink={addDrink}/>
          
        </div>     
    
      </div>
      {drinkCards}
    </div>
  )
}

export default Displayrecipe