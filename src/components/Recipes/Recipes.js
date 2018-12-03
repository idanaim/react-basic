import React from 'react';
import {Recipe} from "./Recipe";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleRecipe as toggle} from '../../actions/recipes';
import {Link, withRouter} from 'react-router-dom';

const Recipes = (props) => (
    <div className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id}
                                           recipe={recipe}
                                           toggle={props.toggle}/>)}
      <div className="actions">
      <Link to="/add">Add Recipe</Link>
      <Link to="/changeUser">Change user name</Link>
         </div>
    </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

export default withRouter(connect(mapStateToProps, {toggle})(Recipes));