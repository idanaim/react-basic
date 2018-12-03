import React, {Component} from 'react';
import './App.css';
import RecipesView from "../Recipes/RecipesView";
import Header from "../header/Header";
import {Footer} from "../footer/Footer";


/**Connection with redux:
 * combineReducers set initial state in recipes reducer creating root file and clean store file
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
