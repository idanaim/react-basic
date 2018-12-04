import React from 'react';
import {Recipe} from "./Recipe";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleRecipe as toggle, fetchRecipes} from '../../actions/recipes';
import {Link, withRouter} from 'react-router-dom';

const Recipes = (props) => (
    <div className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id}
                                           recipe={recipe}
                                           toggle={props.toggle}/>)}
      <div className="actions">
      <Link to="/add">Add Recipe</Link>
      <Link to="/changeUser">Change user name</Link>
      <span onClick={props.fetchRecipes} className="fetch-recipes">fetch Recipes</span>
         </div>
    </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

export default withRouter(connect(mapStateToProps, {toggle, fetchRecipes})(Recipes));