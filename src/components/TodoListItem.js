import React from 'react';

const TodoListItem = (props) =>
  <div>
    <button onClick={() => props.deleteTodo(props.index)}>delete</button>
    {props.item}
  </div>

export default TodoListItem;