import React,{useEffect, useState} from 'react'
import CockCard from '../cockcard/CockCard'
import Favourites from '../favourites/Favourites';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

  export default function Home() {

  const [drinks, setDrinks] = useState([]);

 
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


  let drinkCards =drinks.map((drink) => ( <CockCard 
  drinkName={drink.strDrink} 
  drinkThumb={drink.strDrinkThumb} 
  drinkId={drink.idDrink}
   key ={drink.idDrink}
   
   />))
  
  return (
    <div className='container'>
    <h3 className='mt-4'>WELCOME TO THE COCKTAILCITY </h3>
   
    <p className='info'> <img className='intro' src='https://www.thecocktaildb.com/images/cocktail_left.png' style={{height: 100 + 'px', width:100 + 'px',}} alt='cock'/> 

    These classics will never steer you wrong.
    <img src='https://www.thecocktaildb.com/images/cocktail_right.png' style={{height: 100 + 'px', width:100 + 'px',}} alt='cock'/><br/> 
    <br/>
  </p> 
   
   
    <hr className='class1'/>
     <p className='mt-4'> Common Cocktail Drinks</p>
     
    
      {/* <div className='scard'> */}
      {/* <div className='col-sm-'> */}
       {drinkCards}
       
       {/* </div>
      </div> */}
      
   </div>
  )
}
