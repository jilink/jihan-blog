import React from "react"

const IngredientList = ({ list }) => {
  return (
    <div>
      <h3>Les ingrédients</h3>
      <ul>
        {list.map(ingredient => {
          return (
            <li>
              {ingredient.name} ({ingredient.quantity})
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IngredientList
