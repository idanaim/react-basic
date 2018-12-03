import * as consts from '../constants/actions-types';

const initalState = {
  name: 'Idan Naim'
}


const reducer = (user = initalState, action) => {
  switch (action.type) {
    case consts.SET_USER:
      return Object.assign({}, user, {
        name: action.name
      });
    default:
      return user;
  }
};

export default reducer;