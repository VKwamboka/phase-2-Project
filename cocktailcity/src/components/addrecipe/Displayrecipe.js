import React, {useEffect, useState} from 'react'
import Favourites from '../favourites/Favourites';
import ReciContainer from './ReciContainer';
import RecipeForm from './RecipeForm';

const RECIPE_URL = "http://localhost:8004/drinks"

function Displayrecipe() {

  const [drinks, setDrinks] = useState([]);

 
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

  
  let drinkCards =drinks.map((drink) => ( <ReciContainer 
    title={drink.strDrink} 
    drinkThumb={drink.strDrinkThumb} 
    drinkId={drink.idDrink}
     key ={drink.idDrink}
     
     />))
  return (
    <div className='container'>
    <div className='app'>
     {/* <div className='row'>
      <div className='col-12'> */}
       {drinkCards}
{/*        
       </div>
      </div> */}
      <div >
      <RecipeForm/>
      </div>
    </div>
    
    </div>
  )
}

export default Displayrecipe