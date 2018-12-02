import {getID} from "./services/utils";
import {createStore} from 'redux';
import * as consts from './constants/actions-types';


/**
 * Adding reducer to handle the actions
 * Creating initialState
 * and Create store and adding it to the window object
 * @param state
 * @param action
 * @returns {*}
 */

const reducer = (state, action) => {
  console.log(`Got Action ${action.type}`);

  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        description: action.description,
        favorite: false
      };
      const newRecipes = state.recipes.concat(newRecipe);
      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case consts.TOGGLE_RECIPE:
      const updatedRecipes = state.recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, {favorite: !recipe.favorite}));

      return Object.assign({}, state, {
        recipes: updatedRecipes
      });
    default:
      return state;
  }
};

const initialState = {
  recipes: [{
    id: getID(),
    title: 'Waffles',
    favorite: true,
    description: 'Tasty and belgian'

  }, {
    id: getID(),
    title: 'Omelets',
    favorite: false,
    description: 'Easy egg work'
  }]
}

const store = createStore(reducer, initialState);

window.store = store;

export default store;