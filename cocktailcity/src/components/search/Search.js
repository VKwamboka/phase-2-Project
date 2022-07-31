import React,{useState, useEffect} from 'react'
import CockCard from '../cockcard/CockCard'

const SEARCH_URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function Search() {

  const [searchItem, setSearchItem] = useState("")
  const [counter, setCounter] = useState(0)
  const [results, setResults] = useState(0)
  const [drinks, setDrinks] = useState([]);
// json-server --watch db.json -p 8004

  const handleSearch = (event) => {
    setSearchItem(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      setCounter(counter + 1)
  }

  const searchInfo = () => {

    const actualSearch = SEARCH_URL + searchItem

    fetch(actualSearch)
    .then((response) => response.json())
    .then((data) => {
        setResults(data.drinks == null ? 0 : data.drinks.length )
        setSearchItem("")
        setDrinks (data.drinks)
        console.log(data)
  
        // fetch(actualSearch)
        // .then((r) => r.json())
        // .then((data) =>{
        //   // const drink = data.drinks[0]
        //   setDrinks (data.drinks)
        //   console.log(data)
    
        // })
    }).catch(error =>{
      console.log(error)
    })
}

useEffect(
    searchInfo, [ counter]
)


let card =  drinks.map(drink =>{
  return(
    
    <CockCard 
      drinkName={drink.strDrink} 
      drinkThumb={drink.strDrinkThumb} 
      drinkId={drink.idDrink}
      key ={drink.idDrink}
    />
  
  )
})


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="form-label">SEARCH DRINK</label>
       
        <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
      </form>
      <h3 className='mt-4'>MOST POPULAR DRINKS </h3>
     
        <hr className='class1'/>
        <br/>
      <div >
          {card}
      </div>

    </div>
  )
}
