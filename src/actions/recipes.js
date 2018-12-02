import * as consts from '../constants/actions-types';

export const addRecipe = (recipe) => ({
  type: consts.ADD_RECIPE,
  title: recipe.title,
  description: recipe.description,
});

export const toggleRecipe = (recipe) => ({
  type: consts.TOGGLE_RECIPE,
  id: recipe.id
});

