import {BASE_URL} from "../constants/envirement";
import {API} from "../constants/actions-types";

const apiMiddleware = ({dispatch}) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const {url, success} = action.payload;

  fetch(BASE_URL + url)
      .then(response => response.json())
      .then(payload => dispatch({type: success, payload}))
      .catch(error => console.log('Error:', error));
}

export default apiMiddleware;