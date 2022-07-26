import React from 'react'
import {Link} from 'react-router-dom'

export default function CockCard({drinkName, drinkThumb, drinkId}) {
  return (
    <div>
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={drinkThumb} className="card-img-top" alt={drinkName}/>
            <div className="card-body">
                <h5 className="card-title">{drinkName}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={"/drink/"+drinkId}  className="btn btn-primary">DETAILS</Link>
            </div>
        </div>    
    </div>
  )
}
