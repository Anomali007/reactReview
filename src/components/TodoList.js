import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) =>
  <div>
    <ul>
      {props.items.map((item, index) =>
        <TodoListItem key={index} index={index} item={item} deleteTodo={props.deleteTodo}/>
      )}
    </ul>
  </div>

export default TodoList