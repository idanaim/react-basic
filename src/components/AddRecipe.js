import React, {Component} from "react";

export class AddRecipe extends Component {

  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title);
    this.title.value = '';
  }

  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref={e => this.title = e} type="text"/>
          <button>Add</button>
        </form>

    )
  }

}