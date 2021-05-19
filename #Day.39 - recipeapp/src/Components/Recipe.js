import React from "react";
import style from './Recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
             <img src={image}  className={style.images} alt="images"/>
            <h1>{title}</h1><br/>
            <p className={style.cal}>Calories: {calories}</p><br/>
            <label>Ingredients</label>
            <ol className={style.txt}>
                {ingredients.map(ingredient => (
                    <li >{ingredient.text}</li>
                ))}
            </ol>
           
           
        </div>
    )
}

export default Recipe;