import * as consts from '../constants/actions-types';

export const addRecipe = (title) => ({
  type: consts.ADD_RECIPE,
  title
});

export const toggleRecipe = (recipe) => ({
  type: consts.TOGGLE_RECIPE,
  id: recipe.id
});

