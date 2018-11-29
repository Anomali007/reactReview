import React, { Component } from 'react';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['one', 'two', 'three', 'four']
    }
  }

  addTodo = (item) => {
    let items = [...this.state.items];
    items.push(item);
    this.setState({ items });
  }

  deleteTodo = (index) => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <CreateTodo addTodo={this.addTodo} />
        <br/>
        <TodoList items={this.state.items} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;