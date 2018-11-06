import React, {Component} from 'react';
import './App.css';


const Recipe = (props) => (
    <li className="recipe">{props.recipe}</li>
)

const Recipes = (props) => (
    <ul className="recipes">
      {props.recipes.map(recipe => <Recipe key={recipe} recipe={recipe}/>)}
    </ul>
);

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

          <form onSubmit={this.onSubmit.bind(this)}>
            <input ref={e => this.title = e} type="text"/>
            <button>Add</button>
          </form>

          <Recipes recipes={this.state.recipes}/>


        </div>
    );
  }


  onSubmit(e) {
    e.preventDefault();

    const newRecipes = this.state.recipes.concat(this.title.value);

    this.title.value = '';

    this.setState({recipes: newRecipes});
  }
}

export default App;
