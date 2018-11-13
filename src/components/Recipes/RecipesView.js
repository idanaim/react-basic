import React, {Component} from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';


class RecipesView extends Component {

  render() {
    return (
        <div className="recipes-view">
          <h3>Recipes:</h3>
          <AddRecipe />
          <Recipes />
        </div>
    )
  }
}

export default RecipesView;