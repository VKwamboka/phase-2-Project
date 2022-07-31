import React,{useState} from 'react'

const cocktailAPI = "http://localhost:8004/drinks";

export default function RecipeForm({addDrink}) {

  const [strDrinkThumb, setImage] = useState("")
  const [strDrink, setTitle] = useState("")
  const [strCategory, setCategory] = useState("")
  const [strAlcoholic, setAlcoholic] = useState("")
  const [strIngredient1, setIngre1] = useState("")
  const [strIngredient2, setIngre2 ]= useState("")
  const [strIngredient3, setIngre3]= useState("")
  const [strIngredient4, setIngre4 ]= useState("")
  const [strIngredient5, setIngre5 ]= useState("")
  const [strIngredient6, setIngre6 ]= useState("")
  const [strIngredient7, setIngre7 ]= useState("")
  const [strIngredient8, setIngre8 ]= useState("")
  const [strIngredient9, setIngre9 ]= useState("")
  const [strIngredient10, setIngre10]= useState("")
  const [strInstructions, setInstructions] = useState("")
  const [formVisible, setFormVisible] = useState(true);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch(cocktailAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // "id": "1",
          strDrink,
          strCategory,
          strAlcoholic,
          strInstructions,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        }),
      })
        .then((r) => r.json())
        .then((newCocktail) => addDrink(newCocktail));
  
      setTitle("")
      setCategory("")
      setAlcoholic("")
      setIngre1("")
      setIngre2("")
      setIngre3("")
      setIngre4("")
      setIngre5("")
      setIngre6("")
      setIngre7("")
      setIngre8("")
      setIngre9("")
      setIngre10("")
      setInstructions("")
      setImage("")
    }
  return (
    // <div className = 'app'>
    // <div  className = ''>
        <div className='sidebar'>
    
        <button 
              onClick={() => setFormVisible(!formVisible)} >
              Show/hide new recipe form
            </button>
            {formVisible ? 
        <form className="new-poem-form" onSubmit={handleSubmit} >
          <input 
            placeholder="Title" 
            value={strDrink}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input 
            placeholder="Alcoholic" 
            value={strAlcoholic}
            onChange={(e) => setAlcoholic(e.target.value)}
          />

          <input 
            placeholder="Image address" 
            value={strDrinkThumb}
            onChange={(e) => setImage(e.target.value)}
          />

          <input 
            placeholder="Category" 
            value={strCategory}
            onChange={(e) => setCategory(e.target.value)}
          />

          <textarea 
            placeholder="Ingredients..." 
            rows={10} 
            value={strIngredient1}
            onChange={(e) => setIngre1(e.target.value)}
            
          />
          
          <input 
            type="submit" 
            value="Add Recipe" 
          />
        </form>: null}
        </div>
        // </div>
    // </div>
  )
}
