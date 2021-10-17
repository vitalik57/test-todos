import React from 'react'

const TodoList = ({users,onDeleteTodo,onToggleTodo}) => {
    return (
        <>
        <ul className="TodoList">
    {users.map(({ id, title, completed }) => (
      <li
        key={id}
        // className={classNames('TodoList__item', {
        //   'TodoList__item--completed': completed,
        // })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleTodo(id)}
        />
        <p className="TodoList__text">{title}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() =>onDeleteTodo(id)}
        >\

        \
        
          Удалить
        </button>
      </li>
    ))}
  </ul></>
    );
}

export default TodoList;