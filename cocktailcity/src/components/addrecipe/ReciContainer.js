import React from 'react'
import {Link} from 'react-router-dom'

export default function ReciContainer({ title, drinkThumb, drinkId}) {
  

  // const {drinkName, drinkThumb, drinkId} = drinks

  // const [cocktails, setCocktails] = useState([]);
  //   const [favoriteVisible, setFavoriteVisible] = useState(true);
  //   const cocktailsToDisplay = cocktails.filter((cocktail) => favoriteVisible || cocktail.isFavorite);


  return (
    <div className='app'>
    <div className='container'>
    <div className="card" style={{width: 12.6 + 'rem'}}>
            <img src={drinkThumb} className="card-img-top" style={{height: 200 + 'px', width:200 + 'px',}} alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
                {/* PROBLEM IS HERE */}
                <button  className='btn btn-success btn-sm'>
                ♥ Favorite
                </button>
                {/* <button type="button" class="btn btn-danger">Delete</button> */}
            </div>
        </div>  
    </div>
    </div>
  )
}
