import React from 'react';
import PropTypes from 'prop-types';

export const Recipe = (props) => (
    <li className="recipe">{props.recipe.title}</li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};
