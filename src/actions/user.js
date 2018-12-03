import {SET_USER} from '../constants/actions-types'

export const changeUser = (name) => ({
      type: SET_USER,
      name
    });