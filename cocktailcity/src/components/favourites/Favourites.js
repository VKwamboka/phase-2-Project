// import React,{useState} from 'react'
// import FavouritesContainer from './FavouritesContainer';

// export default function Favourites() {
    // const [cocktails, setCocktails] = useState([]);
    // const [favoriteVisible, setFavoriteVisible] = useState(true);
    // const cocktailsToDisplay = cocktails.filter((cocktail) => favoriteVisible || cocktail.isFavorite);

    // function addToFavorites(favPoem) {
    //     setCocktails(cocktails.map(cocktail => {
    //       return cocktail.id === favPoem.id ? {...favPoem, isFavorite: !favPoem.isFavorite} : cocktail
    //       }  
    //     ))
    //   }
    
      // function renderPoemView() {
      //   if (cocktailsToDisplay.length === 0 && !favoriteVisible) {
      //     return (<h1>You have no favorites added</h1>)
      //   } else {
      //     return (
      //       <FavouritesContainer 
      //         poems={cocktailsToDisplay} 
      //       //   removePoem={removePoem} 
      //         addToFavorites={addToFavorites}
      //       />
      //     )
      //   }
      // }

//   return (
//     <div className='container'>
//     {renderPoemView()}
//     </div>
//   )
// }
import React from 'react'
import {Link} from 'react-router-dom'


export default function Favourites({ title, drinkThumb, drinkId, addToFavorites}) {


  return (
    
    <div className='container'>
    {/* <p>Favourites</p> */}
    <div className="card" style={{width: 12.6 + 'rem'}}>
            <img src={drinkThumb} className="card-img-top" style={{height: 200 + 'px', width:200 + 'px',}} alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
                {/* PROBLEM IS HERE */}
                {/* <button  className='btn btn-success btn-sm'>
                ♥ Favorite
                </button> */}
                {/* <button type="button" class="btn btn-danger">Delete</button> */}
            </div>
        </div>  
    </div>
  )
}
