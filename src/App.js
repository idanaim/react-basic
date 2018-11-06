import React, { Component } from 'react';
import './App.css';

const recipes = ['Waffles', 'Omelets'];

const Recipe = (props) =>(
    <li>{ props.recipe }</li>
)

const Recipes = (props) => (
  <ul>
    {props.recipes.map(recipe => <Recipe key={recipe} recipe={recipe} />)}
  </ul>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Recipes:</h1>
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

export default App;
