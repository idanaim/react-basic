import {getID} from "./services/utils";
import {createStore} from 'redux';


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
    case 'ADD_RECIPE':
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };
      const newRecipes = state.recipes.concat(newRecipe);
      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case 'TOGGLE_RECIPE':
      const updatedRecipes = state.recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite }));

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
    favorite: true
  }, {
    id: getID(),
    title: 'Omelets',
    favorite: false
  }]
}

const store = createStore(reducer, initialState);

window.store = store;

export default store;