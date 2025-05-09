export default function IngredientsList(props){
    
    const ingredientsListItems = props.ingredients.map((ingredient) =>(
            <li key={ingredient}>{ingredient}</li>
    ))

    return(
        <section>
        <h2>Ingredients On Hand:</h2>
        <ul>
            {ingredientsListItems}
        </ul>
        {
            props.ingredients.length > 2 ?
                <div className="center-recipe">
                    <div className="get-recipe-container" ref={props.ref}>
                        <div className="get-recipe-text-container">
                            <span>Ready For A Recipe?</span>
                            <span>Generate a recipe from your list of ingredients.</span>
                        </div>
                        <button onClick={props.handleClick}>Get A Recipe</button>
                    </div>
                </div>
                : null
        }
        </section>
    )
}