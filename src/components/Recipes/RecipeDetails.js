import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToggleBox from "../toggle-box/ToggleBox";
import {toggleRecipe} from "../../actions/recipes";

const RecipeDetails = ({ recipe, toggleRecipe }) => (
    <div>
      <h3>{ recipe.title }</h3>
      <p>{ recipe.description }</p>
      <ToggleBox title="favorite" active={recipe.favorite} toggle={()=> toggleRecipe(recipe)} />

    </div>
);

const RecipeDetailsWrapper = ({ recipe, toggleRecipe }) =>
    recipe
        ? <RecipeDetails recipe={ recipe } toggleRecipe={toggleRecipe}/>
        : <h3>Not found</h3>;


RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleRecipe: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);

  return {
    recipe: state.recipes.find(recipe => recipe.id === id)
  };
};


export default connect(mapStateToProps,{toggleRecipe})(RecipeDetailsWrapper);
