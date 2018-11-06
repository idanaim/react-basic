import React, {Component} from 'react';
import './App.css';
import {AddRecipe} from "../AddRecipe";
import {Recipes} from "../Recipes";
import {getID} from "../../services/utils";


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
