import React from 'react';
import PropTypes from 'prop-types';
import './ToggleBox.css';
import classNames from 'classnames';

const ToggleBox = (props) => (
    <div onClick={props.toggle}
        className={classNames('toggle-box',{active: props.active})}>
      {props.title}

    </div>
)

ToggleBox.propsTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ToggleBox;