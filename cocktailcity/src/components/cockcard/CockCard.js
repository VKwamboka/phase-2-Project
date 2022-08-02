import React from 'react'
import {Link} from 'react-router-dom'

export default function CockCard({drink, drinkName, drinkThumb, drinkId, addToFavorites}) {

  return (
    <div className='scard'>
        <div className="card" style={{width: 12.6 + 'rem'}}>
            <img src={drinkThumb} className="card-img-top" style={{height: 200 + 'px', width:200 + 'px',}} alt={drinkName}/>
            <div className="card-body">
                <p className="card-title">{drinkName}</p>
                
                {/* PROBLEM HERE */}
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
                {/* <button className='btn btn-success btn-sm'> */}
                {/* {drink.isFavorite ? "Unfavorite" : "♥ Favorite" } */}
               {/* Favorite♥ 
                </button> */}
                <button className='btn btn-success btn-sm' onClick={() => addToFavorites(drink)}>
                  {drinkId.isFavorite ? "Unfavorite" : "♥ Favorite" }
                </button>
                {/* <button type="button" class="btn btn-danger">Delete</button> */}
            </div>
        </div>    
        
    </div>
  )
}
