import React, {Component} from 'react';
import './App.css';
import {AddRecipe} from "../AddRecipe";
import {Recipes} from "../RecipesView/Recipes";
import {getID} from "../../services/utils";
import Header from "../header/Header";
import {Footer} from "./footer/Footer";



/**Add favirote with classNames to components need to add classNames to package.json
 * @param props
 * @returns {*}
 * @constructor
 */

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [{
        id: getID(),
        title: 'Waffles',
        favorite: true
      }, {
        id: getID(),
        title: 'Omelets',
        favorite: false
      }]
    }
  }
  toggleRecipes = (recipe) => {
    recipe.favorite = !recipe.favorite;
    this.forceUpdate();
  };



  render() {
    return (
        <div className="App">.
          <Header />
          <h3>Recipes:</h3>
          <AddRecipe addRecipe={ this.addRecipe }/>
          <Recipes recipes={this.state.recipes} toggle ={ this.toggleRecipes }/>
          <Footer />
        </div>
    );
  }


  addRecipe = (title) => {
    const id = getID();
    const newRecipes = this.state.recipes.concat({
      id ,
      title: title.value,
      favorite: false
    });
    this.setState({recipes: newRecipes});
  }
}

export default App;
