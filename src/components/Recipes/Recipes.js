import React from 'react';
import {Recipe} from "./Recipe";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {toggleRecipe} from "../../actions/recipes";

 const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id}
                                           recipe={recipe}
                                           toggle={props.toggle}/>)}
    </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes:state.recipes,
  }
}

export default connect(mapStateToProps, {toggle: toggleRecipe})(Recipes);