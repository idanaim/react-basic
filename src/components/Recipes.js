import React from 'react';
import {Recipe} from "./Recipe";

export const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
    </ul>
);