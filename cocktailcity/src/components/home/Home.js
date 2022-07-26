import React,{useEffect, useState} from 'react'
import CockCard from '../cockcard/CockCard'
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
export default function Home() {

  const [drinks, setDrinks] = useState([])

 
  //load drinks from external API
  const drinkFetcher = () =>{
    fetch(DRINK_URL)
    .then((r) => r.json())
    .then((data) =>{
      setDrinks (data.drinks)
    })
  }

  useEffect(
    drinkFetcher, []
  )

  let drinkCards =drinks.map((drink) => ( <CockCard  drinkName={drink.strDrink} drinkThumb={drink.strDrinkThumb} drinkId={drink.idDrink} key ={drink.idDrink}/>))
  
  return (
    <div className='container'>
      Home
      <div className='row'>
      <div className='col-12'>
       {drinkCards}
       </div>
      </div>
   </div>
  )
}
