import React, {Component} from 'react';
import './App.css';
import {AddRecipe} from "./components/AddRecipe";
import {Recipes} from "./components/Recipes";
import {getID} from "./services/utils";


/**Split to files and directories
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
