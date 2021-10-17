import React from 'react'
import Main from "./Main"
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CreateTodo from "./Components/CreateTodo"
import TodoList from "./Components/TodoList"
import NotFound from "./Components/TodoList"

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/createTodo">Create Todo</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={CreateTodo} />
        <Route exact path="/todos" component={TodoList} />
        <Route component={NotFound} />
      </Switch>
      {/* <Revies /> */}
    </>
  );
}

export default App;