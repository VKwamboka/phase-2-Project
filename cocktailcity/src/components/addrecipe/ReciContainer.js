import React from 'react'
import {Link} from 'react-router-dom'

const cocktailAPI = "http://localhost:8004/drinks";

export default function ReciContainer({ title, drinkThumb, drinkId,handleDeleteClick}) {
  
  function onDeleteClick(e,drink) {
    e.preventDefault();
    fetch(`${cocktailAPI}/${drink.id}`, {
      method: "DELETE",
    });
    handleDeleteClick(drink);
  }


  return (
  
    <div className='scards'>
      <div className='poems-container'>
        
        <div className="card" style={{width: 12.8 + 'rem'}}>
          <img src={drinkThumb} className="card-img-top" style={{height: 200 + 'px', width:200 + 'px',}} alt={title}/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <Link to={"/drink/"+drinkId}  className="btn btn-primary btn-sm">Details</Link>
              {/* PROBLEM IS HERE */}
              <button  className='btn btn-success btn-sm'>
              Fav♥
              </button>
              <button type="button" className="btn btn-danger btn-sm" onClick={onDeleteClick}>❌</button>
          </div>
        </div>  
      </div>
    </div>
  )
}
