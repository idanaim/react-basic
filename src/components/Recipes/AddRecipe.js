import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addRecipe} from '../../actions/recipes';
import { withRouter } from 'react-router-dom';

class AddRecipe extends Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.addRecipe({title: this.title.value, description: this.description.value});
    this.title.value = '';
    this.description.value = '';
  }

  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label className="form-label">Title:</label><input ref={e => this.title = e} type="text"/>
          </div>
          <div>
            <label className="form-label">Description:</label>
            <textarea ref={e => this.description = e}/>
          </div>
          <button>Add</button>
        </form>

    )
  }
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};


export default withRouter(connect(null, {addRecipe})(AddRecipe));
