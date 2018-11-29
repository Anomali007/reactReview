import React, { Component } from 'react';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
  }

  updateItem = (e) => {
    let { value } = e.target;
    this.setState({ item: value });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.addTodo}>
          <input type="text" onChange={this.updateItem}/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default CreateTodo;