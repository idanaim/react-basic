import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Recipe = ({recipe}) => (
    <NavLink to={ `/recipe/${ recipe.id }` } className='recipe' activeClassName='current'>
      {recipe.title}
    </NavLink>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};
