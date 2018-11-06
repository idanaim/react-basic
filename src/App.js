import React, {Component} from 'react';
import './App.css';

/**split the code and passing action to components
 * @param props
 * @returns {*}
 * @constructor
 */

const Recipe = (props) => (
    <li className="recipe">{props.recipe}</li>
);

const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe} recipe={recipe}/>)}
    </ul>
);


class AddRecipe extends Component {
  constructor() {
    super();
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title);
    this.title.value = '';
  }

  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref={e => this.title = e} type="text"/>
          <button>Add</button>
        </form>

    )
  }

}


class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelets']
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
    const newRecipes = this.state.recipes.concat(title.value);
    this.setState({recipes: newRecipes});
  }
}

export default App;
