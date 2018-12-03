import React, {Component} from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import {Route, Switch} from 'react-router-dom';
import RecipeDetails from "./RecipeDetails";

/**
 * add actions to the components and constants
 */

class RecipesView extends Component {

  render() {
    return (
        <div>
          <div className="recipes-view">

            <div className="middle-grid">
              <Recipes/>
            </div>

            <div className="left-grid">
              <Switch>
                <Route exact path="/" render={() => <h3>Welcome</h3>}/>
                <Route exact path="/add" component={AddRecipe}/>
                <Route exact path="/recipe/:id" component={RecipeDetails}/>
              </Switch>
            </div>

          </div>
        </div>
    )
  }
}

export default RecipesView;