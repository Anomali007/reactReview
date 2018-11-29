import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) =>
  <div>
    {props.items.map((item, index) => 
      <TodoListItem key={index} index={index} item={item} deleteTodo={props.deleteTodo}/>
    )}
  </div>

export default TodoList