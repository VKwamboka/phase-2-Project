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
               
                <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
               
            </div>
        </div>  
    </div>
  )
}
