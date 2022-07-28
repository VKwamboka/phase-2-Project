import React,{useState, useEffect} from 'react'

const SEARCH_URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function Search() {

  const [searchItem, setSearchItem] = useState("")
  const [counter, setCounter] = useState(0)
  const [results, setResults] = useState(0)
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
        setSearchItem("")
        setResults(data.drinks == null ? 0 : data.drinks.length )
        fetch(actualSearch)
        .then((r) => r.json())
        .then((data) =>{
          const drink = data.drinks[0]
    
        })
        // data.forEach( (drink) => {
        //   setTitle(drink.strDrink)
        //   setCategory(drink.strCategory)
        //   setAlcoholic(drink.strAlcoholic)
        //   setIngre1(drink.strIngredient1)
        //   setIngre2(drink.strIngredient2)
        //   setIngre3(drink.strIngredient3)
        //   setIngre4(drink.strIngredient4)
        //   setIngre5(drink.setIngredient5)
        //   setIngre6(drink.setIngredient6)
        //   setInstructions(drink.strInstructions)
        //   setImage(drink.strDrinkThumb)
        // } ) 
    })
}

useEffect(
    searchInfo, [counter]
)

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="form-label">SEARCH DRINK</label>
        <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
      </form>
      <h3 className='mt-4'>SEARCH RESULTS ({results})</h3>
      <div className='row'>

      </div>

    </div>
  )
}
