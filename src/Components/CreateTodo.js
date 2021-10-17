import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewComment } from "../redux/comments/commentsActions";
import { v4 as uuidv4 } from "uuid";
import styles from "./CreateTodo.module.css";
class CreateTodo extends Component {
  state = {
    message: ""
  };
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  addTodo = text => {
    const todo = {
      id: uuidv4(),
      title: text,
      completed: false
    };

    this.props.addNewComment(todo);
  };
  handleSubmit = e => {
    e.preventDefault();

    this.addTodo(this.state.message);

    this.setState({ message: "" });
  };

  render() {
    console.log(this.props);
    return (
      <>
        {" "}
        <form className={styles.TodoEditor} onSubmit={this.handleSubmit}>
          <textarea className={styles.TodoEditor__textarea} value={this.state.message} onChange={this.handleChange} />
          <button type="submit" className={styles.TodoEditor__button}>
            Сохранить
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  comments: state.comments
});
const mapDispatchToProps = {
  addNewComment: addNewComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
// export default CreateTodo;
