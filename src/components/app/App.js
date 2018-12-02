import React, {Component} from 'react';
import './App.css';
import RecipesView from "../Recipes/RecipesView";
import Header from "../header/Header";
import {Footer} from "../footer/Footer";


/**Connection with redux:
 * Add to package.json: redux, react-redux
 * We should add Provider wrapper in the index.js
 * Create store file
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
