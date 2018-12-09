import * as CONSTS from "./constants/actions-types";
import { createStore } from 'redux';
import { getID } from "./services/utils";

const reducer = (state, action) => {
    switch (action.type) {
        case CONSTS.ADD_RECIPE:
            const newRecipe = {
                id: getID(),
                title: action.title,
                favorite: false
            }
            const newRecipes = state.recipes.concat(newRecipe);
            return Object.assign({}, state, {
                recipes: newRecipes
            })

        default: return;
    }
}

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
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;