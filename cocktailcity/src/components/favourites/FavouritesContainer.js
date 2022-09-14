// import React from 'react'
// import CockCard from '../cockcard/CockCard'

// export default function FavouritesContainer({drinks, addToFavorites}) {
//   const [drinks, setDrinks] = useState([]);
//   const [favoriteVisible, setFavoriteVisible] = useState(true);
//   const drinksToDisplay = drinks.filter((drink) => favoriteVisible || drink.isFavorite);


//   function addToFavorites(favDrink) {
//     setDrinks(drinks.map(drink => {
//       return drink.id === favDrink.id ? {...favDrink, isFavorite: !favDrink.isFavorite} : drink
//       }  
//     ))
//   }
  
//   let cockCards = drinks.map((drink)=>(<CockCard
//   // drinkName = {drink.strDrink} 
//   // drinkThumb = {drink.strDrinkThumb}  
//   // drinkId = {drink.idDrink}
//   // key={drink.idDrink} 
//   // drink={drink.idDrink} 
//   // drinks = {cocktailsToDisplay}
//   addToFavorites={addToFavorites} 
  
//   />)) 
//   return (
//     <div className='container'>
//     <div className="poems-container">
//     <p className='info'>Favourites Container</p>
//     {cockCards}
//     </div>
//     </div>
//   )
// }
