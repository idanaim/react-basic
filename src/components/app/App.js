import React, {Component} from 'react';
import './App.css';
import {AddRecipe} from "../AddRecipe";
import {Recipes} from "../Recipes";
import {getID} from "../../services/utils";


/**Add prop-types to components need to add prop-types to package.json
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
        title: 'Waffles'
      },{id: getID(),
        title: 'Omelets'}]
    }
  }


  render() {
    return (
        <div className="App">
          <h3>Recipes:</h3>
          <AddRecipe addRecipe={this.addRecipe}/>
          <Recipes recipes={this.state.recipes}/>
        </div>
    );
  }


  addRecipe = (title) => {
    const newRecipes = this.state.recipes.concat({
      id:getID(),
      title: title.value
    });
    this.setState({recipes: newRecipes});
  }
}

export default App;
