import React,{useState} from 'react'

const cocktailAPI = "http://localhost:8004/drinks";

export default function RecipeForm() {

  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [ingre1, setIngre1] = useState("")
  const [ingre2, setIngre2 ]= useState("")
  const [ingre3, setIngre3]= useState("")
  const [ingre4, setIngre4 ]= useState("")
  const [ingre5, setIngre5 ]= useState("")
  const [ingre6, setIngre6 ]= useState("")
  const [instructions, setInstructions] = useState("")
  const [formVisible, setFormVisible] = useState(true);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch(cocktailAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          image,
          category,
          alcoholic,
          ingre1,
          ingre2,
          ingre3,
          ingre4,
          ingre5,
          ingre6,
          instructions,
        }),
      })
        .then((r) => r.json())
        .then((newCocktail) => console.log(newCocktail));
  
      setTitle("")
      setCategory("")
      setAlcoholic("")
      setIngre1("")
      setIngre2("")
      setIngre3("")
      setIngre4("")
      setIngre5("")
      setIngre6("")
      setInstructions("")
      setImage("")
    }
  return (
    <div className = 'app'>
    <div className='container'>
    <div className="sidebar">
   <p>Add your Cocktail Recipes here</p> 
    <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new recipe form
        </button>
        {formVisible ? 
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Alcoholic" 
        value={alcoholic}
        onChange={(e) => setAlcoholic(e.target.value)}
      />

      <input 
        placeholder="Image address" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input 
        placeholder="Category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <textarea 
        placeholder="Ingredients..." 
        rows={10} 
        value={ingre1}
        onChange={(e) => setIngre1(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Add Recipe" 
      />
    </form>: null}
    </div>
    </div>
    </div>
  )
}
