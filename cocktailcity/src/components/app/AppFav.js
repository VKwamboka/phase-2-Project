import React,{useState, useEffect} from "react";
import FavouritesContainer from "../favourites/FavouritesContainer";

const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

export default function AppFav() {
  
    const [drinks, setDrinks] = useState([]);
      const [favoriteVisible, setFavoriteVisible] = useState(true);
      

      const values = Object.values(drinks);
        console.log(values);
      const cocktailsToDisplay = values.filter((drink) => favoriteVisible || drink.isFavorite);
      console.log(cocktailsToDisplay)
   
      //load drinks from external API
      const drinkFetcher = () =>{
        fetch(DRINK_URL)
        .then((r) => r.json())
        .then((data) =>{
          setDrinks(data)
        })
      }
    
      useEffect(
        drinkFetcher, []
      )
  

      // useEffect(() => {
      //   setFavorites(drinks);
      // }, []);
    
      // useEffect(() => {
      //   console.log(favorites);
      // }, [favorites]);
      
        
  
  
      function addToFavorites(favCocktail) {
        setDrinks(values.map(cocktail => {
          return cocktail.idDrink === favCocktail.idDrink ? {...favCocktail, isFavorite: !favCocktail.isFavorite} : cocktail
          }  
        ))
      }
  
      function renderPoemView() {
        if (cocktailsToDisplay.length === 0 && !favoriteVisible) {
          return (<h1>You have no favorites added</h1>)
        } else {
          return (
            <FavouritesContainer 
              drinks={cocktailsToDisplay} 
            //   removePoem={removePoem} 
              addToFavorites={addToFavorites}
            />
          )
        }
      }
    return (
      <div className="container">
      <div className="apps">
        <div className="sidebar">
          <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
            Show/hide Favorite Cocktails
          </button>
        </div>
        {renderPoemView()}
      </div>
      </div>
    )
  }
  
  