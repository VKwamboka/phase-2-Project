import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
const SEARCH_URL = "http://localhost:8004/drinks"

export default function RecipeDetails() {
  const [drinkThumb, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [ingre1, setIngre1] = useState("")
  const [ingre2, setIngre2 ]= useState("")
  const [ingre3, setIngre3]= useState("")
  const [ingre4, setIngre4 ]= useState("")
  const [ingre5, setIngre5 ]= useState("")
  const [ingre6, setIngre6 ]= useState("")
  // const [ingre7, setIngre7 ]= useState("")
  // const [ingre8, setIngre8 ]= useState("")
  // const [ingre9, setIngre9 ]= useState("")
  // const [ingre10, setIngre10] = useState("")
  const [instructions, setInstructions] = useState("")

  let {drinkId} = useParams()

  const actualSearch = SEARCH_URL
  const drinkFetcher = () =>{
    fetch(actualSearch)
    .then((r) => r.json())
    .then((data) =>{
        console.log(data)
      const drink = data[0]


      setTitle(drink.strDrink)
      setCategory(drink.strCategory)
      setAlcoholic(drink.strAlcoholic)
      setIngre1(drink.strIngredient1)
      setIngre2(drink.strIngredient2)
      setIngre3(drink.strIngredient3)
      setIngre4(drink.strIngredient4)
      setIngre5(drink.setIngredient5)
      setIngre6(drink.setIngredient6)
      setInstructions(drink.strInstructions)
      setImage(drink.strDrinkThumb)
    })
  }

  useEffect(
    drinkFetcher, []
  )

  return (
    <div>
      <center>
        <img src={drinkThumb} style={{height: 200 + 'px', width:200 + 'px',}} alt="Drink"/>
        <h3>{title}</h3>
        <h6 className='badge bg-success'>{category}</h6>
        <h6>{alcoholic}</h6>
        <h4>Ingredients</h4>
        <h6>{ingre1}</h6>
        <h6>{ingre2}</h6>
        <h6>{ingre3}</h6>
        <h6>{ingre4}</h6>
        <h6>{ingre5}</h6>
        <h6>{ingre6}</h6>
        <p>{instructions}</p>
      </center>
    
    </div>
  )
}
