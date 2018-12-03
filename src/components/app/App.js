import React, {Component} from 'react';
import './App.css';
import RecipesView from "../Recipes/RecipesView";
import Header from "../header/Header";
import {Footer} from "../footer/Footer";


/**Connection with redux:
 * Adding Router in the RecipeView and to the app.js
 * Changing the list structure from list to NavLink in recipe.js
 * Adding RecipeDetails for Recipe
 * And styling
 *
 * @param props
 * @returns {*}
 * @constructor
 */

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <RecipesView/>
          <Footer/>
        </div>
    );
  }

}

export default App;
