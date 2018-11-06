import React, {Component} from 'react';
import './App.css';

/**Added id to the items
 * @param props
 * @returns {*}
 * @constructor
 */
let id = 0;
const getID = () => id += 1;

const Recipe = (props) => (
    <li className="recipe">{props.recipe.title}</li>
);

const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
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
