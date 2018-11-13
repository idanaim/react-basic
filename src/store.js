import {getID} from "./services/utils";
import {createStore} from 'redux';

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