import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Recipe = ({recipe}) => (
    <li className={classNames(
        {
          recipe: true,
          favorite: recipe.favorite
        })}
    >{recipe.title}</li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};
