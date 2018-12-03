import React,{Component} from 'react';
import PropTypes from'prop-types';
import {connect} from "react-redux";
import {changeUser} from "../../actions/user";
import {withRouter} from "react-router-dom";



class ChangeUser extends Component {

  submit(e){
    e.preventDefault();
    this.props.changeUser(this.userName.value);
    this.userName.value = '';
    this.props.history.push(`/`);

  }
  render() {
    return (
        <div>
          <form onSubmit={this.submit.bind(this)}>
            <label>
              Change User name:
            </label>
            <input ref={(e)=>this.userName = e}/>
            <button >Change name</button>
          </form>
        </div>
    );
  }
}

ChangeUser.propTypes = {
  changeUser: PropTypes.func.isRequired
};


export default withRouter(connect(null,{changeUser})(ChangeUser))

