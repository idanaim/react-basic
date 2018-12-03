import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const User = ({user}) => (
    <span>{user.name}</span>
)

User.propTypes = {
  user: PropTypes.object.isRequired
};

const mapToStateProps = state => ({
  user: state.user
});

export default connect(mapToStateProps)(User);