import React, {Component} from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

/**
 * add actions to the components and constants
 */

class RecipesView extends Component {

  render() {
    return (
        <div>
          <h3>Recipes:</h3>
          <div className="recipes-view">
            <div className="middle-grid">
              <Recipes/>
            </div>
            <div className="left-grid">
              <AddRecipe/>
            </div>
          </div>
        </div>
    )
  }
}

export default RecipesView;