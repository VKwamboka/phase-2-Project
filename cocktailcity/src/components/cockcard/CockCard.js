import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function CockCard({drink, drinkName, drinkThumb, drinkId, addToFavorites}) {
  const [isFavorite, setFavorites] =useState('♥ Favorite')

  function handleText() {
    const newText = "♥ Favorite";
    setFavorites(newText); 
    if(isFavorite === newText){
      setFavorites("Unfavorite")
    }
  }

  return (
    <div className='scard'>
        <div className="card" style={{width: 12.6 + 'rem'}}>
            <img src={drinkThumb} className="card-img-top" style={{height: 200 + 'px', width:200 + 'px',}} alt={drinkName}/>
            <div className="card-body">
                <p className="card-title">{drinkName}</p>
          
                <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
              
                <button className='btn btn-success btn-sm' onClick={() =>  handleText()}>
               {isFavorite}
                  {/* {drink.isFavorite === true ? "Unfavorite" : "♥ Favorite" } */}
                </button>
            </div>
        </div>    
        
    </div>
  )
}
