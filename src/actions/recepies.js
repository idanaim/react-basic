import * as CONSTS from '../constants/actions-types'

export const addRecipe = (title) => ({
    type: CONSTS.ADD_RECIPE,
    title
});
