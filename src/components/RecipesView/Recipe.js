import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Recipe = ({recipe, toggle}) => (
    <li className={classNames(
        {
          recipe: true,
          favorite: recipe.favorite
        })}
        onClick={() => toggle(recipe)}
    >{recipe.title}</li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};
