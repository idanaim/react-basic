import React, {Component} from 'react';
import './App.css';
import RecipesView from "../Recipes/RecipesView";
import Header from "../header/Header";
import {Footer} from "../footer/Footer";


/**Add favirote with classNames to components need to add classNames to package.json
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
