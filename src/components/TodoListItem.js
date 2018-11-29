import React from 'react';

const TodoListItem = (props) =>
  <li>
    <button onClick={() => props.deleteTodo(props.index)}>delete</button>
    {props.item}
  </li>

export default TodoListItem;