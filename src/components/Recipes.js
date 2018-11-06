import React from 'react';
import {Recipe} from "./Recipe";
import PropTypes from 'prop-types';

export const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
    </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
};