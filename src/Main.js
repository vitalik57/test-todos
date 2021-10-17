import { connect } from "react-redux";
import React, { Component } from "react";
import { store } from "./redux/store";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import CreateTodo from "./Components/CreateTodo"
import TodoList from "./Components/TodoList"

import { addAllUsers,addToCart,removeFromCartByID,toggleCompleted } from "./redux/users/usersActions";
class Main extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => this.props.addAllUsers(res.data.slice(0, 10)));
    // res => console.log(res.data.slice(0, 10))
  }
 addTodo = text => {
    const todo = {
      id: uuidv4(),
     title: text,
      completed: false,
    };

this.props.addToCart(todo)
  };
  onDeleteTodo = todoId => {
   this.props. removeFromCartByID(todoId)
  };
  onToggleTodo = todoId => {
   this.props. toggleCompleted(todoId)
  };

  render() {
    // console.log(uuid());
    // store.dispatch(addAllUsers({ name: "alex" }));

    return (
      <>
      
       <TodoList users={this.props.users} onDeleteTodo={this.onDeleteTodo} onToggleTodo={this.onToggleTodo}/>
     {/* <ul className="TodoList">
    {this.props.users.map(({ id, title, completed }) => (
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
          // onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{title}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() =>this. props.removeFromCartByID(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul> */}
  <CreateTodo onSubmit={this.addTodo}/>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = {
  addAllUsers: addAllUsers,
  removeFromCartByID:removeFromCartByID,
  addToCart:addToCart,
  toggleCompleted:toggleCompleted
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
