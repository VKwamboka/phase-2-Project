import React,{useState} from "react";
import Navbar from "../navbr/Navbar";
import Home from "../home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Search from "../search/Search";
import DrinkDetails from "../details/DrinkDetails";
import RecipeForm from "../addrecipe/RecipeForm";
// import Favourites from "../favourites/Favourites";
import FavouritesContainer from "../favourites/FavouritesContainer";
import Favourites from "../favourites/Favourites";
import Displayrecipe from "../addrecipe/Displayrecipe";



function App() {
  const [drinks, setDrinks] = useState([]);
    const [favoriteVisible, setFavoriteVisible] = useState(true);
    const cocktailsToDisplay = drinks.filter((drink) => favoriteVisible || drink.isFavorite);

    function addToFavorites(favId) {
      setDrinks(drinks.map(drink => {
        return drink.id === favId ? {...drink, isFavorite: !drink.isFavorite} : drink;
        }  
      ))
    }

    function renderPoemView() {
      if (cocktailsToDisplay.length === 0 && !favoriteVisible) {
        return (<h1>You have no favorites added</h1>)
      } else {
        return (
          <div>
          <FavouritesContainer 
            drinks={cocktailsToDisplay} 
          //   removePoem={removePoem} 
            addToFavorites={addToFavorites}
          />
          {/* <Favourites 
             addToFavorites={addToFavorites}
          /> */}
          </div>
        )
      }
    }
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/displayrecipe' element={<Displayrecipe/>}/>
        <Route exact path ='/drink/:drinkId' element={<DrinkDetails/>}/>
        <Route exact path ='/favourites' element={<AppFav/>}/>
      </Routes>
      {/* <div className="app">
      <div className="sidebar">
        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
          Show/hide Favorite Cocktails
        </button>
      </div>
      {renderPoemView()}
    </div> */}
    </Router>
  );
}

export default App;

function AppFav() {
  const [drinks, setDrinks] = useState([]);
    const [favoriteVisible, setFavoriteVisible] = useState(true);
    const cocktailsToDisplay = drinks.filter((drink) => favoriteVisible || drink.isFavorite);

    function addToFavorites(favPoem) {
      setDrinks(drinks.map(cocktail => {
        return cocktail.id === favPoem.id ? {...favPoem, isFavorite: !favPoem.isFavorite} : cocktail
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
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
          Show/hide Favorite Cocktails
        </button>
      </div>
      {renderPoemView()}
    </div>
  )
}

