import { connect } from "react-redux";
import React, { Component } from "react";

import axios from "axios";

import styles from "./Main.module.css";
import { removeFromCommentsByID, toggleCommentsCompleted } from "../redux/comments/commentsActions";
import { addAllUsers, addToCart, removeFromCartByID, toggleCompleted } from "../redux/users/usersActions";
class Main extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => this.props.addAllUsers(res.data.slice(0, 10)));
  }

  render() {
    console.log(this.props);

    return (
      <>
        <ul className={styles.TodoList}>
          {this.props.comments.length
            ? this.props.comments.map(({ id, title, completed }) => (
                <li className={styles.TodoList__item} key={id}>
                  <input
                    type="checkbox"
                    className={styles.TodoList__checkbox}
                    checked={completed}
                    onChange={() => this.props.toggleCommentsCompleted(id)}
                  />
                  <p className={styles.TodoList__text}>{title}</p>
                  <button type="button" className={styles.TodoList__btn} onClick={() => this.props.removeFromCommentsByID(id)}>
                    Удалить
                  </button>
                </li>
              ))
            : ""}
          {this.props.users.map(({ id, title, completed }) => (
            <li className={styles.TodoList__item} key={id}>
              <input
                type="checkbox"
                className={styles.TodoList__checkbox}
                checked={completed}
                onChange={() => this.props.toggleCompleted(id)}
              />
              <p className={styles.TodoList__text}>{title}</p>
              <button type="button" className={styles.TodoList__btn} onClick={() => this.props.removeFromCartByID(id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    comments: state.comments
  };
};
const mapDispatchToProps = {
  addAllUsers: addAllUsers,
  removeFromCartByID: removeFromCartByID,
  addToCart: addToCart,
  toggleCompleted: toggleCompleted,
  toggleCommentsCompleted: toggleCommentsCompleted,
  removeFromCommentsByID: removeFromCommentsByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
