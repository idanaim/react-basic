import * as consts from "../constants/actions-types";
import {getID} from "../services/utils";

const initialState = [{
  id: getID(),
  title: 'Waffles',
  favorite: true,
  description: 'Tasty and belgian'

}, {
  id: getID(),
  title: 'Omelets',
  favorite: false,
  description: 'Easy egg work'
}];

const reducer = (recipes = initialState, action) => {
  console.log(`Got Action ${action.type}`);

  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = {
        id: action.id,
        title: action.title,
        description: action.description,
        favorite: false
      };
      return recipes.concat(newRecipe);


    case consts.TOGGLE_RECIPE:
      return recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, {favorite: !recipe.favorite}));

    case consts.SET_RECIPES:
      return action.payload;

    default:
      return recipes;
  }
};

export default reducer;