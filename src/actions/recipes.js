import * as consts from '../constants/actions-types';

export const addRecipe = (recipe) => ({
  type: consts.ADD_RECIPE,
  payload: {
    title: recipe.title,
    description: recipe.description,
    id: recipe.id
  }
});

export const toggleRecipe = (recipe) => ({
  type: consts.TOGGLE_RECIPE,
  payload: recipe.id
});

export const fetchRecipes = () => ({
  type: consts.API,
  payload: {
    url: 'recipes.json',
    success: consts.SET_RECIPES
  }

})
