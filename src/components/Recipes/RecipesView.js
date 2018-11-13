import React, {Component} from 'react';
import {getID} from "../../services/utils";
import {Recipes} from './Recipes';
import {AddRecipe} from './AddRecipe';


class RecipesView extends Component {

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


  addRecipe = (title) => {
    const id = getID();
    const newRecipes = this.state.recipes.concat({
      id,
      title: title.value,
      favorite: false
    });
    this.setState({recipes: newRecipes});
  };

  render() {
    return (
        <div className="recipes-view">
          <h3>Recipes:</h3>
          <AddRecipe addRecipe={this.addRecipe}/>
          <Recipes recipes={this.state.recipes} toggle={this.toggleRecipes}/>
        </div>
    )
  }
}

export default RecipesView;