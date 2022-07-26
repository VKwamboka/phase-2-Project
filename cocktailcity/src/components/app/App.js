import React from "react";
import Navbar from "../navbr/Navbar";
import Home from "../home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Search from "../search/Search";
import DrinkDetails from "../details/DrinkDetails";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path ='/drink/:drinkId' element={<DrinkDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
