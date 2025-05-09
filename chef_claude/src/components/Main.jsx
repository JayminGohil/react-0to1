import '../styles/Main.css'
import { useState,useRef,useEffect } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../ai'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient-name")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipe, setRecipe] = useState("")

    const recipeSection = useRef(null)
    useEffect(()=>{
        if(recipe!=="" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    async function handleGetRecipe() {
        console.log(ingredients)
        const recipeMD = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMD)
    }
    
    return (
        <main>
            <form className="input-container" action={handleSubmit}>
                <input type='text' name='ingredient-name' placeholder='A Tomato Maybe' />
                <input type="submit" value="+ Add Ingredient" />
            </form>
            {
                ingredients.length > 0 ? <IngredientsList ingredients={ingredients} handleClick={handleGetRecipe} ref={recipeSection}  /> : null
            }
            {
                recipe ? <ClaudeRecipe recipe={recipe}/> : null
            }
        </main>
    )
}