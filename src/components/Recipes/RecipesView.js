import React, {Component} from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import {Route, Switch, withRouter} from 'react-router-dom';
import RecipeDetails from "./RecipeDetails";
import ChangeUser from "../change-user/ChangeUser";
import {fetchRecipes} from '../../actions/recipes';
import PropTypes from 'prop-types';
import './Recipes.css';
import {connect} from "react-redux";
import User from "../user/User";


/**
 * add actions to the components and constants
 */

class RecipesView extends Component {

  componentDidMount() {
   this.refresh();
  }

  render() {
    return (
        <div>
          <div className="recipes-view">

            <div className="middle-grid">
              <Recipes/>
            </div>

            <div className="left-grid">
              <Switch>
                <Route exact path="/" render={() => <h3>Welcome <User /></h3>}/>
                <Route exact path="/add" component={AddRecipe}/>
                <Route exact path="/recipe/:id" component={RecipeDetails}/>
                <Route exact path="/changeUser" component={ChangeUser}/>
              </Switch>
            </div>

          </div>
        </div>
    )
  }

  refresh() {
    this.props.fetchRecipes();
  }
}

RecipesView.propTypes = {
  fetchRecipes: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
};
export default withRouter(connect(mapStateToProps, {fetchRecipes})(RecipesView));
