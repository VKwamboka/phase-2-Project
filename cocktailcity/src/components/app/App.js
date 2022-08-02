import React from "react";
import Navbar from "../navbr/Navbar";
import Home from "../home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Search from "../search/Search";
import DrinkDetails from "../details/DrinkDetails";
import AppFav from "./AppFav";
import Displayrecipe from "../addrecipe/Displayrecipe";
import RecipeDetails from "../addrecipe/RecipeDetails";



function App() {
  
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
        <Route exact path ='/drinks/:drinkId' element={<RecipeDetails/>}/>
        <Route exact path ='/fav/:drinkId' element={<Displayrecipe/>}/>
        <Route exact path ='/favourites' element={<AppFav/>}/>
      </Routes>
    </Router>
  );
}

export default App;

